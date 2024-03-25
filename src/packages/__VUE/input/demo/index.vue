<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('type') }}</h2>
    <Type />

    <h2>{{ t('status') }}</h2>
    <Status />

    <h2>{{ t('clear') }}</h2>
    <Clear />

    <h2>{{ t('form') }}</h2>
    <Form />

    <h2>{{ t('format') }}</h2>
    <Format />

    <h2>{{ t('count') }}</h2>
    <Count />

    <h2>{{ t('border') }}</h2>
    <Border />

    <h2>{{ t('align') }}</h2>
    <Align />

    <h2>{{ t('event') }}</h2>
    <Event />

    <h2>{{ t('slot') }}</h2>
    <SlotDemo />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils'
import Basic from './basic.vue'
import Type from './type.vue'
import Status from './status.vue'
import Clear from './clear.vue'
import Form from './form.vue'
import Format from './format.vue'
import Count from './count.vue'
import Border from './border.vue'
import Align from './align.vue'
import Event from './event.vue'
import SlotDemo from './slot.vue'

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    type: '自定义类型',
    status: '禁用和只读',
    clear: '显示清除图标',
    form: '配合表单使用',
    format: '格式化输入内容',
    count: '显示字数统计',
    border: '无边框',
    align: '对齐方式',
    event: '事件演示',
    slot: '插槽演示'
  },
  'en-US': {
    basic: 'Basic Usage',
    type: 'Custom Type',
    status: 'Disabled & Readonly',
    clear: 'Show Clear Icon',
    form: 'Use Form',
    format: 'Format Value',
    count: 'Show Word Limit',
    border: 'No Border',
    align: 'Input Align',
    event: 'Event',
    slot: 'Slot'
  }
})
</script>
