<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('left') }}</h2>
    <Left />

    <h2>{{ t('right') }}</h2>
    <Right />

    <h2>{{ t('title') }}</h2>
    <Title />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Left from './left.vue'
import Right from './right.vue'
import Title from './title.vue'
const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    left: '自定义左侧插槽',
    right: '自定义右侧插槽',
    title: '自定义标题内容'
  },
  'en-US': {
    basic: 'Basic Usage',
    left: 'Custom Left Slot',
    right: 'Custom Right Slot',
    title: 'Custom Title Content'
  }
})
</script>
<style>
.nut-navbar {
  margin-bottom: 20px;
}
</style>
