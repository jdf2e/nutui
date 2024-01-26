<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('lazy') }}</h2>
    <Lazy />

    <h2>{{ t('partial') }}</h2>
    <Partial />

    <h2>{{ t('convert') }}</h2>
    <Convert />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Custom from './custom.vue';
import Lazy from './lazy.vue';
import Partial from './partial.vue';
import Convert from './convert.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    custom: '自定义属性名称',
    lazy: '动态加载',
    partial: '部分数据动态加载',
    convert: '自动转换'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Custom attribute name',
    lazy: 'Async loading',
    partial: 'Async loading of partial data',
    convert: 'Automatic data conversion'
  }
});
</script>
