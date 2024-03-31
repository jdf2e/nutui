<template>
  <nut-cell
    class="nut-form-item"
    :class="[{ error: parent[prop], line: showErrorLine }, $attrs.class, labelPositionClass]"
    :style="$attrs.style"
  >
    <view
      v-if="label || $slots.label"
      class="nut-cell__title nut-form-item__label"
      :style="labelStyle"
      :class="{ required: isRequired, [starPositionClass]: starPositionClass }"
    >
      <slot name="label">{{ label }}</slot>
    </view>
    <view class="nut-cell__value nut-form-item__body">
      <view class="nut-form-item__body__slots" :style="bodyStyle">
        <slot></slot>
      </view>
      <view v-if="parent[prop] && showErrorMessage" class="nut-form-item__body__tips" :style="errorMessageStyle">
        {{ parent[prop] }}
      </view
      >
    </view>
  </nut-cell>
</template>
<script setup lang="ts">
import { pxCheck } from '@/packages/utils/pxCheck'
import { computed, inject, CSSProperties } from 'vue'
import type { FormItemRule, FormLabelPosition, FormStarPosition } from '../form/types'
import NutCell from '../cell/index.vue'
import { FORM_KEY } from '../form/common'
import { useParent } from '@/packages/utils'

defineOptions({
  name: 'NutFormItem',
  inheritAttrs: false
})

export type FormItemProps = Partial<{
  prop: string
  label: string
  rules: FormItemRule[]
  required: boolean
  showErrorMessage: boolean
  showErrorLine: boolean
  labelWidth: string | number
  labelAlign: string
  errorMessageAlign: string
  bodyAlign: string
  labelPosition: FormLabelPosition
  starPosition: FormStarPosition
}>

const props = withDefaults(defineProps<FormItemProps>(), {
  prop: '',
  label: '',
  rules: () => [],
  required: false,
  showErrorMessage: true,
  showErrorLine: true
})

const { parent: parentObj } = useParent(FORM_KEY)
const isRequired = computed(() => {
  const rules = parentObj.props?.rules
  let formRequired = false
  for (const key in rules) {
    if (Object.prototype.hasOwnProperty.call(rules, key) && key === props.prop && Array.isArray(rules[key])) {
      formRequired = rules[key].some((rule: FormItemRule) => rule.required)
    }
  }
  return props.required || props.rules.some(rule => rule.required) || formRequired
})

const labelPositionClass = computed(() => {
  const labelPosition = parentObj.props.labelPosition
  const position = props.labelPosition ? props.labelPosition : labelPosition
  return position !== 'left' ? `nut-form-item__${position}` : ''
})

const starPositionClass = computed(() => {
  const starPosition = parentObj.props.starPosition
  const position = props.starPosition ? props.starPosition : starPosition
  return position !== 'left' ? `nut-form-item__star-${position}` : ''
})

const parent = inject('formErrorTip') as any

const labelStyle = computed(() => {
  return {
    width: pxCheck(props.labelWidth),
    textAlign: props.labelAlign
  } as CSSProperties
})
const bodyStyle = computed(() => {
  return {
    textAlign: props.bodyAlign
  } as CSSProperties
})
const errorMessageStyle = computed(() => {
  return {
    textAlign: props.errorMessageAlign
  } as CSSProperties
})
</script>
