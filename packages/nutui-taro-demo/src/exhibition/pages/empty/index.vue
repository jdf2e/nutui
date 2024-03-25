<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('type') }}</h2>
    <Type />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('bottom') }}</h2>
    <Bottom />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Type from './type.vue'
import Custom from './custom.vue'
import Bottom from './bottom.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    type: '图片类型',
    custom: '自定义图片',
    bottom: '底部内容'
  },
  'en-US': {
    basic: 'Basic Usage',
    type: 'Image Type',
    custom: 'Custom Image',
    bottom: 'Bottom Content'
  }
})
</script>
