<template>
  <Demo class="bg-w">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('sticky') }}</h2>
    <Sticky />

    <h2>{{ t('content') }}</h2>
    <Content />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Custom from './custom.vue';
import Sticky from './sticky.vue';
import Content from './content.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    custom: '自定义索引key',
    sticky: '索引吸顶',
    content: '自定义内容'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Custom index key',
    sticky: 'Index ceiling',
    content: 'Custom content'
  }
});
</script>
