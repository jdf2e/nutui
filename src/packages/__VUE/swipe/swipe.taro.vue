<template>
  <view
    class="nut-swipe"
    :style="touchStyle"
    @touchstart="onTouchStart"
    @touchmove="onTouchMove"
    @touchend="onTouchEnd"
    @touchcancel="onTouchEnd"
  >
    <view :id="'leftRef-' + refRandomId" ref="leftRef" class="nut-swipe__left" @click="onClick($event, 'left', true)">
      <slot name="left"></slot>
    </view>

    <view class="nut-swipe__content" @click="onClick($event, 'content', lockClick)">
      <slot name="default"></slot>
    </view>

    <view
      :id="'rightRef-' + refRandomId"
      ref="rightRef"
      class="nut-swipe__right"
      @click="onClick($event, 'right', true)"
    >
      <slot name="right"></slot>
    </view>
  </view>
</template>
<script setup lang="ts">
import { useTouch } from '@/packages/utils/useTouch'
import { computed, onMounted, inject, watch, reactive, ref } from 'vue'
import { useTaroRect } from '@/packages/utils/useTaroRect'
import { SWIPE_KEY, type SwipePosition } from './types'

defineOptions({
  name: 'NutSwipe'
})

export type SwipeProps = Partial<{
  name: string
  touchMoveStopPropagation: boolean
  touchMovePreventDefault: boolean
  disabled: boolean
}>

const props = withDefaults(defineProps<SwipeProps>(), {
  name: '',
  touchMoveStopPropagation: false,
  touchMovePreventDefault: false,
  disabled: false
})

const emit = defineEmits(['open', 'close', 'click'])

const refRandomId = Math.random().toString(36).slice(-8)

const leftRef = ref<HTMLElement>()
const leftRefWidth = ref(0)
const rightRef = ref<HTMLElement>()
const rightRefWidth = ref(0)

const lockClick = ref(false)

const initWidth = () => {
  useTaroRect(leftRef).then(
    (rect: any) => {
      leftRefWidth.value = rect?.width || 0
    },
    () => {}
  )
  useTaroRect(rightRef).then(
    (rect: any) => {
      rightRefWidth.value = rect?.width || 0
    },
    () => {}
  )
}

const parent = inject(SWIPE_KEY, null) as any

watch(
  () => parent?.name?.value,
  (name) => {
    if (props.name !== name && parent && parent.lock) {
      close()
    }
  }
)

onMounted(() => {
  setTimeout(() => {
    initWidth()
  }, 100)
})

const opened = ref(false)
let position: SwipePosition = ''
let oldPosition: SwipePosition = ''

const state = reactive({
  offset: 0,
  moving: false
})

const open = (p: SwipePosition = '') => {
  parent && parent.update(props.name)
  opened.value = true
  if (p) {
    state.offset = p === 'left' ? -rightRefWidth.value : leftRefWidth.value
  }
  emit('open', {
    name: props.name,
    position: position || p
  })
}

const close = () => {
  state.offset = 0
  if (opened.value) {
    opened.value = false
    emit('close', {
      name: props.name,
      position
    })
  }
}

const onClick = (e: Event, position: string, lock: boolean) => {
  if (lock) {
    e.stopPropagation()
  } else {
    close()
  }
  emit('click', position)
}

const touchStyle = computed(() => {
  return {
    transform: `translate3d(${state.offset}px, 0, 0)`
  }
})

const setoffset = (deltaX: number) => {
  position = deltaX > 0 ? 'right' : 'left'
  let offset = deltaX
  switch (position) {
    case 'left':
      if (opened.value && oldPosition === position) {
        offset = -rightRefWidth.value
      } else {
        offset = Math.abs(deltaX) > rightRefWidth.value ? -rightRefWidth.value : deltaX
      }
      break
    case 'right':
      if (opened.value && oldPosition === position) {
        offset = leftRefWidth.value
      } else {
        offset = Math.abs(deltaX) > leftRefWidth.value ? leftRefWidth.value : deltaX
      }
      break
  }
  state.offset = offset
}

const touch = useTouch()
const onTouchStart = (event: TouchEvent) => {
  if (props.disabled) return
  touch.start(event)
}
const onTouchMove = (event: TouchEvent) => {
  if (props.disabled) return
  touch.move(event)
  if (touch.isHorizontal()) {
    lockClick.value = true
    state.moving = true
    setoffset(touch.deltaX.value)
    if (props.touchMovePreventDefault) {
      event.preventDefault()
    }
    if (props.touchMoveStopPropagation) {
      event.stopPropagation()
    }
  }
}
const onTouchEnd = () => {
  if (state.moving) {
    state.moving = false
    oldPosition = position
    switch (position) {
      case 'left':
        if (Math.abs(state.offset) <= rightRefWidth.value / 2) {
          close()
        } else {
          state.offset = -rightRefWidth.value
          open()
        }
        break
      case 'right':
        if (Math.abs(state.offset) <= leftRefWidth.value / 2) {
          close()
        } else {
          state.offset = leftRefWidth.value
          open()
        }
        break
    }
    setTimeout(() => {
      lockClick.value = false
    }, 0)
  }
}

defineExpose({
  open,
  close
})
</script>
