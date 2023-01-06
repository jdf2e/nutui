<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-cell>
      <nut-ecard
        v-model="money"
        @inputChange="inputChange"
        @change="change"
        @changeStep="changeStep"
        :data-list="dataList"
      ></nut-ecard>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
export default defineComponent({
  components: { Header },
  setup() {
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
    return {
      dataList,
      inputChange,
      change,
      money,
      changeStep,
      env
    };
  }
});
</script>
