<template>
  <view class="nut-animate">
    <view
      :class="classes"
      :style="{
        animationDuration: duration ? `${duration}ms` : undefined
      }"
      @click="handleClick"
    >
      <slot></slot>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { AnimateType, AnimateAction } from './types'

defineOptions({
  name: 'NutAnimate'
})

export type AnimateProps = Partial<{
  type: AnimateType
  show: boolean
  action: AnimateAction
  loop: boolean
  duration: string | number
}>

const props = withDefaults(defineProps<AnimateProps>(), {
  show: false,
  action: '',
  loop: false,
  duration: 500
})

const emit = defineEmits(['click', 'animate'])

const animated = ref(props.action === 'initial' || props.show === true || props.loop)
const classes = computed(() => {
  const prefixCls = 'nut-animate'
  return {
    'nut-animate__container': true,
    [`${prefixCls}-${props.type}`]: animated.value,
    loop: props.loop
  }
})

const animate = () => {
  animated.value = false
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      animated.value = true
    })
  })
}

const handleClick = (event: Event) => {
  if (props.action === 'click') {
    animate()
    emit('click', event)
    emit('animate')
  }
}

watch(
  () => props.show,
  (val) => {
    if (val) {
      animate()
      emit('animate')
    }
  }
)
</script>
