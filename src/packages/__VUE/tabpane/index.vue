<template>
  <view class="nut-tab-pane" :style="paneStyle" :class="{ inactive: paneKey != activeKey && autoHeight }">
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { computed, CSSProperties, inject } from 'vue';
import { createComponent } from '@/packages/utils';
const { create } = createComponent('tab-pane');

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
  setup(props) {
    const parentOption = inject('tabsOpiton') as any;
    const paneStyle = computed(() => {
      return {
        display:
          parentOption.animatedTime.value == 0 && props.paneKey != parentOption.activeKey.value ? 'none' : undefined
      } as CSSProperties;
    });
    return {
      ...parentOption,
      paneStyle
    };
  }
});
</script>
