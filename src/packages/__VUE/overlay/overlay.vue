<template>
  <Transition name="overlay-fade">
    <view v-show="visible" :class="classes" :style="style" @click.stop="onClick">
      <slot></slot>
    </view>
  </Transition>
</template>
<script setup lang="ts">
import { CSSProperties, computed, watchEffect } from 'vue'
import { useLockScroll } from '@/packages/utils'

defineOptions({
  name: 'NutOverlay'
})

export type OverlayProps = Partial<{
  visible: boolean
  zIndex: string | number
  duration: string | number
  lockScroll: boolean
  overlayClass: string
  overlayStyle: CSSProperties
  closeOnClickOverlay: boolean
}>

const props = withDefaults(defineProps<OverlayProps>(), {
  visible: false,
  zIndex: 2000,
  duration: 0.3,
  lockScroll: true,
  overlayClass: '',
  closeOnClickOverlay: true
})

const emit = defineEmits(['click', 'update:visible'])

const [lock, unlock] = useLockScroll(() => props.lockScroll)

const classes = computed(() => {
  const prefixCls = 'nut-overlay'
  return {
    [prefixCls]: true,
    [props.overlayClass]: true
  }
})

const style = computed(() => {
  return {
    transitionDuration: `${props.duration}s`,
    zIndex: props.zIndex,
    ...props.overlayStyle
  }
})

watchEffect(() => {
  props.visible ? lock() : unlock()
})

const onClick = (e: MouseEvent) => {
  emit('click', e)
  if (props.closeOnClickOverlay) {
    emit('update:visible', false)
  }
}
</script>
