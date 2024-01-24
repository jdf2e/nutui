<template>
  <nut-tabbar unactive-color="#7d7e80" active-color="#1989fa">
    <nut-tabbar-item tab-title="label" :value="11">
      <template #icon>
        <Home></Home>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="label" :dot="true">
      <template #icon>
        <Home></Home>
      </template>
    </nut-tabbar-item>
    <nut-tabbar-item tab-title="label" :value="110">
      <template #icon>
        <Home></Home>
      </template>
    </nut-tabbar-item>
  </nut-tabbar>
</template>
<script setup>
import { Home } from '@nutui/icons-vue-taro';
</script>
