<template>
  <nut-tabbar v-model="activeName" @tab-switch="tabSwitch">
    <nut-tabbar-item v-for="item in List" :key="item.name" :name="item.name" :tab-title="item.title" :icon="item.icon">
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue';
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue';

const activeName = ref('category');
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
    icon: Cart,
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
