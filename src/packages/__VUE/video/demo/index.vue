<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('autoplay') }}</h2>
    <Autoplay />

    <h2>{{ t('poster') }}</h2>
    <Poster />

    <h2>{{ t('playsinline') }}</h2>
    <Playsinline />

    <h2>{{ t('background') }}</h2>
    <Background />

    <h2>{{ t('methods') }}</h2>
    <Methods />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Autoplay from './autoplay.vue'
import Poster from './poster.vue'
import Playsinline from './playsinline.vue'
import Background from './background.vue'
import Methods from './methods.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    autoplay: '自动播放',
    poster: '视频封面海报设置',
    playsinline: '行内播放',
    background: '设置视频为背景图',
    methods: 'Ref 方法'
  },
  'en-US': {
    basic: 'Basic Usage',
    autoplay: 'Auto play',
    poster: 'Video cover poster settings',
    playsinline: 'play inline',
    background: 'Set video as background',
    methods: 'Ref Methods'
  }
})
</script>
