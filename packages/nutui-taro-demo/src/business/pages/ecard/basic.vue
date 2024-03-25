<template>
  <nut-cell>
    <nut-ecard
      v-model="money"
      :data-list="dataList"
      @input-change="inputChange"
      @change="change"
      @change-step="changeStep"
    ></nut-ecard>
  </nut-cell>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const dataList = ref([
  {
    price: 10
  },
  {
    price: 20
  },
  {
    price: 30
  },
  {
    price: 40
  }
])
const money = ref(10)
const inputChange = (val: number) => {
  money.value = val
}
const change = (item: any) => {
  money.value = item.price
}
const changeStep = (num: number, price: number) => {
  const val = price * num
  money.value = val
}
</script>
