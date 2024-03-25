<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('color') }}</h2>
    <Color />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Custom from './custom.vue'
import Color from './color.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    custom: '样式风格',
    color: '颜色自定义'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Style',
    color: 'Custom Color'
  }
})
</script>
