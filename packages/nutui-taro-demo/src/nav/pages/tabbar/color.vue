<template>
  <nut-tabbar v-model="active" unactive-color="#7d7e80" active-color="#1989fa">
    <nut-tabbar-item v-for="(item, index) in List" :key="index" :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>
<script setup>
import { h, ref } from 'vue';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';

const List = [
  {
    title: 'Home',
    icon: h(Home),
    name: 'home'
  },
  {
    title: 'Category',
    icon: h(Category),
    name: 'category'
  },
  {
    title: 'Find',
    icon: h(Find),
    name: 'find'
  },
  {
    title: 'Cart',
    icon: h(Cart),
    name: 'cart'
  },
  {
    title: 'My',
    icon: h(My),
    name: 'my'
  }
];
const active = ref(0);
</script>
