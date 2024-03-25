<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('fit') }}</h2>
    <Fit />

    <h2>{{ t('position') }}</h2>
    <Position />

    <h2>{{ t('round') }}</h2>
    <Round />

    <h2>{{ t('loading') }}</h2>
    <Loading />

    <h2>{{ t('error') }}</h2>
    <Error />

    <h2>{{ t('lazy') }}</h2>
    <Lazy />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Fit from './fit.vue'
import Position from './position.vue'
import Round from './round.vue'
import Loading from './loading.vue'
import Error from './error.vue'
import Lazy from './lazy.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    fit: '填充模式',
    position: '图片位置',
    round: '圆形图片',
    loading: '加载中提示',
    error: '加载失败',
    lazy: '懒加载'
  },
  'en-US': {
    basic: 'Basic Usage',
    fit: 'Object Fill',
    position: 'Object Position',
    round: 'Round',
    loading: 'Loading',
    error: 'Error',
    lazy: 'Lazy Load'
  }
})
</script>
