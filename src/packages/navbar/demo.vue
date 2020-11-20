<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-navbar leftShow title="订单详情" icon="share"></nut-navbar>
    <nut-navbar leftShow title="浏览记录" desc="清空"></nut-navbar>
    <!-- 是否支持自定义属性titIcon -->
    <nut-navbar :leftShow="false" title="购物车" titIcon="locationg3" desc="编辑" icon="more"></nut-navbar>
    <h2>增加tab及右侧按钮</h2>
    <nut-navbar title="商品" desc="编辑" icon="horizontal"></nut-navbar>
    <h2>多tab切换导航</h2>
    <nut-navbar title="商品" icon="more"></nut-navbar>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/utils/create';
const { createDemo } = createComponent('navbar');
export default createDemo({
  props: {},
  setup() {
    const testClick = (event: Event) => {
      alert(event);
    };
    return { testClick };
  }
});
</script>

<style lang="scss" scoped></style>
