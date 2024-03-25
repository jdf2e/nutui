<template>
  <Demo class="trend-arrow-demo">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('digits') }}</h2>
    <Digits />

    <h2>{{ t('left') }}</h2>
    <Left />

    <h2>{{ t('sign') }}</h2>
    <Sign />

    <h2>{{ t('zero') }}</h2>
    <Zero />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Digits from './digits.vue'
import Left from './left.vue'
import Sign from './sign.vue'
import Zero from './zero.vue'
import Color from './color.vue'
import IconDemo from './icon.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    digits: '指定小数位',
    left: '箭头在前面',
    sign: '显示正负号',
    zero: '是否展示0',
    color: '自定义颜色',
    icon: '自定义图标'
  },
  'en-US': {
    basic: 'Basic Usage',
    digits: 'Specify decimal places',
    left: 'Arrow ahead',
    sign: 'show sign',
    zero: 'Whether to show 0',
    color: 'Custom color',
    icon: 'Custom icon'
  }
})
</script>
<style lang="scss">
.trend-arrow-demo {
  .nut-trend-arrow {
    margin-right: 10px;
  }
}
</style>
