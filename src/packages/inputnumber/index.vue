<template>
  <view :class="classes">
    <nut-icon
      name="minus"
      :size="size"
      :color="getIconColor('minus')"
      @click="reduce"
    ></nut-icon>
    <input
      type="number"
      :min="state.minVal"
      :max="max"
      :readonly="readonly"
      :value="state.num"
      @input="numChange"
      @blur="blur"
      @focus="focus"
    />
    <nut-icon
      name="plus"
      :size="size"
      :color="getIconColor('plus')"
      @click="add"
    ></nut-icon>
  </view>
</template>
<script lang="ts">
import { computed, reactive, watch, toRefs } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('inputnumber');
interface Events {
  eventName:
    | 'update:modelValue'
    | 'change'
    | 'focus'
    | 'blur'
    | 'add-no-allow'
    | 'reduce-no-allow';
  params: (string | number | Event)[];
}
export default create({
  props: {
    size: {
      type: [String],
      default: '20px'
    },
    color: {
      type: String,
      default: '#1a1a1a'
    },
    disColor: {
      type: String,
      default: '#ccc'
    },
    min: {
      type: [Number, String],
      default: 0
    },
    max: {
      type: [Number, String],
      default: Infinity
    },
    step: {
      type: [Number, String],
      default: 1
    },
    readonly: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    decimalPlaces: {
      type: [String, Number],
      default: 0
    },
    beforeChange: {
      type: Function
    }
  },
  emits: [
    'update:modelValue',
    'change',
    'blur',
    'focus',
    'reduce',
    'reduce-no-allow',
    'add',
    'add-no-allow'
  ],

  setup(props, { emit }) {
    const { modelValue, min, max, step } = toRefs(props);
    const state = reactive({
      num: !modelValue.value ? min.value : modelValue.value,
      minVal: min.value,
      tempVal: '',
      focusing: false
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const isPromise = (obj: any) => {
      return (
        !!obj &&
        (typeof obj === 'object' || typeof obj === 'function') &&
        typeof obj.then === 'function'
      );
    };

    const callInterceptor = (
      interceptor: Function,
      done: Function,
      fail?: Function
    ) => {
      const res = interceptor.apply(null, arguments || []);
      if (interceptor) {
        if (isPromise(res)) {
          res.then((value: boolean) => {
            if (value) {
              done();
            } else {
              fail && fail();
            }
          });
        } else if (res) {
          done();
        } else if (fail) {
          fail();
        }
      } else {
        done();
      }
    };

    const format = (v: string | number): string | number => {
      if (v > max.value) {
        v = max.value;
      }
      if (v < state.minVal) {
        v = state.minVal;
      }

      return v;
    };

    const fixedDecimalPlaces = (v: string | number): string => {
      return Number(v).toFixed(Number(props.decimalPlaces));
    };

    const getIconColor = (type: 'minus' | 'plus') => {
      if (type === 'minus') {
        return (state.focusing ? Number(state.tempVal) : Number(state.num)) -
          Number(step.value) <
          min.value
          ? props.disColor
          : props.color;
      } else if (type === 'plus') {
        return Number(state.num) > Number(max.value) - Number(step.value)
          ? props.disColor
          : props.color;
      } else {
        throw new Error('type is not be supported~');
      }
    };

    const emitChange = (envs: Events[]) => {
      envs.forEach(item => {
        emit(item.eventName, ...item.params);
      });
    };

    const numChange = (e: Event) => {
      const input = e.target as HTMLInputElement;
      let val = input.value;
      val = String(format(val));
      input.value = val;
      if (props.beforeChange) {
        callInterceptor(props.beforeChange, () => {
          state.num = val;
        });
      } else {
        state.num = val;
      }

      emitChange([
        {
          eventName: 'update:modelValue',
          params: [state.num]
        },
        {
          eventName: 'change',
          params: [state.num]
        }
      ]);
    };

    const focus = (e: Event) => {
      if (props.readonly) return;
      const val = String(state.num);
      state.tempVal = val;
      state.minVal = '';
      state.focusing = true;
      emitChange([
        {
          eventName: 'focus',
          params: [e, state.num]
        }
      ]);
    };

    const blur = (e: Event) => {
      const val = (e.target as HTMLInputElement).value;
      state.minVal = String(min.value);
      if (props.beforeChange) {
        callInterceptor(props.beforeChange, () => {
          state.num = val ? format(val) : state.tempVal;
        });
      } else {
        state.num = val ? format(val) : state.tempVal;
      }
      state.focusing = false;
      emitChange([
        {
          eventName: 'update:modelValue',
          params: [state.num]
        },
        {
          eventName: 'blur',
          params: [e, state.num]
        }
      ]);
    };

    const reduce = () => {
      if (getIconColor('minus') === props.color) {
        const [n1, n2] = fixedDecimalPlaces(
          Number(state.num) - Number(props.step)
        ).split('.');
        const fixedLen = n2 ? n2.length : 0;
        if (props.beforeChange) {
          callInterceptor(props.beforeChange, () => {
            state.num = parseFloat(n1 + (n2 ? `.${n2}` : '')).toFixed(fixedLen);
          });
        } else {
          state.num = parseFloat(n1 + (n2 ? `.${n2}` : '')).toFixed(fixedLen);
        }

        emitChange([
          {
            eventName: 'update:modelValue',
            params: [state.num]
          },
          {
            eventName: 'change',
            params: [state.num]
          }
        ]);
      } else {
        emitChange([
          {
            eventName: 'reduce-no-allow',
            params: []
          }
        ]);
      }
    };

    const add = () => {
      if (getIconColor('plus') === props.color) {
        const [n1, n2] = fixedDecimalPlaces(
          Number(state.num) + Number(props.step)
        ).split('.');
        const fixedLen = n2 ? n2.length : 0;
        if (props.beforeChange) {
          callInterceptor(props.beforeChange, () => {
            state.num = parseFloat(n1 + (n2 ? '.' + n2 : '')).toFixed(fixedLen);
          });
        } else {
          state.num = parseFloat(n1 + (n2 ? '.' + n2 : '')).toFixed(fixedLen);
        }
        emitChange([
          {
            eventName: 'update:modelValue',
            params: [state.num]
          },
          {
            eventName: 'change',
            params: [state.num]
          }
        ]);
      } else {
        emitChange([
          {
            eventName: 'add-no-allow',
            params: []
          }
        ]);
      }
    };

    watch(
      () => min.value,
      newValues => {
        if (newValues < Number(max.value)) {
          state.minVal = newValues;
          const val = format(state.num);
          state.num = val > 0 ? fixedDecimalPlaces(val) : val;
        }
      }
    );

    watch(
      () => modelValue.value,
      newValues => {
        const val = format(newValues);
        state.num = val > 0 ? fixedDecimalPlaces(val) : val;
        emitChange([
          {
            eventName: 'change',
            params: [state.num]
          }
        ]);
      }
    );

    return {
      state,
      classes,
      getIconColor,
      numChange,
      blur,
      focus,
      reduce,
      add
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
