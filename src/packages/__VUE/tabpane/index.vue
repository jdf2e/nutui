<template>
  <view class="nut-tabpane" :class="{ inactive: paneKey != activeKey && autoHeight }">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { inject } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create } = createComponent('tabpane');

export default create({
  props: {
    title: {
      type: [String, Number],
      default: ''
    },
    paneKey: {
      type: [String, Number],
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const parent = inject('activeKey') as any;
    const parentOption = inject('autoHeight') as any;
    return {
      activeKey: parent.activeKey,
      autoHeight: parentOption.autoHeight
    };
  }
});
</script>
