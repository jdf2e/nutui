<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('dynamic') }}</h2>
    <Dynamic />

    <h2>{{ t('validate') }}</h2>
    <Validate />

    <h2>{{ t('type') }}</h2>
    <Type />

    <h2>{{ t('star') }}</h2>
    <Star />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Dynamic from './dynamic.vue';
import Validate from './validate.vue';
import Type from './type.vue';
import Star from './star.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    dynamic: '动态表单',
    validate: '表单校验',
    type: '表单类型',
    star: '自定义 label 位置'
  },
  'en-US': {
    basic: 'Basic Usage',
    dynamic: 'Dynamic Form',
    validate: 'Validate Form',
    type: 'Form Type',
    star: 'Customize the label location'
  }
});
</script>
