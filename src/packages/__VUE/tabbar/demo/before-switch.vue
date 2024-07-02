<template>
  <nut-tabbar v-model="active" :before-switch="beforeSwitch">
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
import { ref } from 'vue'
import { Home, Category, Find, Cart, My } from '@nutui/icons-vue'

const active = ref(0)

const beforeSwitch = (_: any, index: string | number) => {
  console.log(index)
  return Number(index) % 2 === 0
}
</script>
