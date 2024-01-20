<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('format') }}</h2>
    <Format />

    <h2>{{ t('millisecond') }}</h2>
    <Millisecond />

    <h2>{{ t('control') }}</h2>
    <Control />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('ref') }}</h2>
    <RefDemo />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Format from './format.vue';
import Millisecond from './millisecond.vue';
import Control from './control.vue';
import Custom from './custom.vue';
import RefDemo from './ref.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    format: '自定义格式',
    millisecond: '毫秒级渲染',
    control: '控制开始和暂停的倒计时',
    custom: '自定义展示样式',
    ref: 'Ref 方法'
  },
  'en-US': {
    basic: 'Basic Usage',
    format: 'Custom Format',
    millisecond: 'Millisecond',
    control: 'Manual Control',
    custom: 'Custom Style',
    ref: 'Ref Methods'
  }
});
</script>
