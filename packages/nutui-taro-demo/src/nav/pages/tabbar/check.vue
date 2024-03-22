<template>
  <nut-tabbar v-model="active" @tab-switch="tabSwitch">
    <nut-tabbar-item v-for="(item, index) in List" :key="index" :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>
<script lang="ts" setup>
import { h, ref } from 'vue';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';

const active = ref(2);
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

const tabSwitch = (item: Record<string, unknown>, index: number) => {
  console.log(item, index);
};
</script>
