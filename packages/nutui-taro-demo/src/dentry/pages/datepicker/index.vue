<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('pop') }}</h2>
    <Pop />

    <h2>{{ t('yearMonth') }}</h2>
    <YearMonth />

    <h2>{{ t('monthDay') }}</h2>
    <MonthDay />

    <h2>{{ t('dateTime') }}</h2>
    <DateTime />

    <h2>{{ t('time') }}</h2>
    <Time />

    <h2>{{ t('hourMinute') }}</h2>
    <HourMinute />

    <h2>{{ t('format') }}</h2>
    <Format />

    <h2>{{ t('step') }}</h2>
    <Step />

    <h2>{{ t('filter') }}</h2>
    <Filter />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Pop from './pop.vue';
import YearMonth from './year-month.vue';
import MonthDay from './month-day.vue';
import DateTime from './date-time.vue';
import Time from './time.vue';
import HourMinute from './hour-minute.vue';
import Format from './format.vue';
import Step from './step.vue';
import Filter from './filter.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '选择日期',
    pop: '搭配 Popup 使用',
    yearMonth: '选择年月',
    monthDay: '选择月日',
    dateTime: '选择年月日时分',
    time: '选择时分秒',
    hourMinute: '选择时分',
    format: '格式化选项',
    step: '分钟数递增步长设置',
    filter: '过滤选项'
  },
  'en-US': {
    basic: 'Choose Date',
    pop: 'With Popup',
    yearMonth: 'Choose Year-Month',
    monthDay: 'Choose Month-Day',
    dateTime: 'Choose DateTime',
    time: 'Choose Time',
    hourMinute: 'Choose Hour-Minute',
    format: 'Option Formatter',
    step: 'Option Steps',
    filter: 'Option Filter'
  }
});
</script>
