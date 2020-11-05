<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell>
      <nut-price :price="1010" :needSymbol="false" :thousands="true" />
    </nut-cell>
    <h2>无人民币符号，有千位分隔</h2>
    <nut-cell>
      <nut-price :price="10010.01" :needSymbol="true" :thousands="false" />
    </nut-cell>
    <h2>带人民币符号，有千位分隔，保留小数点后三位</h2>
    <nut-cell>
      <nut-price :price="15213.1221" :decimalDigits="3" :needSymbol="true" :thousands="true" />
    </nut-cell>
  </div>
</template>

<script lang="ts">
import Price from '@/packages/price/index.vue';
import Cell from '@/packages/cell/index.vue';
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('price');
export default createDemo({
  props: {
    text: String
  },
  components: {
    [Price.name]: Price,
    [Cell.name]: Cell
  }
});
</script>

<style lang="scss" scoped></style>
