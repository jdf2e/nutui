<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('scrollable') }}</h2>
    <Scrollable />

    <h2>{{ t('close') }}</h2>
    <Close />

    <h2>{{ t('content') }}</h2>
    <Content />

    <h2>{{ t('wrap') }}</h2>
    <Wrap />

    <h2>{{ t('vertical') }}</h2>
    <Vertical />

    <h2>{{ t('verticalContent') }}</h2>
    <VerticalContent />

    <h2>{{ t('right') }}</h2>
    <Right />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Custom from './custom.vue'
import Scrollable from './scrollable.vue'
import Close from './close.vue'
import Content from './content.vue'
import Wrap from './wrap.vue'
import Vertical from './vertical.vue'
import VerticalContent from './vertical-content.vue'
import Right from './right.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础使用',
    custom: '自定义样式',
    scrollable: '滚动播放',
    close: '关闭模式',
    content: '自定义内容',
    wrap: '换行展示',
    vertical: '垂直滚动',
    verticalContent: '纵向--自定义滚动内容',
    right: '纵向--自定义右侧图标'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Custom Style',
    scrollable: 'Scrollable',
    close: 'Close Mode',
    content: 'Custom Content',
    wrap: 'Wrapable',
    vertical: 'Vertical Scroll',
    verticalContent: 'Vertical Scroll Custom Style',
    right: 'Vertical Scroll Custom Right Icon'
  }
})
</script>
