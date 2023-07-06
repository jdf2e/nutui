<template>
  <view :class="classes">
    <slot v-if="direction === 'horizontal'"></slot>
  </view>
</template>
<script lang="ts">
import { PropType, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { DividerDirection, DividerPosition } from './types';
const { componentName, create } = createComponent('divider');

export default create({
  props: {
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
  },
  setup(props, context) {
    const classes = computed(() => {
      const prefixCls = componentName;
      if (props.direction === 'horizontal') {
        return {
          [prefixCls]: true,
          [`${prefixCls}-center`]: context.slots.default,
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
    return { classes };
  }
});
</script>
