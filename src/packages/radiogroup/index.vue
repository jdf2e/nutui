<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { provide, watch, computed } from 'vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('radiogroup');

export default create({
  props: {
    value: {
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
  emits: ['change', 'update:value'],
  setup(props, { emit }) {
    const classes = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true
      };
    });
    watch(
      () => props.value,
      value => {
        emit('change', value);
      }
    );
    provide('radiogroup', {
      parentNode: true,
      changeVal: (val: string | number) => {
        emit('change', val);
        emit('update:value', val);
      }
    });

    return {};
  }
});
</script>
