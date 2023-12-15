<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('block') }}</h2>
    <Block />

    <h2>{{ t('zero') }}</h2>
    <Zero />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Block from './block.vue';
import Zero from './zero.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    block: 'block 用法',
    zero: '不补 0'
  },
  'en-US': {
    basic: 'Basic Usage',
    block: 'Block',
    zero: 'Do not make up 0'
  }
});
</script>
