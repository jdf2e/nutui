<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2 style="margin-top: 60px">{{ t('direction') }}</h2>
    <Direction />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Direction from './direction.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    direction: '限制拖拽方向'
  },
  'en-US': {
    basic: 'Basic Usage',
    direction: 'Limit Direction'
  }
})
</script>
