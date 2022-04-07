<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell>
      <nut-ecard
        chooseText="请选择电子卡面值"
        @inputChange="inputChange"
        @change="change"
        @changeStep="changeStep"
        :data-list="dataList"
        v-model="money"
      ></nut-ecard>
    </nut-cell>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  props: {},
  setup() {
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
    const inputChange = (val: any) => {
      money.value = val;
    };
    const change = (item: any) => {
      money.value = item.price;
    };
    const changeStep = (num: any) => {
      const val = money.value * num;
      if (val > 100) {
        money.value = val * 0.9;
      } else {
        money.value = val;
      }
    };
    return {
      dataList,
      inputChange,
      change,
      money,
      changeStep
    };
  }
});
</script>
