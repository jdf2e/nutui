<template>
  <view :class="radioClasses" @click="handleClick">
    <view v-if="shape === 'button'" :class="buttonClasses">
      <slot></slot>
    </view>
    <template v-else>
      <template v-if="checked">
        <slot name="checkedIcon">
          <CheckChecked :size="realIconSize" :class="iconClasses" />
        </slot>
      </template>
      <template v-else>
        <slot name="icon">
          <CheckNormal :size="realIconSize" :class="iconClasses" />
        </slot>
      </template>
      <view :class="labelClasses">
        <slot></slot>
      </view>
    </template>
  </view>
</template>
<script setup lang="ts">
import { computed, inject, toRef } from 'vue'
import { CheckNormal, CheckChecked } from '@nutui/icons-vue-taro'
import { pxCheck } from '@/packages/utils/pxCheck'
import { RADIO_KEY, type RadioShape, type RadioButtonSize } from './types'
import { useFormDisabled } from '../form/common'

defineOptions({
  name: 'NutRadio'
})

export type RadioProps = Partial<{
  disabled: boolean
  shape: RadioShape
  label: string | number | boolean
  iconSize: string | number
  size: RadioButtonSize
}>

const props = withDefaults(defineProps<RadioProps>(), {
  disabled: false,
  shape: 'round',
  label: '',
  iconSize: '',
  size: 'normal'
})

const disabled = useFormDisabled(toRef(props, 'disabled'))
const parent: any = inject(RADIO_KEY, null)

const checked = computed(() => {
  return parent.label.value === props.label
})

const iconClasses = computed(() => {
  return !disabled.value
    ? checked.value
      ? 'nut-radio__icon'
      : 'nut-radio__icon--unchecked'
    : 'nut-radio__icon--disable'
})

const realIconSize = computed(() => {
  return pxCheck(props.iconSize)
})

const labelClasses = computed(() => {
  return {
    'nut-radio__label': true,
    'nut-radio__label--disabled': disabled.value
  }
})

const buttonClasses = computed(() => {
  return {
    'nut-radio__button': true,
    'nut-radio__button--active': checked.value,
    [`nut-radio__button--${props.size}`]: true,
    'nut-radio__button--disabled': props.disabled
  }
})

const handleClick = () => {
  if (checked.value || disabled.value) return
  parent.updateValue(props.label)
}

const reverseState = computed(() => parent.position.value === 'left')

const radioClasses = computed(() => {
  return {
    'nut-radio': true,
    [`nut-radio--${props.shape}`]: true,
    'nut-radio--reverse': reverseState.value
  }
})
</script>
