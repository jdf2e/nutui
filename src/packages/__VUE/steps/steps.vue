<template>
  <view :class="classes">
    <slot></slot>
  </view>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useChildren } from '@/packages/utils'
import { STEPS_KEY, StepsDirection } from './types'

defineOptions({
  name: 'NutSteps'
})

export type StepsProps = Partial<{
  direction: StepsDirection
  current: string | number
  progressDot: boolean
}>

const props = withDefaults(defineProps<StepsProps>(), {
  direction: 'horizontal',
  current: '0',
  progressDot: false
})

const emit = defineEmits(['clickStep'])

const classes = computed(() => {
  const prefixCls = 'nut-steps'
  return {
    [prefixCls]: true,
    [`${prefixCls}-${props.direction}`]: true,
    [`${prefixCls}-dot`]: !!props.progressDot
  }
})

const { linkChildren } = useChildren(STEPS_KEY)

const onEmit = (index: number) => {
  emit('clickStep', index)
}

linkChildren({ props, onEmit })
</script>
