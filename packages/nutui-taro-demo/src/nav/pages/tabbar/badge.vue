<template>
  <nut-tabbar>
    <nut-tabbar-item tab-title="Home" :value="11">
      <template #icon>
        <Home></Home>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="Category" :dot="true">
      <template #icon>
        <Category></Category>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="Find" :value="110">
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
<script setup>
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue-taro';
</script>
