<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('status') }}</h2>
    <Status />

    <h2>{{ t('content') }}</h2>
    <Content />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Custom from './custom.vue'
import Status from './status.vue'
import Content from './content.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    custom: '自定义信息',
    status: '选项状态',
    content: '自定义内容'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Custom Info',
    status: 'Option Status',
    content: 'Custom Content'
  }
})
</script>
