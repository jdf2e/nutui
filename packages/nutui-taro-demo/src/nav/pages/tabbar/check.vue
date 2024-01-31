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
const tabSwitch = (item: Record<string, unknown>, index: number) => {
  console.log(item, index);
};
</script>
