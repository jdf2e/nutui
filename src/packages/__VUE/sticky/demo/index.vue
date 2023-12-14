<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('top') }}</h2>
    <Top />

    <h2>{{ t('container') }}</h2>
    <Container />

    <h2>{{ t('bottom') }}</h2>
    <Bottom />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Top from './top.vue';
import Container from './container.vue';
import Bottom from './bottom.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    top: '吸顶距离',
    container: '指定容器',
    bottom: '吸底距离'
  },
  'en-US': {
    basic: 'Basic Usage',
    top: 'Top Distance',
    container: 'Custom Container',
    bottom: 'Bottom Distance'
  }
});
</script>
