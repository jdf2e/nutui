<template>
  <div class="nut-radio-group" :class="`nut-radio-group--${direction}`">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { provide, computed, readonly, watch } from 'vue'
import { RADIO_KEY, type RadioGroupTextPosition, type RadioGroupDirection } from '../radio/types'

defineOptions({
  name: 'NutRadioGroup'
})

export type RadioGroupProps = Partial<{
  modelValue: string | number | boolean
  direction: RadioGroupDirection
  textPosition: RadioGroupTextPosition
}>

const props = withDefaults(defineProps<RadioGroupProps>(), {
  modelValue: '',
  direction: 'vertical',
  textPosition: 'right'
})

const emit = defineEmits(['change', 'update:modelValue'])

const updateValue = (value: string | boolean | number) => {
  emit('update:modelValue', value)
}

provide(RADIO_KEY, {
  label: readonly(computed(() => props.modelValue)),
  position: readonly(computed(() => props.textPosition)),
  updateValue
})

watch(
  () => props.modelValue,
  (value) => {
    emit('change', value)
  }
)
</script>
