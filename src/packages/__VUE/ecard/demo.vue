<template>
  <div class="demo">
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
import { reactive, ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo } = createComponent('ecard');
export default createDemo({
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
      changeStep
    };
  }
});
</script>
<style lang="scss" scoped>
.demo {
}
</style>
