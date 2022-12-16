<template>
  <div class="demo">
    <nut-cell-group title="基本用法 small normal large">
      <nut-cell>
        <nut-price :price="0" size="small" :need-symbol="true" :thousands="true" />
      </nut-cell>
      <nut-cell>
        <nut-price :price="0" size="normal" :need-symbol="true" :thousands="true" />
      </nut-cell>
      <nut-cell>
        <nut-price :price="0" size="large" :need-symbol="true" :thousands="true" />
      </nut-cell>
    </nut-cell-group>
    <h2>不保留小数</h2>
    <nut-cell>
      <nut-price :price="8888" decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" />
    </nut-cell>
    <h2>划线价</h2>
    <nut-cell>
      <nut-price :price="8888" decimal-digits="0" size="normal" :need-symbol="true" :thousands="true" strike-through />
    </nut-cell>
    <h2>调整 symbol 符号位置</h2>
    <nut-cell>
      <nut-price :price="8888.01" position="after" symbol="元" size="normal" :need-symbol="true" :thousands="true" />
    </nut-cell>
    <h2>有人民币符号，无千位分隔</h2>
    <nut-cell>
      <nut-price :price="10010.01" size="normal" :need-symbol="true" :thousands="false" />
    </nut-cell>
    <h2>带人民币符号，有千位分隔，保留小数点后三位</h2>
    <nut-cell>
      <nut-price :price="15213.1221" size="normal" :decimal-digits="3" :need-symbol="true" :thousands="true" />
    </nut-cell>
    <h2>异步随机变更</h2>
    <nut-cell>
      <nut-price :price="price" size="normal" :decimal-digits="3" :need-symbol="true" :thousands="true" />
    </nut-cell>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  setup() {
    const price = ref(0);
    setInterval(() => {
      price.value = Math.random() * 10000000;
      // console.log('price.value1', price.value)
    }, 1000);
    return {
      price
    };
  }
};
</script>

<style lang="scss"></style>
