<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('width') }}</h2>
    <Width />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('content') }}</h2>
    <Content />

    <h2>{{ t('change') }}</h2>
    <Change />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Width from './width.vue';
import Color from './color.vue';
import Size from './size.vue';
import Content from './content.vue';
import Change from './change.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    width: '自定义宽度',
    color: '自定义颜色',
    size: '自定义尺寸',
    content: '自定义内容',
    custom: '自定义',
    change: '动态改变'
  },
  'en-US': {
    basic: 'Basic Usage',
    width: 'Custom Width',
    color: 'Custom Color',
    custom: 'custom',
    size: 'Custom Size',
    content: 'Custom Content',
    change: 'Dynamic Change'
  }
});
</script>
