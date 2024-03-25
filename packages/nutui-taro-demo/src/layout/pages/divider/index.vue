<template>
  <Demo class="full bg-w">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('text') }}</h2>
    <Text />

    <h2>{{ t('position') }}</h2>
    <Position />

    <h2>{{ t('dashed') }}</h2>
    <Dashed />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('vertical') }}</h2>
    <Vertical />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Text from './text.vue'
import Position from './position.vue'
import Dashed from './dashed.vue'
import Custom from './custom.vue'
import Vertical from './vertical.vue'
const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    text: '展示文本',
    position: '内容位置',
    dashed: '虚线',
    custom: '自定义样式',
    vertical: '垂直分割线'
  },
  'en-US': {
    basic: 'Basic Usage',
    text: 'With Text',
    position: 'Content Position',
    dashed: 'Dashed',
    custom: 'Custom Style',
    vertical: 'Vertical Divider'
  }
})
</script>
