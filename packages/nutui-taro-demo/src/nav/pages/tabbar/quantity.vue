<template>
  <nut-tabbar v-model="active" unactive-color="#7d7e80" active-color="#1989fa">
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
  </nut-tabbar>
</template>
<script setup>
import { ref } from 'vue';
import { Home, Category, Find } from '@nutui/icons-vue-taro';

const active = ref(0);
</script>
