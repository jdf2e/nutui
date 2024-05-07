<template>
  <div :class="classes" :style="stylebox" @click="imageClick">
    <img ref="imgRef" class="nut-img" :src="lazyLoad ? (show ? src : undefined) : src"
         :data-src="lazyLoad ? (show ? undefined : src) : undefined" :alt="alt" :style="styles" @load="load"
         @error="error" />
    <div v-if="loading" class="nut-img-loading">
      <slot name="loading">
        <Image width="16px" height="20px" name="image"></Image>
      </slot>
    </div>
    <div v-if="isError && !loading" class="nut-img-error">
      <slot name="error">
        <ImageError width="16px" height="20px" name="imageError"></ImageError>
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import {
  computed,
  watch,
  CSSProperties,
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'
import { pxCheck } from '../../utils/pxCheck'
import { ImageFit, ImagePosition } from './types'
import { Image, ImageError } from '@nutui/icons-vue'

defineOptions({
  name: 'NutImage'
})

export type ImageProps = Partial<{
  src: string
  fit: ImageFit
  position: ImagePosition
  alt: string
  width: string
  height: string
  round: boolean
  radius: string | number
  showError: boolean
  showLoading: boolean
  lazyLoad: boolean
}>

const props = withDefaults(defineProps<ImageProps>(), {
  fit: 'fill',
  position: 'center',
  alt: '',
  width: '',
  height: '',
  round: false,
  showError: true,
  showLoading: true,
  lazyLoad: false
})

const emit = defineEmits(['click', 'load', 'error'])

const loading = ref(true)
const isError = ref(false)

const classes = computed(() => {
  const prefixCls = 'nut-image'
  return {
    [prefixCls]: true,
    [`${prefixCls}-round`]: props.round
  }
})

// 图片懒加载
const observer = ref<any>(null)
const show = ref(false)
const imgRef = ref(null)
const initObserver = () => {
  const options = {
    threshold: [0],
    rootMargin: '0px'
  }
  observer.value = new IntersectionObserver((entires) => {
    entires.forEach((item) => {
      if (item.isIntersecting) {
        show.value = true
        observer.value.disconnect()
      }
    })
  }, options)
  imgRef.value && observer.value.observe(imgRef.value)
}

onMounted(() => {
  props.lazyLoad && initObserver()
})

onBeforeUnmount(() => {
  observer.value && observer.value.disconnect()
})

const stylebox = computed(() => {
  let style: {
    height?: string
    width?: string
    overflow?: string
    borderRadius?: string
  } = {}

  if (props.width) style.width = pxCheck(props.width)
  if (props.height) style.height = pxCheck(props.height)

  if (props.radius !== undefined && props.radius !== null) {
    style.overflow = 'hidden'
    style.borderRadius = pxCheck(props.radius)
  }

  return style
})
const styles = computed(() => {
  let styless: CSSProperties = {
    objectFit: props.fit,
    objectPosition: props.position
  }

  return styless
})

watch(
  () => props.src,
  () => {
    isError.value = false
    loading.value = true
  }
)
// 图片加载
const load = () => {
  isError.value = false
  loading.value = false
  emit('load')
}
// 图片加载失败
const error = () => {
  isError.value = true
  loading.value = false
  emit('error')
}

const imageClick = (event: Event) => {
  emit('click', event)
}
</script>
