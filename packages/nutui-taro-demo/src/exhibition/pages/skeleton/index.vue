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
import { useTranslate } from '../../../utils';
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
    sub: '显示子组件'
  },
  'en-US': {
    basic: 'Basic Usage',
    row: 'Multi lines',
    avatar: 'Show Avatar',
    round: 'Round Style',
    picture: 'Picture combination',
    sub: 'Display sub-component'
  }
});
</script>
