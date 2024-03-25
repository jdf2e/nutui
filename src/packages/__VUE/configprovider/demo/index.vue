<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('theme') }}</h2>
    <Theme />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Theme from './theme.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    theme: '定制主题'
  },
  'en-US': {
    basic: 'Basic Usage',
    theme: 'Custom Theme'
  }
})
</script>
