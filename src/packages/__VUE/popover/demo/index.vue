<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('option') }}</h2>
    <Option />

    <h2>{{ t('content') }}</h2>
    <Content />

    <h2>{{ t('position') }}</h2>
    <Position />

    <h2>{{ t('target') }}</h2>
    <Target />

    <h2>{{ t('color') }}</h2>
    <Color />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Option from './option.vue';
import Content from './content.vue';
import Position from './position.vue';
import Target from './target.vue';
import Color from './color.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    option: '选项配置',
    content: '自定义内容',
    position: '位置自定义',
    target: '自定义目标元素',
    color: '自定义颜色'
  },
  'en-US': {
    basic: 'Basic Usage',
    option: 'Option Configuration',
    content: 'Custom Content',
    position: 'Custom Location',
    target: 'custom target',
    color: 'custom color'
  }
});
</script>
