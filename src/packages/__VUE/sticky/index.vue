<template>
  <div ref="rootRef" class="nut-sticky" :style="rootStyle">
    <div ref="stickyRef" class="nut-sticky__box" :style="stickyStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, ref, PropType, watch, CSSProperties, onMounted, onUnmounted, reactive } from 'vue'
import { createComponent } from '@/packages/utils/create'
import { getScrollParent } from '@/packages/utils/useScrollParent'
import { useRect } from '@/packages/utils/useRect'
type StickyPosition = 'top' | 'bottom'
const { create } = createComponent('sticky')
export default create({
  props: {
    position: {
      type: String as PropType<StickyPosition>,
      default: 'top'
    },
    top: {
      type: [Number, String],
      default: 0
    },
    bottom: {
      type: [Number, String],
      default: 0
    },
    container: {
      type: Object as PropType<Element>,
      default: null
    },
    zIndex: {
      type: [Number, String],
      default: 99
    }
  },
  emits: ['change'],
  setup(props, { emit }) {
    const rootRef = ref<HTMLElement>()
    const stickyRef = ref<HTMLElement>()
    const state = reactive({
      fixed: false,
      height: 0,
      width: 0,
      transform: 0
    })
    const threshold = computed(() => {
      return props.position === 'top' ? Number(props.top) : Number(props.bottom)
    })
    const rootStyle = computed<CSSProperties | undefined>(() => {
      if (state.fixed) return { height: `${state.height}px` }
      return {}
    })
    const stickyStyle = computed<CSSProperties>(() => {
      if (!state.fixed) return {}
      return {
        [props.position]: `${threshold.value}px`,
        height: `${state.height}px`,
        width: `${state.width}px`,
        transform: state.transform ? `translate3d(0, ${state.transform}px, 0)` : undefined,
        position: state.fixed ? 'fixed' : undefined,
        zIndex: Number(props.zIndex)
      }
    })
    const handleScroll = () => {
      const containerEle = props.container as HTMLElement
      if (!rootRef.value && !containerEle) return
      const rootRect = useRect(rootRef)
      const stCurrent = stickyRef.value as Element
      const stickyRect = useRect(stCurrent)
      const containerRect = useRect(containerEle)
      state.height = rootRect.height
      state.width = rootRect.width

      const getFixed = (): boolean => {
        let fixed = false
        if (props.position === 'top') {
          fixed = containerEle
            ? threshold.value > rootRect.top && containerRect.bottom > 0
            : threshold.value > rootRect.top
        } else {
          const clientHeight = document.documentElement.clientHeight
          fixed = containerEle
            ? containerRect.bottom > 0 && clientHeight - threshold.value - stickyRect.height > containerRect.top
            : clientHeight - threshold.value < rootRect.bottom
        }
        return fixed
      }

      const getTransform = () => {
        if (containerEle) {
          if (props.position === 'top') {
            const diff = containerRect.bottom - threshold.value - stickyRect.height
            return diff < 0 ? diff : 0
          } else {
            const clientHeight = document.documentElement.clientHeight
            const diff = containerRect.bottom - (clientHeight - threshold.value)
            return diff < 0 ? diff : 0
          }
        }
        return 0
      }
      state.transform = getTransform()
      state.fixed = getFixed()
    }
    watch(
      () => state.fixed,
      (val) => {
        emit('change', val)
      }
    )
    onMounted(() => {
      handleScroll()
      const el = getScrollParent(rootRef.value as HTMLElement)
      el.addEventListener('scroll', handleScroll, true)
    })
    onUnmounted(() => {
      const el = getScrollParent(rootRef.value as HTMLElement)
      el.removeEventListener('scroll', handleScroll)
    })
    return { rootRef, rootStyle, stickyRef, stickyStyle }
  }
})
</script>
