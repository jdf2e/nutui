<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('vmodel') }}</h2>
    <Vmodel />

    <h2>{{ t('popup') }}</h2>
    <Popup />

    <h2>{{ t('columns') }}</h2>
    <Columns />

    <h2>{{ t('cascader') }}</h2>
    <Cascader />

    <h2>{{ t('async') }}</h2>
    <Async />

    <h2>{{ t('field') }}</h2>
    <Field />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Vmodel from './vmodel.vue';
import Popup from './popup.vue';
import Columns from './columns.vue';
import Cascader from './cascader.vue';
import Async from './async.vue';
import Field from './field.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    vmodel: 'v-model',
    popup: '搭配 Popup 使用',
    columns: '多列样式',
    cascader: '多级联动',
    async: '异步获取',
    field: '自定义字段名'
  },
  'en-US': {
    basic: 'Basic Usage',
    vmodel: 'v-model',
    popup: 'With Popup',
    columns: 'Multiple Columns',
    cascader: 'Cascader',
    async: 'Async',
    field: 'Custom Field Names'
  }
});
</script>
