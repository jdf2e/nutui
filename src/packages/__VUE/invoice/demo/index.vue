<template>
  <Demo class="full">
    <h2>{{ translate('basic') }}</h2>
    <Basic />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'

const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法'
  },
  'en-US': {
    basic: 'Basic Usage'
  }
})
</script>
