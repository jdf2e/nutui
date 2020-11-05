<template>
  <div class="demo">
    <h2>基本用法</h2>
    <div class="demo-price-box">
      <nut-price :price="1010" :needSymbol="false" :thousands="true" />
    </div>
    <h2>无人民币符号，有千位分隔</h2>
    <div class="demo-price-box">
      <nut-price :price="10010.01" :needSymbol="true" :thousands="false" />
    </div>
    <h2>带人民币符号，有千位分隔，保留小数点后三位</h2>
    <div class="demo-price-box">
      <nut-price :price="15213.1221" :decimalDigits="3" :needSymbol="true" :thousands="true" />
    </div>
  </div>
</template>

<script lang="ts">
import Price from '@/packages/price/index.vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('price');
export default createDemo({
  props: {
    text: String
  },
  components: { [Price.name]: Price }
});
</script>

<style lang="scss" scoped>
.demo-price-box {
  padding: 5px 20px;
  min-height: 43px;
  background: rgba(255, 255, 255, 1);
  border-radius: 7px;
  box-shadow: 0px 1px 7px 0px rgba(237, 238, 241, 1);
}
</style>
