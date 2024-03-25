<template>
  <Demo class="bg-w">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('shape') }}</h2>
    <Shape />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('badge') }}</h2>
    <Badge />

    <h2>{{ t('group') }}</h2>
    <Group />

    <h2>{{ t('zindex') }}</h2>
    <Zindex />

    <h2>{{ t('click') }}</h2>
    <Click />

    <h2>{{ t('count') }}</h2>
    <Count />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Size from './size.vue'
import Shape from './shape.vue'
import Color from './color.vue'
import Badge from './badge.vue'
import Click from './click.vue'
import Group from './group.vue'
import Zindex from './zindex.vue'
import Count from './count.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    size: '尺寸',
    shape: '形状',
    color: '自定义颜色',
    badge: '带徽标的头像',
    group: '头像组合展现',
    zindex: '组合头像可控制层级方向',
    click: '点击事件',
    count: '动态修改数量'
  },
  'en-US': {
    basic: 'Basic Usage',
    size: 'Size',
    shape: 'Shape',
    color: 'Color',
    badge: 'Avatar with Badge',
    group: 'Avatar group display',
    zindex: 'Avatar group to control hierarchy direction',
    click: 'Click Event',
    count: 'Dynamically change count'
  }
})
</script>
