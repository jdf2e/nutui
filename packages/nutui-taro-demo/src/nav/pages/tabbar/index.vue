<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('name') }}</h2>
    <Name />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />

    <h2>{{ t('check') }}</h2>
    <Check />

    <h2>{{ t('badge') }}</h2>
    <Badge />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('quantity') }}</h2>
    <Quantity />

    <h2>{{ t('beforeSwitch') }}</h2>
    <BeforeSwitch />

    <h2>{{ t('fixed') }}</h2>
    <Fixed />
  </Demo>
</template>

<script lang="ts" setup>
import { useTranslate } from '../../../utils'
import Basic from './basic.vue'
import Name from './name.vue'
import IconDemo from './icon.vue'
import Check from './check.vue'
import Badge from './badge.vue'
import Color from './color.vue'
import Quantity from './quantity.vue'
import Fixed from './fixed.vue'
import BeforeSwitch from './before-switch.vue'
const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    name: '通过名称匹配',
    icon: '自定义图标',
    check: '自定义选中',
    badge: '徽标提示',
    color: '自定义颜色',
    quantity: '自定义数量',
    fixed: '固定底部',
    beforeSwitch: '切换前的回调'
  },
  'en-US': {
    basic: 'Basic Usage',
    name: 'Match by name',
    icon: 'Custom Icon',
    check: 'Custom Check',
    badge: 'Show Badge',
    color: 'Custom Color',
    quantity: 'Custom Quantity',
    fixed: 'Fixed Bottom',
    beforeSwitch: 'Before Switch'
  }
})
</script>
