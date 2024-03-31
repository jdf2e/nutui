<template>
  <view :class="classes">
    <view :id="'nut-menu__bar' + refRandomId" ref="barRef" class="nut-menu__bar" :class="{ opened: opened }">
      <template v-for="(item, index) in children" :key="index">
        <view
          class="nut-menu__item"
          :class="{ disabled: item.disabled, active: item.state.showPopup }"
          :style="{ color: item.state.showPopup ? activeColor : '' }"
          @click="!item.disabled && toggleItem(index)"
        >
          <view class="nut-menu__title" :class="getClasses(item.state.showPopup)">
            <view class="nut-menu__title-text">{{ item.renderTitle() }}</view>
            <span class="nut-menu__title-icon">
              <slot name="icon">
                <RectUp v-if="direction === 'up'" />
                <RectDown v-else />
              </slot>
            </span>
          </view>
        </view>
      </template>
    </view>
    <slot></slot>
  </view>
</template>
<script lang="ts">
import { PropType, computed, ref } from 'vue'
import { createComponent } from '@/packages/utils/create'
import Taro, { usePageScroll } from '@tarojs/taro'
import { useTaroRect } from '@/packages/utils/useTaroRect'
const { componentName, create } = createComponent('menu')
import { RectUp, RectDown } from '@nutui/icons-vue-taro'
import { useChildren } from '@/packages/utils'
import { MENU_KEY, MenuDirection } from './types'

export default create({
  components: {
    RectUp,
    RectDown
  },
  props: {
    activeColor: {
      type: String,
      default: ''
    },
    overlay: {
      type: Boolean,
      default: true
    },
    lockScroll: {
      type: Boolean,
      default: true
    },
    duration: {
      type: [Number, String],
      default: 0.3
    },
    closeOnClickOverlay: {
      type: Boolean,
      default: true
    },
    direction: {
      type: String as PropType<MenuDirection>,
      default: 'down'
    },
    scrollFixed: {
      type: [Boolean, String, Number],
      default: false
    },
    titleClass: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    const barRef = ref<HTMLElement>()
    const refRandomId = Math.random().toString(36).slice(-8)
    const offset = ref(0)
    const isScrollFixed = ref(false)

    const { children, linkChildren } = useChildren(MENU_KEY)

    const opened = computed(() => children.some(item => item.state.showWrapper))

    const classes = computed(() => {
      const prefixCls = componentName
      return {
        [prefixCls]: true,
        'scroll-fixed': isScrollFixed.value
      }
    })

    const updateOffset = (children: any) => {
      if (barRef.value) {
        setTimeout(() => {
          useTaroRect(barRef).then(
            (rect: any) => {
              if (props.direction === 'down') {
                offset.value = rect.bottom
              } else {
                offset.value = Taro.getSystemInfoSync().windowHeight - rect.top
              }
              children.toggle()
            },
            () => {}
          )
        }, 100)
      }
    }

    linkChildren({ props, offset })

    const toggleItem = (active: number) => {
      children.forEach((item, index) => {
        if (index === active) {
          updateOffset(item)
        } else if (item.state.showPopup) {
          item.toggle(false, { immediate: true })
        }
      })
    }

    const onScroll = (res: { scrollTop: number }) => {
      const { scrollFixed } = props

      const scrollTop = res.scrollTop

      isScrollFixed.value = scrollTop > (typeof scrollFixed === 'boolean' ? 30 : Number(scrollFixed))
    }

    const getClasses = (showPopup: boolean) => {
      let str = ''
      const { titleClass } = props

      if (showPopup) {
        str += 'active'
      }

      if (titleClass) {
        str += ` ${titleClass}`
      }

      return str
    }

    usePageScroll((res) => {
      const { scrollFixed } = props

      if (scrollFixed) {
        onScroll(res)
      }
    })

    return {
      toggleItem,
      children,
      opened,
      classes,
      barRef,
      refRandomId,
      getClasses
    }
  }
})
</script>
