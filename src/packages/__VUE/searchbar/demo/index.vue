<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('shape') }}</h2>
    <Shape />

    <h2>{{ t('left') }}</h2>
    <Left />

    <h2>{{ t('right') }}</h2>
    <Right />

    <h2>{{ t('background') }}</h2>
    <Background />

    <h2>{{ t('focus') }}</h2>
    <Focus />

    <h2>{{ t('clear') }}</h2>
    <Clear />

    <h2>{{ t('all') }}</h2>
    <All />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Shape from './shape.vue';
import Left from './left.vue';
import Right from './right.vue';
import Background from './background.vue';
import Focus from './focus.vue';
import Clear from './clear.vue';
import All from './all.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    shape: '设置搜索框形状',
    left: '左侧插槽',
    right: '右侧插槽',
    background: '设置背景',
    focus: 'Focus 样式',
    clear: '自定义清除图标',
    all: '完整展示'
  },
  'en-US': {
    basic: 'Basic Usage',
    shape: 'Shape',
    left: 'Left Slot',
    right: 'Right Slot',
    background: 'Background',
    focus: 'Focus Style',
    clear: 'Clear Icon',
    all: 'Complete Display'
  }
});
</script>
