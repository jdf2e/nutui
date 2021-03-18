<template>
  <view :class="classes">
    <view class="nut-input-label">
      <view class="nut-input-require" v-if="requireShow">*</view>
      <view v-if="label" class="label-string">{{ label }}</view>
    </view>
    <input
      class="input-text"
      :style="styles"
      :type="type"
      :maxlength="maxLength"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :value="curretvalue"
      @input="valueChange"
      @focus="valueFocus"
      @blur="valueBlur"
    />
    <view
      @click="handleClear"
      class="nut-textinput-clear"
      v-if="!disableClear && !readonly"
      v-show="active && curretvalue.length > 0"
    >
      <nut-icon name="close-little" size="12px"></nut-icon>
    </view>
  </view>
</template>
<script lang="ts">
import { toRefs, reactive, computed, watch } from 'vue';
import { createComponent } from '@/utils/create';
import { formatNumber } from './util';

const { componentName, create } = createComponent('input');
interface Events {
  eventName: 'change' | 'focus' | 'blur' | 'clear' | 'update:value';
  params: (string | number | Event)[];
}
export default create({
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入信息'
    },
    label: {
      type: String,
      default: ''
    },
    requireShow: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    textAlign: {
      type: String,
      default: 'left'
    },
    maxLength: {
      type: [String, Number],
      default: ''
    },
    disableClear: {
      type: Boolean,
      default: false
    }
  },

  emits: ['change', 'update:value', 'blur', 'focus', 'clear'],

  setup(props, { emit }) {
    const state = reactive({
      curretvalue: props.value,
      textNum: String(props.value).length,
      active: false
    });

    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}-disabled`]: props.disabled
      };
    });

    const styles = computed(() => {
      return {
        textAlign: props.textAlign
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
      if (props.type === 'digit') {
        val = formatNumber(val, true);
      }
      if (props.type === 'number') {
        val = formatNumber(val, false);
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
      state.active = true;
      const input = e.target as HTMLInputElement;
      emitChange([
        {
          eventName: 'update:value',
          params: [state.curretvalue]
        },
        {
          eventName: 'focus',
          params: [String(input.value)]
        }
      ]);
    };

    const valueBlur = (e: Event) => {
      setTimeout(() => {
        state.active = false;
      }, 400);
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

    const handleClear = () => {
      emitChange([
        {
          eventName: 'update:value',
          params: ['']
        },
        {
          eventName: 'clear',
          params: ['']
        }
      ]);
    };

    watch(
      () => props.value,
      val => {
        state.curretvalue = val;
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
      valueBlur,
      handleClear
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
