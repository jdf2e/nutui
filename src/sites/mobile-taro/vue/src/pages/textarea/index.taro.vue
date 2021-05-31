<template>
  <view :class="classes">
    <textarea
      class="nut-textarea__textarea"
      :style="styles"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      :value="modelValue"
      @input="change"
      @blur="blur"
      @focus="focus"
      :maxlength="maxLength"
      :placeholder="placeholder"
    />
    <view class="nut-textarea__limit" v-if="limitShow">
      {{ modelValue.length }}/{{ maxLength }}</view
    >
  </view>
</template>
<script lang="ts">
import { computed, watch } from 'vue';
import { createComponent } from '@/packages/utils/create';

const { componentName, create } = createComponent('textarea');

export default create({
  props: {
    modelValue: {
      type: [String, Number],
      default: ''
    },
    textAlign: {
      type: String,
      default: 'left'
    },
    limitShow: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: [String, Number],
      default: ''
    },
    rows: {
      type: [String, Number],
      default: ''
    },
    placeholder: {
      type: String,
      default: '请输入内容'
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
    }
  },

  emits: ['update:modelValue', 'change', 'blur', 'focus'],

  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--disabled`]: props.disabled
      };
    });

    const styles = computed(() => {
      return {
        textAlign: props.textAlign,
        resize: props.autosize ? 'vertical' : 'none'
      };
    });

    const emitChange = (value: string, event: Event) => {
      if (props.maxLength && value.length > Number(props.maxLength)) {
        value = value.substring(0, Number(props.maxLength));
      }
      emit('change', value, event);
      emit('update:modelValue', value, event);
    };

    const change = (event: Event) => {
      const input = event.target as HTMLInputElement;
      emitChange(input.value, event);
    };

    const focus = (event: Event) => {
      if (props.disabled) return;
      if (props.readonly) return;
      emit('focus', event);
    };

    const blur = (event: Event) => {
      if (props.disabled) return;
      if (props.readonly) return;
      const input = event.target as HTMLInputElement;

      let value = input.value;

      emitChange(value, event);
      emit('blur', event);
    };

    return {
      classes,
      styles,
      change,
      focus,
      blur
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
