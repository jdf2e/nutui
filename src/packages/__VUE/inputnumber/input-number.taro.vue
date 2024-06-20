<template>
  <view :class="classes">
    <view
      class="nut-input-number__icon nut-input-number__left"
      :class="{ 'nut-input-number__icon--disabled': !reduceAllow() }"
      @click="reduce"
    >
      <slot name="left-icon">
        <Minus :size="pxCheck(buttonSize)" />
      </slot>
    </view>
    <view v-if="readonly" class="nut-input-number__text--readonly">
      {{ modelValue }}
    </view>
    <input
      v-else
      class="nut-input-number__text--input"
      type="number"
      v-bind="$attrs"
      :min="min"
      :max="max"
      :style="{ width: pxCheck(inputWidth), height: pxCheck(buttonSize) }"
      :disabled="disabled ? disabled : undefined"
      :readonly="readonly ? readonly : undefined"
      :value="modelValue"
      @input="change"
      @blur="blur"
      @focus="focus"
    />
    <view
      class="nut-input-number__icon nut-input-number__right"
      :class="{ 'nut-input-number__icon--disabled': !addAllow() }"
      @click="add"
    >
      <slot name="right-icon">
        <Plus :size="pxCheck(buttonSize)" />
      </slot>
    </view>
  </view>
</template>
<script setup lang="ts">
import { computed, toRef, watch } from 'vue'
import { pxCheck } from '@/packages/utils/pxCheck'
import { Minus, Plus } from '@nutui/icons-vue-taro'
import { useFormDisabled } from '../form/common'

defineOptions({
  name: 'NutInputNumber',
  inheritAttrs: false
})

export type InputNumberProps = Partial<{
  modelValue: string | number
  inputWidth: string | number
  buttonSize: string | number
  min: string | number
  max: string | number
  step: string | number
  decimalPlaces: string | number
  disabled: boolean
  readonly: boolean
}>

const props = withDefaults(defineProps<InputNumberProps>(), {
  modelValue: 0,
  inputWidth: '',
  buttonSize: '',
  min: 1,
  max: 9999,
  step: 1,
  decimalPlaces: 0,
  disabled: false,
  readonly: false
})

const emit = defineEmits(['update:modelValue', 'change', 'blur', 'focus', 'reduce', 'add', 'overlimit'])

const disabled = useFormDisabled(toRef(props, 'disabled'))
const classes = computed(() => {
  const prefixCls = 'nut-input-number'
  return {
    [prefixCls]: true,
    [`${prefixCls}--disabled`]: disabled.value
  }
})
const fixedDecimalPlaces = (v: string | number): string => {
  return Number(v).toFixed(Number(props.decimalPlaces))
}
const change = (event: Event) => {
  const input = event.target as HTMLInputElement
  emit('update:modelValue', input.value, event)
  emit('change', input.value, event)
}
const emitChange = (value: string | number, event: Event) => {
  let output_value: number | string = fixedDecimalPlaces(value)
  emit('update:modelValue', output_value, event)
  if (Number(props.modelValue) !== Number(output_value)) emit('change', output_value, event)
}
const addAllow = (value = Number(props.modelValue)): boolean => {
  return value < Number(props.max) && !disabled.value
}
const reduceAllow = (value = Number(props.modelValue)): boolean => {
  return value > Number(props.min) && !disabled.value
}
const reduce = (event: Event) => {
  if (disabled.value) return
  emit('reduce', event)
  let output_value = Number(props.modelValue) - Number(props.step)
  if (reduceAllow() && output_value >= Number(props.min)) {
    emitChange(output_value, event)
  } else {
    emitChange(Number(props.min), event)
    emit('overlimit', event, 'reduce')
  }
}
const add = (event: Event) => {
  if (disabled.value) return
  emit('add', event)
  let output_value = Number(props.modelValue) + Number(props.step)
  if (addAllow() && output_value <= Number(props.max)) {
    emitChange(output_value, event)
  } else {
    emitChange(Number(props.max), event)
    emit('overlimit', event, 'add')
  }
}
const focus = (event: Event) => {
  if (disabled.value) return
  if (props.readonly) return
  emit('focus', event)
}
const blur = (event: Event) => {
  if (disabled.value) return
  if (props.readonly) return
  const input = event.target as HTMLInputElement
  let value = Number(input.value)
  if (value < Number(props.min)) {
    value = Number(props.min)
  } else if (value > Number(props.max)) {
    value = Number(props.max)
  }
  emitChange(value, event)
  emit('blur', event)
}
const format = (val: string | number) => {
  let value = Number(val)
  if (value < Number(props.min)) {
    value = Number(props.min)
  } else if (value > Number(props.max)) {
    value = Number(props.max)
  }
  return value
}
watch(
  () => [props.max, props.min],
  () => {
    if (Number(props.min) > Number(props.max)) {
      console.warn('[NutUI] <InputNumber>', 'props.max < props.min')
    }
    const value = format(props.modelValue)
    if (value !== Number(props.modelValue)) {
      emitChange(value, {} as Event)
    }
  }
)
</script>
