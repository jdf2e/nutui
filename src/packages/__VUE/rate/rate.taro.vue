<template>
  <view class="nut-rate">
    <view
      v-for="n in Number(count)"
      :id="'rateRefs-' + refRandomId + n"
      :key="n"
      ref="rateRefs"
      class="nut-rate-item"
      :style="n < Number(count) ? { marginRight: pxCheck(spacing) } : {}"
    >
      <view class="nut-rate-item__icon--full">
        <component
          :is="
            renderIcon(customIcon, {
              width: size,
              height: size,
              size,
              color: n <= Number(modelValue) ? activeColor : voidColor
            })
          "
          class="nut-rate-item__icon"
          :class="{ 'nut-rate-item__icon--disabled': disabled || n > Number(modelValue) }"
          @click="onClick(1, n)"
        ></component>
      </view>
      <view v-if="allowHalf && Number(modelValue) + 1 > n" class="nut-rate-item__icon--half">
        <component
          :is="
            renderIcon(customIcon, {
              width: size,
              height: size,
              size,
              color: n <= Number(modelValue) + 1 ? activeColor : voidColor
            })
          "
          class="nut-rate-item__icon"
          @click="onClick(2, n)"
        ></component>
      </view>
      <view v-else-if="allowHalf && Number(modelValue) + 1 < n" class="nut-rate-item__icon--half">
        <component
          :is="renderIcon(customIcon, { width: size, height: size, size, color: voidColor })"
          class="nut-rate-item__icon nut-rate-item__icon--disabled"
          @click="onClick(2, n)"
        ></component>
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, toRef } from 'vue'
import { StarFillN } from '@nutui/icons-vue-taro'
import { renderIcon } from '@/packages/utils/create'
import { pxCheck } from '@/packages/utils/pxCheck'
import { useFormDisabled } from '../form/common'

defineOptions({
  name: 'NutRate'
})

export type RateProps = Partial<{
  count: string | number
  modelValue: string | number
  customIcon: any
  size: string | number
  activeColor: string
  voidColor: string
  readonly: boolean
  disabled: boolean
  allowHalf: boolean
  spacing: string | number
}>

const props = withDefaults(defineProps<RateProps>(), {
  count: 5,
  modelValue: 0,
  customIcon: () => StarFillN,
  activeColor: '',
  voidColor: '',
  readonly: false,
  disabled: false,
  allowHalf: false
})

const emit = defineEmits(['update:modelValue', 'change'])

const refRandomId = Math.random().toString(36).slice(-8)
const disabled = useFormDisabled(toRef(props, 'disabled'))
const rateRefs = ref<HTMLElement[]>([])
const updateVal = (value: number) => {
  emit('update:modelValue', value)
  emit('change', value)
}
const onClick = (e: number, index: number) => {
  if (disabled.value || props.readonly) return
  let value = 0
  if (index === 1 && props.modelValue === index) {
    value = 0
  } else {
    value = index
    if (props.allowHalf && e == 2) {
      value -= 0.5
    }
  }
  updateVal(value)
}
</script>
