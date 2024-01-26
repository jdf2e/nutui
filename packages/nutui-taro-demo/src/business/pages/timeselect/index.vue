<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('multiple') }}</h2>
    <Multiple />

    <h2>{{ t('title') }}</h2>
    <Title />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Multiple from './multiple.vue';
import Title from './title.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    multiple: '可选择多个日期时间',
    title: '更改标题'
  },
  'en-US': {
    basic: 'Basic Usage',
    multiple: 'Multiple dates and times can be selected',
    title: 'Change Title'
  }
});
</script>
