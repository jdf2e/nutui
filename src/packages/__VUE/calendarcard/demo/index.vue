<template>
  <Demo>
    <h2>{{ t('single') }}</h2>
    <Single />

    <h2>{{ t('multiple') }}</h2>
    <Multiple />

    <h2>{{ t('range') }}</h2>
    <Range />

    <h2>{{ t('week') }}</h2>
    <Week />

    <h2>{{ t('info') }}</h2>
    <Info />

    <h2>{{ t('first') }}</h2>
    <First />

    <h2>{{ t('customRange') }}</h2>
    <CustomRange />

    <h2>{{ t('disable') }}</h2>
    <Disable />

    <h2>{{ t('popup') }}</h2>
    <Popup />

    <h2>{{ t('ref') }}</h2>
    <Ref />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Single from './single.vue';
import Multiple from './multiple.vue';
import Range from './range.vue';
import Week from './week.vue';
import Info from './info.vue';
import First from './first.vue';
import CustomRange from './customRange.vue';
import Disable from './disable.vue';
import Popup from './popup.vue';
import Ref from './ref.vue';

const t = useTranslate({
  'zh-CN': {
    single: '选择单个日期',
    multiple: '选择多个日期',
    range: '选择范围',
    week: '选择周',
    info: '自定义日期信息（插槽）',
    first: '自定义周起始日',
    customRange: '自定义选择范围',
    disable: '自定义禁止选择日期',
    popup: '搭配 Popup 使用',
    ref: '使用 Ref'
  },
  'en-US': {
    single: 'Select a single date',
    multiple: 'Select multiple dates',
    range: 'Select a range',
    week: 'Select a week',
    info: 'Custom day info(slot)',
    first: 'Custom week start day',
    customRange: 'Custom selection range',
    disable: 'Custom prohibition date selection',
    popup: 'Use with Popup',
    ref: 'Use Ref'
  }
});
</script>
