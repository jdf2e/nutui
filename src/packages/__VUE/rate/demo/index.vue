<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('half') }}</h2>
    <Half />

    <h2>{{ t('icon') }}</h2>
    <Icon />

    <h2>{{ t('count') }}</h2>
    <Count />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('read') }}</h2>
    <Read />

    <h2>{{ t('event') }}</h2>
    <Event />

    <h2>{{ t('size') }}</h2>
    <Size />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Half from './half.vue'
import Icon from './icon.vue'
import Count from './count.vue'
import Color from './color.vue'
import Disabled from './disabled.vue'
import Read from './read.vue'
import Event from './event.vue'
import Size from './size.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    half: '半星',
    icon: '自定义图标',
    count: '自定义数量',
    color: '自定义颜色',
    disabled: '禁用状态',
    read: '只读状态',
    event: '绑定事件',
    size: '自定义尺寸 35px'
  },
  'en-US': {
    basic: 'Basic Usage',
    half: 'Half Star',
    icon: 'Custom Icon',
    count: 'Custom Count',
    color: 'Custom Color',
    disabled: 'Disabled',
    read: 'Read Only',
    event: 'event',
    size: 'Custom size 35px'
  }
})
</script>
