<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
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
import { useTranslate } from '@/sites/assets/util/useTranslate';
const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法'
  },
  'en-US': {
    basic: 'Basic Usage'
  }
});
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
const money = ref(10);
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
