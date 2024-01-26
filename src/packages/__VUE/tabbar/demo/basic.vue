<template>
  <nut-tabbar @tab-switch="tabSwitch">
    <nut-tabbar-item tab-title="Home">
      <template #icon>
        <Home></Home>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="Category">
      <template #icon>
        <Category></Category>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="Find">
      <template #icon>
        <Find></Find>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="Cart">
      <template #icon>
        <Cart></Cart>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="My">
      <template #icon>
        <My></My>
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>

<script lang="ts" setup>
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue';
const tabSwitch = (item: Record<string, unknown>, index: number) => {
  console.log(item, index);
};
</script>
