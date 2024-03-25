<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('scroll') }}</h2>
    <Scroll />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Custom from './custom.vue'
import Scroll from './scroll.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    custom: '自定义滚动图片展示',
    scroll: '抽奖（模拟滚动抽奖）'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Custom scrolling picture display',
    scroll: 'Lottery (simulated rolling lottery)'
  }
})
</script>
