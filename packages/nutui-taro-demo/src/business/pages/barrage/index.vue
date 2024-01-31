<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法'
  },
  'en-US': {
    basic: 'Basic Usage'
  }
});
</script>
