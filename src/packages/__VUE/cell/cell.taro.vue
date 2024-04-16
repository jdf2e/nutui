<template>
  <view :class="classes" :style="baseStyle" @click="handleClick">
    <slot>
      <view v-if="$slots.icon" class="nut-cell__icon">
        <slot name="icon"></slot>
      </view>
      <view v-if="title || subTitle || $slots.title" class="nut-cell__title">
        <template v-if="subTitle">
          <slot name="title">
            <view class="title">{{ title }}</view>
          </slot>
          <view class="nut-cell__title-desc">{{ subTitle }}</view>
        </template>
        <template v-else>
          <slot name="title">
            {{ title }}
          </slot>
        </template>
      </view>
      <view
        v-if="desc || $slots.desc"
        class="nut-cell__value"
        :class="{ 'nut-cell__value--alone': !title && !subTitle && !$slots.title }"
        :style="descStyle"
      >
        <slot name="desc">
          {{ desc }}
        </slot>
      </view>
      <slot name="link">
        <Right v-if="isLink" class="nut-cell__link"></Right>
      </slot>
    </slot>
  </view>
</template>

<script setup lang="ts">
import { computed, type CSSProperties } from 'vue'
import { pxCheck } from '@/packages/utils/pxCheck'
import { Right } from '@nutui/icons-vue-taro'
import type { CellSize } from './types'

defineOptions({
  name: 'NutCell'
})

export type CellProps = Partial<{
  title: string
  subTitle: string
  desc: string
  descTextAlign: string
  isLink: boolean
  roundRadius: string | number
  center: boolean
  size: CellSize
}>

const props = withDefaults(defineProps<CellProps>(), {
  title: '',
  subTitle: '',
  desc: '',
  descTextAlign: 'right',
  isLink: false,
  roundRadius: '',
  center: false,
  size: 'normal'
})

const emit = defineEmits(['click'])

const classes = computed(() => {
  const prefixCls = 'nut-cell'
  return {
    [prefixCls]: true,
    [`${prefixCls}--clickable`]: props.isLink,
    [`${prefixCls}--center`]: props.center,
    [`${prefixCls}--large`]: props.size === 'large'
  }
})

const baseStyle = computed(() => {
  return {
    borderRadius: pxCheck(props.roundRadius)
  }
})

const descStyle = computed(() => {
  return {
    textAlign: props.descTextAlign
  } as CSSProperties
})

const handleClick = (event: Event) => {
  emit('click', event)
}
</script>
