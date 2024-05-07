<template>
  <view class="nut-grid-item" :style="rootStyle" @click="handleClick">
    <view :class="contentClass">
      <slot></slot>
      <view class="nut-grid-item__text">
        <template v-if="text">{{ text }}</template>
        <slot v-else name="text"></slot>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from 'vue'
import { pxCheck, useParent, useRouter } from '@/packages/utils'
import { GRID_KEY } from '../grid/types'

defineOptions({
  name: 'NutGridItem'
})

export type GridItemProps = Partial<{
  text: string
  /**
   * @deprecated It will be removed in next major version.
   */
  to: string | object
  /**
   * @deprecated It will be removed in next major version.
   */
  url: string
  /**
   * @deprecated It will be removed in next major version.
   */
  replace: boolean
}>

const props = withDefaults(defineProps<GridItemProps>(), {
  url: '',
  replace: false
})

const emit = defineEmits(['click'])

const { parent: parentObj, index } = useParent(GRID_KEY)
const parent = parentObj?.props || {}

const rootStyle = computed(() => {
  const style: CSSProperties = {
    flexBasis: `${100 / +parent.columnNum}%`
  }
  if (parent.square) {
    style.paddingTop = `${100 / +parent.columnNum}%`
  } else if (parent.gutter) {
    style.paddingRight = pxCheck(parent.gutter)
    if (index.value >= +parent.columnNum) {
      style.marginTop = pxCheck(parent.gutter)
    }
  }
  return style
})

const contentClass = computed(() => {
  const prefixCls = `nut-grid-item__content`
  return {
    [`${prefixCls}`]: true,
    [`${prefixCls}--border`]: parent.border,
    [`${prefixCls}--surround`]: parent.border && parent.gutter,
    [`${prefixCls}--center`]: parent.center,
    [`${prefixCls}--square`]: parent.square,
    [`${prefixCls}--reverse`]: parent.reverse,
    [`${prefixCls}--${parent.direction}`]: !!parent.direction,
    [`${prefixCls}--clickable`]: parent.clickable || props.to || props.url
  }
})

const router = useRouter()
const handleClick = (event: Event) => {
  emit('click', event)

  if (props.to && router) {
    router[props.replace ? 'replace' : 'push'](props.to)
  } else if (props.url) {
    props.replace ? location.replace(props.url) : (location.href = props.url)
  }
}
</script>
