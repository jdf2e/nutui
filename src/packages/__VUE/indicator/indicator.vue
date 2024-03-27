<template>
  <view :class="classes">
    <template v-for="item in size" :key="item">
      <view v-if="item === current" class="nut-indicator--number">
        {{ (fillZero && padZero(item)) || item }}
      </view>
      <view v-else class="nut-indicator--dot"></view>
    </template>
  </view>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { padZero } from '@/packages/utils/util'
import type { IndicatorAlign } from './types'

defineOptions({
  name: 'NutIndicator'
})

export type IndicatorProps = Partial<{
  size: number
  current: number
  block: boolean
  align: IndicatorAlign
  fillZero: boolean
}>

const props = withDefaults(defineProps<IndicatorProps>(), {
  size: 3,
  current: 1,
  block: false,
  align: 'center',
  fillZero: true
})

const classes = computed(() => {
  const prefixCls = 'nut-indicator'
  return {
    [prefixCls]: true,
    [`${prefixCls}--block`]: props.block,
    [`${prefixCls}--align__${props.align}`]: props.block && props.align
  }
})
</script>
