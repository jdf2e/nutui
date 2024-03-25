<template>
  <Demo class="bg-w">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('border') }}</h2>
    <Border />

    <h2>{{ t('align') }}</h2>
    <Align />

    <h2>{{ t('summary') }}</h2>
    <Summary />

    <h2>{{ t('striped') }}</h2>
    <Striped />

    <h2>{{ t('nodata') }}</h2>
    <Nodata />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('async') }}</h2>
    <Async />

    <h2>{{ t('sort') }}</h2>
    <Sort />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Border from './border.vue'
import Align from './align.vue'
import Summary from './summary.vue'
import Striped from './striped.vue'
import Nodata from './nodata.vue'
import Custom from './custom.vue'
import Async from './async.vue'
import Sort from './sort.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    border: '是否显示边框',
    align: '文字对齐方式',
    summary: '显示总结栏',
    striped: '条纹、明暗交替',
    nodata: '无数据默认展示，支持自定义',
    custom: '自定义单元格',
    async: '异步渲染(等待 5s)',
    sort: '支持排序'
  },
  'en-US': {
    basic: 'Basic Usage',
    border: 'Whether to display border',
    align: 'Text Align',
    summary: 'Show summary bar',
    striped: 'Stripes, alternating light and shade',
    nodata: 'No data is displayed by default, and customization is supported',
    title5: 'Here is the custom display',
    custom: 'Custom cell',
    async: 'Asynchronous rendering(See the effect after 5S)',
    sort: 'Support sorting'
  }
})
</script>
