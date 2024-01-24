<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('async') }}</h2>
    <Async />

    <h2>{{ t('dynamic') }}</h2>
    <Dynamic />

    <h2>{{ t('width') }}</h2>
    <Width />

    <h2>{{ t('page') }}</h2>
    <Page />

    <h2>{{ t('methods') }}</h2>
    <Methods />

    <h2>{{ t('vertical') }}</h2>
    <Vertical />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Async from './async.vue';
import Dynamic from './dynamic.vue';
import Width from './width.vue';
import Page from './page.vue';
import Methods from './methods.vue';
import Vertical from './vertical.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    async: '异步加载(3s)',
    dynamic: '动态加载',
    width: '自定义大小',
    page: '自定义指示器',
    methods: '手动切换',
    vertical: '垂直方向'
  },
  'en-US': {
    basic: 'Basic Usage',
    async: 'Asynchronous loading(3s)',
    dynamic: 'Dynamic loading',
    width: 'Custom width',
    page: 'Custom page',
    methods: 'Manual switching',
    vertical: 'Vertical direction'
  }
});
</script>
