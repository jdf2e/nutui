<template>
  <view :class="classes">
    <slot v-if="direction === 'horizontal'"></slot>
  </view>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { DividerDirection, DividerPosition } from './types'

defineOptions({
  name: 'NutDivider'
})

export type DividerProps = Partial<{
  contentPosition: DividerPosition
  dashed: boolean
  hairline: boolean
  direction: DividerDirection
}>

const props = withDefaults(defineProps<DividerProps>(), {
  contentPosition: 'center',
  dashed: false,
  hairline: true,
  direction: 'horizontal'
})

const slots = defineSlots()

const classes = computed(() => {
  const prefixCls = 'nut-divider'
  if (props.direction === 'horizontal') {
    return {
      [prefixCls]: true,
      [`${prefixCls}-center`]: slots.default,
      [`${prefixCls}-left`]: props.contentPosition === 'left',
      [`${prefixCls}-right`]: props.contentPosition === 'right',
      [`${prefixCls}-dashed`]: props.dashed,
      [`${prefixCls}-hairline`]: props.hairline
    }
  } else {
    return {
      [prefixCls]: true,
      [`${prefixCls}-vertical`]: props.direction === 'vertical'
    }
  }
})
</script>
