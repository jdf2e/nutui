<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('row') }}</h2>
    <Row />

    <h2>{{ t('avatar') }}</h2>
    <Avatar />

    <h2>{{ t('round') }}</h2>
    <Round />

    <h2>{{ t('picture') }}</h2>
    <Picture />

    <h2>{{ t('sub') }}</h2>
    <Sub />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Row from './row.vue';
import Avatar from './avatar.vue';
import Round from './round.vue';
import Picture from './picture.vue';
import Sub from './sub.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    row: '传入多行',
    avatar: '显示头像',
    round: '标题段落圆角风格',
    picture: '图片组合',
    sub: '显示子组件',
    desc: '一套京东风格的轻量级移动端Vue组库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。'
  },
  'en-US': {
    basic: 'Basic Usage',
    row: 'Incoming multiline',
    avatar: 'Show Faces',
    round: 'Title paragraph fillet style',
    picture: 'Picture combination',
    sub: 'Display subcomponents',
    desc: 'A set of JD style lightweight mobile terminal Vue group library provides rich basic components and business components to help developers quickly build mobile applications.'
  }
});
</script>
