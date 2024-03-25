<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('top') }}</h2>
    <Top />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Top from './top.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    top: '吸顶距离'
  },
  'en-US': {
    basic: 'Basic Usage',
    top: 'Top Distance'
  }
})
</script>
