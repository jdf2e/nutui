<template>
  <Demo class="bg-w">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('horizontal') }}</h2>
    <Horizontal />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />

    <h2>{{ t('position') }}</h2>
    <Position />

    <h2>{{ t('iconSize') }}</h2>
    <IconSize />

    <h2>{{ t('shape') }}</h2>
    <Shape />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('event') }}</h2>
    <Event />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Horizontal from './horizontal.vue'
import Disabled from './disabled.vue'
import IconDemo from './icon.vue'
import Position from './position.vue'
import IconSize from './icon-size.vue'
import Shape from './shape.vue'
import Size from './size.vue'
import Event from './event.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    horizontal: '水平方向',
    disabled: '禁用状态',
    icon: '自定义图标',
    position: '左侧文本',
    iconSize: '图标尺寸',
    shape: '设置形状',
    size: '自定义按钮尺寸',
    event: '触发事件'
  },
  'en-US': {
    basic: 'Basic Usage',
    horizontal: 'Horizontal',
    disabled: 'Disabled',
    icon: 'Custom Icon',
    position: 'Text Position',
    iconSize: 'Icon Size',
    shape: 'Shape',
    size: 'Custom Button Size',
    event: 'Event'
  }
})
</script>
