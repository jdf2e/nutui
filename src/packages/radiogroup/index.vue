<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { provide, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('radiogroup');

export default create({
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: 'base'
    },
    animated: {
      type: Boolean,
      default: true
    }
  },
  emits: ['change', 'update:modelValue'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    provide('radiogroup', {
      parentNode: true,
      changeVal: (val: string | number) => {
        emit('change', val);
        emit('update:modelValue', val);
      }
    });

    return {};
  }
});
</script>
