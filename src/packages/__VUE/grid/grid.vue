<template>
  <view :class="rootClass" :style="rootStyle">
    <slot></slot>
  </view>
</template>
<script setup lang="ts">
import { pxCheck, useChildren } from '@/packages/utils'
import { GRID_KEY, type GridDirection } from './types'
import { computed, type CSSProperties } from 'vue'

defineOptions({
  name: 'NutGrid'
})

export type GridProps = Partial<{
  columnNum: string | number
  border: boolean
  gutter: string | number
  center: boolean
  square: boolean
  reverse: boolean
  direction: GridDirection
  clickable: boolean
}>

const props = withDefaults(defineProps<GridProps>(), {
  columnNum: 4,
  border: true,
  gutter: 0,
  center: true,
  square: false,
  reverse: false,
  clickable: false
})

const { linkChildren } = useChildren(GRID_KEY)
linkChildren({ props })

const rootClass = computed(() => {
  const prefixCls = 'nut-grid'
  return {
    [prefixCls]: true,
    [`${prefixCls}--border`]: props.border && !props.gutter
  }
})

const rootStyle = computed(() => {
  const style: CSSProperties = {}
  if (props.gutter) {
    style.paddingLeft = pxCheck(props.gutter)
  }
  return style
})
</script>
