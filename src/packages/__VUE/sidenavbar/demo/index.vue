<template>
  <Demo class="bg-w">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('popup') }}</h2>
    <Popup />

    <h2>{{ t('nest') }}</h2>
    <Nest />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Popup from './popup.vue';
import Nest from './nest.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    popup: '搭配 Popup',
    nest: '导航嵌套（建议最多三层）'
  },
  'en-US': {
    basic: 'Basic Usage',
    popup: 'Popup',
    nest: 'Navigation nesting (up to three layers are recommended)'
  }
});
</script>
