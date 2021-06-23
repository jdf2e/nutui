<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-tabbar @tab-switch="tabSwitch">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>

    <h2>自定义选中</h2>
    <nut-tabbar v-model:visible="active">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>

    <h2>徽标提示</h2>
    <nut-tabbar>
      <nut-tabbar-item tab-title="首页" icon="home" num="11"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="购物车"
        icon="cart"
        num="110"
      ></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>

    <h2>自定义颜色</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item tab-title="购物车" icon="cart"></nut-tabbar-item>
      <nut-tabbar-item tab-title="我的" icon="my"></nut-tabbar-item>
    </nut-tabbar>
    <h2>三个icon的tabbar</h2>
    <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
      <nut-tabbar-item tab-title="首页" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
    </nut-tabbar>
    <h2>固定底部，可自由跳转</h2>
    <nut-tabbar :bottom="true">
      <nut-tabbar-item tab-title="首页" href="" icon="home"></nut-tabbar-item>
      <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
      <nut-tabbar-item tab-title="发现" icon="find"></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="购物车"
        href="https://m.jd.com"
        icon="cart"
      ></nut-tabbar-item>
      <nut-tabbar-item
        tab-title="我的"
        href="######"
        icon="my"
      ></nut-tabbar-item>
    </nut-tabbar>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const active = ref(2);
    function tabSwitch(item: object, index: number) {
      console.log(item, index);
    }
    return {
      active,
      tabSwitch
    };
  }
};
</script>

<style lang="scss"></style>
