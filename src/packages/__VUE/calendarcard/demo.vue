<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <Basic />
  </div>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/assets/util/useTranslate';
import Basic from './demo/basic.vue';

const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法'
  },
  'en-US': {
    basic: 'Basic Usage'
  }
});
</script>
