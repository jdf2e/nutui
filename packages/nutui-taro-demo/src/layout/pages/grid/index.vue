<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('column') }}</h2>
    <Column />

    <h2>{{ t('square') }}</h2>
    <Sqaure />

    <h2>{{ t('gutter') }}</h2>
    <Gutter />

    <h2>{{ t('reverse') }}</h2>
    <Reverse />

    <h2>{{ t('horizontal') }}</h2>
    <Horizontal />

    <h2>{{ t('content') }}</h2>
    <Content />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Column from './column.vue'
import Sqaure from './square.vue'
import Gutter from './gutter.vue'
import Reverse from './reverse.vue'
import Horizontal from './horizontal.vue'
import Content from './content.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    text: '文字',
    column: '自定义列数',
    square: '正方形格子',
    gutter: '格子间距',
    reverse: '内容翻转',
    horizontal: '内容横向',
    content: '自定义内容'
  },
  'en-US': {
    basic: 'Basic Usage',
    text: 'text',
    column: 'Column Num',
    square: 'Square',
    gutter: 'Gutter',
    reverse: 'Reverse',
    horizontal: 'Horizontal',
    content: 'Custom Content'
  }
})
</script>
