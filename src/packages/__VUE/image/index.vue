<template>
  <div :class="classes" :style="stylebox" @click="imageClick">
    <img
      ref="imgRef"
      class="nut-img"
      :src="lazyLoad ? (show ? src : undefined) : src"
      :date-src="lazyLoad ? (show ? undefined : src) : undefined"
      :alt="alt"
      :style="styles"
      @load="load"
      @error="error"
    />
    <div v-if="loading" class="nut-img-loading">
      <Image v-if="!slotLoding" width="16px" height="20px" name="image"></Image>
      <slot name="loading"></slot>
    </div>
    <div v-if="isError && !loading" class="nut-img-error">
      <ImageError v-if="!slotError" width="16px" height="20px" name="imageError"></ImageError>
      <slot name="error"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import {
  reactive,
  toRefs,
  computed,
  PropType,
  useSlots,
  watch,
  CSSProperties,
  ref,
  onMounted,
  onBeforeUnmount
} from 'vue'
import { createComponent } from '@/packages/utils/create'
import { pxCheck } from '../../utils/pxCheck'
import { ImageFit, ImagePosition } from './type'
import { Image, ImageError } from '@nutui/icons-vue'
const { componentName, create } = createComponent('image')
export default create({
  props: {
    src: String,
    fit: {
      type: String as PropType<ImageFit>,
      default: 'fill'
    },
    position: {
      type: String as PropType<ImagePosition>,
      default: 'center'
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: 'center'
    },
    height: {
      type: String,
      default: ''
    },
    round: {
      type: Boolean,
      default: false
    },
    radius: [String, Number],
    showError: {
      type: Boolean,
      default: true
    },
    showLoading: {
      type: Boolean,
      default: true
    },
    lazyLoad: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Image,
    ImageError
  },
  emits: ['click', 'load', 'error'],

  setup(props, { emit }) {
    const state = reactive({
      loading: true,
      isError: false,
      slotLoding: useSlots().loading,
      slotError: useSlots().error
    })

    const classes = computed(() => {
      const prefixCls = componentName
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
        borderRadius?: any
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
        ;(state.isError = false), (state.loading = true)
      }
    )
    // 图片加载
    const load = () => {
      state.isError = false
      state.loading = false
      emit('load')
    }
    // 图片加载失败
    const error = () => {
      state.isError = true
      state.loading = false
      emit('error')
    }

    const imageClick = (event: Event) => {
      emit('click', event)
    }

    return { ...toRefs(state), imageClick, classes, styles, stylebox, error, load, show, imgRef }
  }
})
</script>
