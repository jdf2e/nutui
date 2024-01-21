<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('limit') }}</h2>
    <Limit />

    <h2>{{ t('row') }}</h2>
    <Row />

    <h2>{{ t('status') }}</h2>
    <Status />

    <h2>{{ t('focus') }}</h2>
    <Focus />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Limit from './limit.vue';
import Row from './row.vue';
import Status from './status.vue';
import Focus from './focus.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    limit: '显示字数统计',
    row: '高度自动拉伸',
    status: '只读、禁用',
    focus: '自动获取焦点'
  },
  'en-US': {
    basic: 'Basic Usage',
    limit: 'Display word count',
    row: 'Height customization, stretching',
    status: 'Readonly & Disabled',
    focus: 'Autofocus'
  }
});
</script>
