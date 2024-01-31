<template>
  <Demo class="range-demo">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('range') }}</h2>
    <Range />

    <h2>{{ t('limit') }}</h2>
    <Limit />

    <h2>{{ t('step') }}</h2>
    <Step />

    <h2>{{ t('hiddenRange') }}</h2>
    <HiddenRange />

    <h2>{{ t('hiddenTag') }}</h2>
    <HiddenTag />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('button') }}</h2>
    <Button />

    <h2>{{ t('vertical') }}</h2>
    <Vertical />

    <h2>{{ t('marks') }}</h2>
    <Marks />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Range from './range.vue';
import Limit from './limit.vue';
import Step from './step.vue';
import HiddenRange from './hidden-range.vue';
import HiddenTag from './hidden-tag.vue';
import Disabled from './disabled.vue';
import Color from './color.vue';
import Button from './button.vue';
import Vertical from './vertical.vue';
import Marks from './marks.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    range: '双滑块',
    limit: '指定范围',
    step: '设置步长',
    hiddenRange: '隐藏范围',
    hiddenTag: '隐藏标签',
    disabled: '禁用',
    color: '自定义样式',
    button: '自定义按钮',
    vertical: '垂直方向',
    marks: '刻度标记'
  },
  'en-US': {
    basic: 'Basic Usage',
    range: 'Dual thumb',
    limit: 'Range',
    step: 'Step Size',
    hiddenRange: 'Hidden Range',
    hiddenTag: 'Hidden Tag',
    disabled: 'Disabled',
    color: 'Custom Style',
    button: 'Custom Button',
    vertical: 'Vertical',
    marks: 'Marks'
  }
});
</script>
<style>
.range-demo h2 {
  margin-bottom: 50px !important;
}
</style>
