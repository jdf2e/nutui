<template>
  <Demo>
    <h2>{{ t('single') }}</h2>
    <custom-wrapper>
      <Single />
    </custom-wrapper>

    <h2>{{ t('multiple') }}</h2>
    <custom-wrapper>
      <Multiple />
    </custom-wrapper>

    <h2>{{ t('range') }}</h2>
    <custom-wrapper>
      <Range />
    </custom-wrapper>

    <h2>{{ t('week') }}</h2>
    <custom-wrapper>
      <Week />
    </custom-wrapper>

    <h2>{{ t('info') }}</h2>
    <custom-wrapper>
      <Info />
    </custom-wrapper>

    <h2>{{ t('first') }}</h2>
    <custom-wrapper>
      <First />
    </custom-wrapper>

    <h2>{{ t('customRange') }}</h2>
    <custom-wrapper>
      <CustomRange />
    </custom-wrapper>

    <h2>{{ t('disable') }}</h2>
    <custom-wrapper>
      <Disable />
    </custom-wrapper>

    <h2>{{ t('popup') }}</h2>
    <custom-wrapper>
      <Popup />
    </custom-wrapper>

    <h2>{{ t('ref') }}</h2>
    <custom-wrapper>
      <Ref />
    </custom-wrapper>
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Single from './single.vue';
import Multiple from './multiple.vue';
import Range from './range.vue';
import Week from './week.vue';
import Info from './info.vue';
import First from './first.vue';
import CustomRange from './custom-range.vue';
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
