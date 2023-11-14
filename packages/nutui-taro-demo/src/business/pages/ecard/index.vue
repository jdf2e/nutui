<template>
  <Demo>
    <h2>基础用法</h2>
    <nut-cell>
      <nut-ecard
        v-model="money"
        :data-list="dataList"
        @input-change="inputChange"
        @change="change"
        @change-step="changeStep"
      ></nut-ecard>
    </nut-cell>
  </Demo>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
const dataList = reactive([
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
]);
const money = ref(0);
const inputChange = (val: number) => {
  money.value = val;
};
const change = (item: { price: number }) => {
  money.value = item.price;
};
const changeStep = (num: number, price: number) => {
  const val = price * num;
  money.value = val;
};
</script>
