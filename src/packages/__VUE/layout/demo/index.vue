<template>
  <div class="demo full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('gap') }}</h2>
    <Gap />

    <h2>{{ t('flex') }}</h2>
    <Flex />
  </div>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Gap from './gap.vue';
import Flex from './flex.vue';
const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    gap: '分栏间隔',
    flex: 'Flex 布局'
  },
  'en-US': {
    basic: 'Basic Usage',
    gap: 'Column spacing',
    flex: 'Flex layout'
  }
});
</script>
