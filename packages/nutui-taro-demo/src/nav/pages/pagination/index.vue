<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('simple') }}</h2>
    <Simple />

    <h2>{{ t('ellipse') }}</h2>
    <Ellipse />

    <h2>{{ t('custom') }}</h2>
    <Custom />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Simple from './simple.vue';
import Ellipse from './ellipse.vue';
import Custom from './custom.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    simple: '简单模式',
    ellipse: '显示省略号',
    custom: '自定义按钮'
  },
  'en-US': {
    basic: 'Basic Usage',
    simple: 'Simple Mode',
    ellipse: 'Show ellipses',
    custom: 'Custom Button'
  }
});
</script>
