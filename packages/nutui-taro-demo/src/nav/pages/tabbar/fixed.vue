<template>
  <nut-tabbar v-model="active" bottom safe-area-inset-bottom placeholder>
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
    icon: h(Home)
  },
  {
    title: 'Category',
    icon: h(Category)
  },
  {
    title: 'Find',
    icon: h(Find)
  },
  {
    title: 'Cart',
    icon: h(Cart)
  },
  {
    title: 'My',
    icon: h(My)
  }
];
const active = ref(0);
</script>
