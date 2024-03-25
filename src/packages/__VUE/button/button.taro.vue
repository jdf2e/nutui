<template>
  <button
    :class="classes"
    :style="getStyle"
    :type="Taro.getEnv() === Taro.ENV_TYPE.WEB ? formType : undefined"
    :formType="formType === 'button' ? undefined : formType"
    @click="handleClick"
  >
    <view class="nut-button__wrap">
      <Loading v-if="loading" class="nut-icon-loading" />
      <slot v-if="$slots.icon && !loading" name="icon"></slot>
      <view v-if="$slots.default" :class="{ 'nut-button__text': $slots.icon || loading }">
        <slot></slot>
      </view>
    </view>
  </button>
</template>

<script setup lang="ts">
import { type CSSProperties, computed } from 'vue'
import { Loading } from '@nutui/icons-vue-taro'
import Taro from '@tarojs/taro'
import type { ButtonShape, ButtonType, ButtonSize, ButtonFormType } from './types'

defineOptions({
  name: 'NutButton'
})

export type ButtonProps = Partial<{
  color: string
  shape: ButtonShape
  plain: boolean
  loading: boolean
  disabled: boolean
  type: ButtonType
  size: ButtonSize
  block: boolean
  formType: ButtonFormType
}>

const props = withDefaults(defineProps<ButtonProps>(), {
  color: '',
  shape: 'round',
  plain: false,
  loading: false,
  disabled: false,
  type: 'default',
  size: 'normal',
  block: false,
  formType: 'button'
})

const emit = defineEmits(['click'])

const handleClick = (event: MouseEvent) => {
  if (!props.loading && !props.disabled) {
    emit('click', event)
  }
}

const classes = computed(() => {
  const prefixCls = 'nut-button'
  return {
    [prefixCls]: true,
    [`${prefixCls}--${props.type}`]: props.type,
    [`${prefixCls}--${props.size}`]: props.size,
    [`${prefixCls}--${props.shape}`]: props.shape,
    [`${prefixCls}--plain`]: props.plain,
    [`${prefixCls}--block`]: props.block,
    [`${prefixCls}--disabled`]: props.disabled,
    [`${prefixCls}--loading`]: props.loading
  }
})

const getStyle = computed(() => {
  let style: CSSProperties = {}
  if (props.color) {
    style = {
      color: props.plain ? props.color : '#fff',
      background: props.plain ? '#fff' : `border-box ${props.color}`
    }
    if (props.color.includes('gradient')) {
      style.borderColor = 'transparent'
    } else {
      style.borderColor = props.color
    }
  }
  return style
})
</script>
