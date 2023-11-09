<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
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
  </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
const env = Taro.getEnv();
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
