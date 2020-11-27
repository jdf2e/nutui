<template>
  <div class="demo">
    <h2>基本用法</h2>
    <nut-cell>
      <nut-price :price="1010" :need-symbol="false" :thousands="true" />
    </nut-cell>
    <h2>无人民币符号，有千位分隔</h2>
    <nut-cell>
      <nut-price :price="10010.01" :need-symbol="true" :thousands="false" />
    </nut-cell>
    <h2>带人民币符号，有千位分隔，保留小数点后三位</h2>
    <nut-cell>
      <nut-price :price="15213.1221" :decimal-digits="3" :need-symbol="true" :thousands="true" />
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('price');
export default createDemo({
  props: {}
});
</script>

<style lang="scss" scoped></style>
