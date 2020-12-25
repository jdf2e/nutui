<template>
  <view class="nut-radiogroup">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { toRefs, provide } from 'vue';
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
  setup(props, { emit }) {
    provide('radiogroup', {
      parentNode: true,
      changeVal: (val: string | number) => {
        emit('update:modelValue', val);
      }
    });
  }
});
</script>
