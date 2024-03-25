<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Custom from './custom.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    custom: '修改颜色和签字粗细'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Modify color and signature thickness'
  }
})
</script>
