<template>
  <div class="demo">
    <h2>基本用法&yen;</h2>
    <nut-cell>
      <nut-price :price="1010" :need-symbol="false" :thousands="true" />
    </nut-cell>
    <h2>有人民币符号，无千位分隔</h2>
    <nut-cell>
      <nut-price :price="10010.01" :need-symbol="true" :thousands="false" />
    </nut-cell>
    <h2>带人民币符号，有千位分隔，保留小数点后三位</h2>
    <nut-cell>
      <nut-price
        :price="15213.1221"
        :decimal-digits="3"
        :need-symbol="true"
        :thousands="true"
      />
    </nut-cell>
    <h2>异步随机变更</h2>
    <nut-cell>
      <nut-price
        :price="price"
        :decimal-digits="3"
        :need-symbol="false"
        :thousands="true"
      />
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
