<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('direction') }}</h2>
    <Direction />

    <h2>{{ t('gutter') }}</h2>
    <Gutter />

    <h2>{{ t('wrap') }}</h2>
    <Wrap />
  </Demo>
</template>

<script lang="ts" setup>
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Direction from './direction.vue'
import Gutter from './gutter.vue'
import Wrap from './wrap.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    direction: '垂直排列',
    gutter: '自定义间距',
    wrap: '自动换行'
  },
  'en-US': {
    basic: 'Basic Usage',
    direction: 'Custom Direction',
    gutter: 'Custom gutter',
    wrap: 'Word wrap'
  }
})
</script>
