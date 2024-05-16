<template>
  <view class="nut-badge">
    <view v-show="!hidden && !dot && $slots.icon" class="nut-badge__icon" :style="style">
      <slot name="icon"></slot>
    </view>
    <slot></slot>
    <view
      v-show="!hidden && (content || dot)"
      class="nut-badge__content nut-badge__content--sup"
      :class="{ 'nut-badge__content--dot': dot, 'nut-badge__content--bubble': !dot && bubble }"
      :style="style"
    >
      {{ content }}
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'

defineOptions({
  name: 'NutBadge'
})

export type BadgeProps = Partial<{
  value: string | number
  max: number
  dot: boolean
  bubble: boolean
  hidden: boolean
  top: string
  right: string
  zIndex: number
  color: string
}>

const props = withDefaults(defineProps<BadgeProps>(), {
  max: 10000,
  dot: false,
  bubble: false,
  hidden: false,
  top: '0',
  right: '0',
  zIndex: 9,
  color: ''
})

const style = computed(() => {
  return {
    top: `${props.top}px`,
    right: `${props.right}px`,
    zIndex: props.zIndex,
    background: props.color
  }
})

const content = computed(() => {
  if (props.dot) return
  const value = props.value
  const max = props.max
  if (typeof value === 'number' && typeof max === 'number') {
    return max < value ? `${max}+` : value
  }
  return value
})
</script>
