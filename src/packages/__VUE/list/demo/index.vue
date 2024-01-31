<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基本用法'
  },
  'en-US': {
    basic: 'Basic Usage'
  }
});
</script>
