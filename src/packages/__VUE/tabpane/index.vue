<template>
  <view class="nut-tabpane" :class="{ active: paneKey == activeKey }">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { inject } from 'vue';
import { createComponent } from '../../utils/create';
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
    return { activeKey: parent.activeKey };
  }
});
</script>
