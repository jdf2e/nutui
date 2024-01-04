<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('part') }}</h2>
    <Part />

    <h2>{{ t('multi') }}</h2>
    <Multi />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Part from './part.vue';
import Multi from './multi.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    part: '局部用法',
    multi: '多行水印'
  },
  'en-US': {
    basic: 'Basic Usage',
    part: 'Part Usage',
    multi: 'Multiline Watermark'
  }
});
</script>
