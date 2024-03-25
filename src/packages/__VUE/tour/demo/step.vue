<template>
  <nut-tabbar bottom>
    <nut-tabbar-item id="tour5-1" tab-title="首页"></nut-tabbar-item>
    <nut-tabbar-item id="tour5-2" tab-title="分类"></nut-tabbar-item>
    <nut-tabbar-item id="tour5-3" tab-title="购物车"></nut-tabbar-item>
    <nut-tabbar-item id="tour5-4" tab-title="我的"></nut-tabbar-item>
  </nut-tabbar>
  <nut-cell title="点击试试" @click="show = true"></nut-cell>
  <nut-tour
    v-model="show"
    class="nut-custom-tour"
    :steps="steps"
    location="top-start"
    :offset="[0, 0]"
    :mask-width="60"
    :mask-height="50"
  ></nut-tour>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const steps = ref([
  {
    content: '京东风格的轻量级移动端组件库，覆盖移动端主流场景',
    target: 'tour5-1'
  },
  {
    content: '支持一套代码同时开发多端小程序 + H5',
    target: 'tour5-2'
  },
  {
    content: '基于京东APP 10.0 视觉规范',
    target: 'tour5-3',
    location: 'top-end'
  },
  {
    content: '支持定制主题，内置 700+ 个主题变量',
    target: 'tour5-4',
    location: 'top-end'
  }
])
</script>
