<template>
  <view :class="classes">
    <slot v-if="direction === 'horizontal'"></slot>
  </view>
</template>
<script setup lang="ts">
import { PropType, computed } from 'vue';
import { DividerDirection, DividerPosition } from './types';

defineOptions({
  name: 'NutDivider'
});

const props = defineProps({
  contentPosition: {
    type: String as PropType<DividerPosition>,
    default: 'center'
  },
  dashed: {
    type: Boolean,
    default: false
  },
  hairline: {
    type: Boolean,
    default: true
  },
  direction: {
    type: String as PropType<DividerDirection>,
    default: 'horizontal'
  }
});

const slots = defineSlots();

const classes = computed(() => {
  const prefixCls = 'nut-divider';
  if (props.direction === 'horizontal') {
    return {
      [prefixCls]: true,
      [`${prefixCls}-center`]: slots.default,
      [`${prefixCls}-left`]: props.contentPosition === 'left',
      [`${prefixCls}-right`]: props.contentPosition === 'right',
      [`${prefixCls}-dashed`]: props.dashed,
      [`${prefixCls}-hairline`]: props.hairline
    };
  } else {
    return {
      [prefixCls]: true,
      [`${prefixCls}-vertical`]: props.direction === 'vertical'
    };
  }
});
</script>
