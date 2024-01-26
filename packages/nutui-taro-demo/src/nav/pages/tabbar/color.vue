<template>
  <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
    <nut-tabbar-item v-for="(item, index) in List" :key="index" :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>
<script setup>
import { h } from 'vue';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';
const List = [
  {
    title: 'label',
    icon: h(Home),
    name: 'home'
  },
  {
    title: 'label',
    icon: h(Category),
    name: 'category'
  },
  {
    title: 'label',
    icon: h(Find),
    name: 'find'
  },
  {
    title: 'label',
    icon: h(Cart),
    name: 'cart'
  },
  {
    title: 'label',
    icon: h(My),
    name: 'my'
  }
];
</script>
