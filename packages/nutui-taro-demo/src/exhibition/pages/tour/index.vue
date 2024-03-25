<template>
  <Demo style="padding-bottom: 50px">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('position') }}</h2>
    <Position />

    <h2>{{ t('content') }}</h2>
    <Content />

    <h2>{{ t('step') }}</h2>
    <Step />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Custom from './custom.vue'
import Position from './position.vue'
import Content from './content.vue'
import Step from './step.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    custom: '自定义样式',
    position: '设置偏移量',
    content: '自定义内容',
    step: '步骤引导'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Custom Style',
    position: 'Custom Offset',
    content: 'Custom Content',
    step: 'Steps'
  }
})
</script>
