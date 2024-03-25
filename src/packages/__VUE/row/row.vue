<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>
<script setup lang="ts">
import { provide, computed } from 'vue'
import { LAYOUT_KEY } from '../layout/types'

defineOptions({
  name: 'NutRow'
})

export type RowProps = Partial<{
  type: string
  gutter: string | number
  justify: string
  align: string
  flexWrap: string
}>

const props = withDefaults(defineProps<RowProps>(), {
  type: '',
  gutter: '',
  justify: 'start',
  align: 'flex-start',
  flexWrap: 'nowrap'
})

const prefixCls = 'nut-row'
provide(LAYOUT_KEY, props.gutter)
const getClass = (prefix: string, type: string) => {
  return prefix ? (type ? `nut-row-${prefix}-${type}` : '') : `nut-row-${type}`
}
const classes = computed(() => {
  return [
    prefixCls,
    getClass('', props.type),
    getClass('justify', props.justify),
    getClass('align', props.align),
    getClass('flex', props.flexWrap)
  ]
})
</script>
