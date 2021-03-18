<template>
  <view :class="classes">
    <view class="nut-input-label">
      <view v-if="label" class="label-string">{{ label }}</view>
    </view>
    <view class="nut-text">
      <textarea
        :style="styles"
        :rows="rows"
        @input="valueChange"
        @focus="valueFocus"
        @blur="valueBlur"
        v-model="curretvalue"
        class="nut-text-core"
        :maxlength="maxLength"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
      >
      </textarea>
      <view class="nut-text-limit" v-if="limitShow">
        <view :class="[{ 'nut-field-over': textNum > maxLength }]">{{
          textNum
        }}</view>
        <view>/{{ maxLength }}</view>
      </view>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, reactive, computed, watch } from 'vue';
import { createComponent } from '@/utils/create';

const { componentName, create } = createComponent('textarea');
interface Events {
  eventName: 'change' | 'focus' | 'blur' | 'update:value';
  params: (string | number | Event)[];
}
export default create({
  props: {
    textAlign: {
      type: String,
      default: 'left'
    },
    limitShow: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: String,
      default: ''
    },
    rows: {
      type: [String, Number],
      default: '2'
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入信息'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },

  emits: ['change', 'update:value', 'blur', 'focus'],

  setup(props, { emit }) {
    const state = reactive({
      curretvalue: props.value,
      textNum: String(props.value).length
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });

    const styles = computed(() => {
      return {
        textAlign: props.textAlign,
        resize: props.autosize ? 'vertical' : 'none'
      };
    });

    const emitChange = (envs: Array<Events>) => {
      envs.forEach((item: Events) => {
        return emit(item.eventName, ...item.params);
      });
    };

    const valueChange = (e: Event) => {
      const input = e.target as HTMLInputElement;
      let val = input.value;

      if (props.maxLength && val.length > Number(props.maxLength)) {
        val = val.slice(0, Number(props.maxLength));
      }
      state.textNum = val.length;
      emitChange([
        {
          eventName: 'update:value',
          params: [val]
        },
        {
          eventName: 'change',
          params: [val]
        }
      ]);
    };

    const valueFocus = (e: Event) => {
      const input = e.target as HTMLInputElement;
      let val = input.value;
      val = String(val);
      emitChange([
        {
          eventName: 'update:value',
          params: [state.curretvalue]
        },
        {
          eventName: 'focus',
          params: [val]
        }
      ]);
    };

    const valueBlur = (e: Event) => {
      const input = e.target as HTMLInputElement;
      emitChange([
        {
          eventName: 'update:value',
          params: [String(input.value)]
        },
        {
          eventName: 'blur',
          params: [String(input.value)]
        }
      ]);
    };

    watch(
      () => props.value,
      val => {
        state.curretvalue = val;
        state.textNum = String(val).length;
        emitChange([
          {
            eventName: 'update:value',
            params: [String(val)]
          }
        ]);
      }
    );

    return {
      ...toRefs(state),
      classes,
      styles,
      valueChange,
      valueFocus,
      valueBlur
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
