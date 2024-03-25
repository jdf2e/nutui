<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('mask') }}</h2>
    <Mask />

    <h2>{{ t('duration') }}</h2>
    <Duration />

    <h2>{{ t('lock') }}</h2>
    <Lock />

    <h2>{{ t('nest') }}</h2>
    <Nest />

    <h2>{{ t('close') }}</h2>
    <Close />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Mask from './mask.vue'
import Duration from './duration.vue'
import Lock from './lock.vue'
import Nest from './nest.vue'
import Close from './close.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    mask: '遮罩样式',
    duration: '设置动画时间',
    lock: '锁定背景滚动',
    nest: '嵌套内容',
    close: '点击遮罩不关闭'
  },
  'en-US': {
    basic: 'Basic Usage',
    mask: 'Mask style',
    duration: 'Set animation time',
    lock: 'Lock Background Scroll',
    nest: 'Nested content',
    close: 'Click the mask not to close'
  }
})
</script>
