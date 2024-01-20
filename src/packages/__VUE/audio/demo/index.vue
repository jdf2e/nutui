<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('play') }}</h2>
    <Play />

    <h2>{{ t('progress') }}</h2>
    <Progress />

    <h2>{{ t('control') }}</h2>
    <Control />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Play from './play.vue';
import Progress from './progress.vue';
import Control from './control.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    play: '语音播放',
    progress: '进度条展示',
    control: '自定义操作按钮'
  },
  'en-US': {
    basic: 'Basic Usage',
    play: 'Voice Playing',
    progress: 'Progress',
    control: 'Custom Control'
  }
});
</script>
