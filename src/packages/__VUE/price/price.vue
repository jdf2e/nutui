<template>
  <view :class="classes">
    <view
      v-if="needSymbol && position === 'before'"
      class="nut-price--symbol"
      :class="`nut-price--symbol-${size}`"
      v-html="showSymbol"
    ></view>
    <view :class="`nut-price--${size}`">
      {{ formatThousands(price) }}
    </view>
    <view v-if="decimalDigits != 0" :class="`nut-price--decimal-${size}`">.</view>
    <view :class="`nut-price--decimal-${size}`">
      {{ formatDecimal(price) }}
    </view>
    <view
      v-if="needSymbol && position === 'after'"
      class="nut-price--symbol"
      :class="`nut-price--symbol-${size}`"
      v-html="showSymbol"
    ></view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { PricePosition, PriceSize } from './types'

defineOptions({
  name: 'NutPrice'
})

export type PriceProps = Partial<{
  price: string | number
  needSymbol: boolean
  symbol: string
  decimalDigits: number
  thousands: boolean
  position: PricePosition
  size: PriceSize
  strikeThrough: boolean
}>

const props = withDefaults(defineProps<PriceProps>(), {
  price: 0,
  needSymbol: true,
  symbol: '&yen;',
  decimalDigits: 2,
  thousands: false,
  position: 'before',
  size: 'normal',
  strikeThrough: false
})

const prefix = 'nut-price'
const classes = computed(() => {
  return {
    [prefix]: true,
    [`${prefix}--strike`]: props.strikeThrough
  }
})
const showSymbol = computed(() => {
  const symbol = props.needSymbol ? props.symbol : ''
  return symbol
})
const checkPoint = (price: string | number) => {
  return String(price).indexOf('.') > 0
}

const formatThousands = (num: any) => {
  if (Number(num) == 0) {
    num = 0
  }
  if (checkPoint(num)) {
    num = Number(num).toFixed(props.decimalDigits)
    num = typeof num.split('.') === 'string' ? num.split('.') : num.split('.')[0]
  } else {
    num = num.toString()
  }
  if (props.thousands) {
    return (num || 0).toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,')
  } else {
    return num
  }
}
const formatDecimal = (decimalNum: any) => {
  if (Number(decimalNum) == 0) {
    decimalNum = 0
  }
  if (checkPoint(decimalNum)) {
    decimalNum = Number(decimalNum).toFixed(props.decimalDigits)
    decimalNum = typeof decimalNum.split('.') === 'string' ? 0 : decimalNum.split('.')[1] ? decimalNum.split('.')[1] : 0
  } else {
    decimalNum = 0
  }
  const result = '0.' + decimalNum
  const resultFixed = Number(result).toFixed(props.decimalDigits)
  return String(resultFixed).substring(2, resultFixed.length)
}
</script>
