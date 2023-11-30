<template>
  <div class="demo full bg-w">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('text') }}</h2>
    <Text />

    <h2>{{ t('position') }}</h2>
    <Position />

    <h2>{{ t('dashed') }}</h2>
    <Dashed />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('vertical') }}</h2>
    <Vertical />
  </div>
</template>

<script setup lang="ts">
import Basic from './demo/basic.vue';
import Text from './demo/text.vue';
import Position from './demo/position.vue';
import Dashed from './demo/dashed.vue';
import Custom from './demo/custom.vue';
import Vertical from './demo/vertical.vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    text: '展示文本',
    position: '内容位置',
    dashed: '虚线',
    custom: '自定义样式',
    vertical: '垂直分割线'
  },
  'en-US': {
    basic: 'Basic Usage',
    text: 'With Text',
    position: 'Content Position',
    dashed: 'Dashed',
    custom: 'Custom Style',
    vertical: 'Vertical Divider'
  }
});
</script>
