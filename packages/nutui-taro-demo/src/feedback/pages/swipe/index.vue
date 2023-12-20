<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('direction') }}</h2>
    <Direction />

    <h2> {{ t('methods') }} </h2>
    <Methods />

    <h2>{{ t('content') }}</h2>
    <Content />

    <h2>{{ t('lock') }}</h2>
    <Lock />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Disabled from './disabled.vue';
import Direction from './direction.vue';
import Methods from './methods.vue';
import Content from './content.vue';
import Lock from './lock.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    leftDel: '左滑删除',
    disabled: '禁用滑动',
    direction: '左右滑动',
    methods: 'Ref 方法',
    content: '自定义内容',
    lock: '使用 SwipeGroup 控制 Swipe 之间互斥'
  },
  'en-US': {
    basic: 'Basic Usage',
    leftDel: 'Swipe left to delete',
    disabled: 'Disable swipe',
    direction: 'Swipe Left or Right',
    methods: 'Ref methods',
    content: 'Custom Content',
    lock: 'Use SwipeGroup to make swipe exclusive'
  }
});
</script>
