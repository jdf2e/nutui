<template>
  <view class="nut-countdown">
    <slot>
      <view class="nut-countdown__content" v-html="renderTime"></view>
    </slot>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, watch, onBeforeMount } from 'vue'
import { getTimeStamp, formatRemainTime } from './util'

defineOptions({
  name: 'NutCountdown'
})

export type CountdownProps = Partial<{
  modelValue: Record<string, string>
  paused: boolean
  startTime: number | string
  endTime: number | string
  millisecond: boolean
  format: string
  autoStart: boolean
  time: number | string
}>

const props = withDefaults(defineProps<CountdownProps>(), {
  paused: false,
  startTime: '',
  endTime: '',
  millisecond: false,
  format: 'HH:mm:ss',
  autoStart: true,
  time: 0
})

const emit = defineEmits([
  'input',
  'update:modelValue',
  'end',
  'restart',
  'paused',
  // will be deprecated
  'onEnd',
  'onRestart',
  'onPaused'
])

// 倒计时剩余时间时间
const restTime = ref(0)
const timer = ref<null | number>(null)
const counting = ref(!props.paused && props.autoStart)
const handleEndTime = ref(Date.now())
// 设置了 startTime 时，与 date.now() 的差异
const diffTime = ref(0)

const renderTime = computed(() => {
  return formatRemainTime(restTime.value, props.format)
})

// 倒计时 interval
const initTime = () => {
  handleEndTime.value = Number(props.endTime)
  diffTime.value = Date.now() - getTimeStamp(props.startTime) // 时间差
  if (!counting.value) counting.value = true
  tick()
}

const tick = () => {
  if (window !== undefined) {
    timer.value = requestAnimationFrame(() => {
      if (counting.value) {
        const currentTime = Date.now() - diffTime.value
        const remainTime = Math.max(handleEndTime.value - currentTime, 0)

        restTime.value = remainTime

        if (!remainTime) {
          counting.value = false
          pause()
          emit('end')
          emit('onEnd')
        }

        if (remainTime > 0) {
          tick()
        }
      }
    })
  }
}

// 开始
const start = () => {
  if (!counting.value && !props.autoStart) {
    counting.value = true
    handleEndTime.value = Date.now() + Number(restTime.value)
    tick()
    emit('restart', restTime.value)
    emit('onRestart', restTime.value)
  }
}
// 暂定
const pause = () => {
  cancelAnimationFrame(timer.value!)
  counting.value = false
  emit('restart', restTime.value)
  emit('onRestart', restTime.value)
}

// 重置
const reset = () => {
  if (!props.autoStart) {
    pause()
    restTime.value = Number(props.time)
  }
}

defineExpose({
  start,
  pause,
  reset
})

onBeforeMount(() => {
  if (props.autoStart) {
    initTime()
  } else {
    restTime.value = Number(props.time)
  }
})

watch(
  () => restTime.value,
  (value) => {
    const tranTime = formatRemainTime(value, props.format, 'custom')
    emit('update:modelValue', tranTime)
    emit('input', tranTime)
  }
)

watch(
  () => props.paused,
  (v, ov) => {
    if (!ov) {
      if (counting.value) {
        pause()
      }
    } else {
      if (!counting.value) {
        counting.value = true
        handleEndTime.value = Date.now() + Number(restTime.value)
        tick()
      }
      emit('restart', restTime.value)
      emit('onRestart', restTime.value)
    }
  }
)

watch(
  () => props.endTime,
  () => {
    initTime()
  }
)

watch(
  () => props.startTime,
  () => {
    initTime()
  }
)

</script>
