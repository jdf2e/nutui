<template>
  <Demo class="calendar-demo">
    <h2>{{ t('single') }}</h2>
    <custom-wrapper>
      <Single />
    </custom-wrapper>

    <h2>{{ t('range') }}</h2>
    <custom-wrapper>
      <Range />
    </custom-wrapper>

    <h2>{{ t('multiple') }}</h2>
    <custom-wrapper>
      <Multiple />
    </custom-wrapper>

    <h2>{{ t('week') }}</h2>
    <custom-wrapper>
      <Week />
    </custom-wrapper>

    <h2>{{ t('disabled') }}</h2>
    <custom-wrapper>
      <Disabled />
    </custom-wrapper>

    <h2>{{ t('singleQuick') }}</h2>
    <custom-wrapper>
      <SingleQuick />
    </custom-wrapper>

    <h2>{{ t('rangeQuick') }}</h2>
    <custom-wrapper>
      <RangeQuick />
    </custom-wrapper>

    <h2>{{ t('custom') }}</h2>
    <custom-wrapper>
      <Custom />
    </custom-wrapper>

    <h2>{{ t('tiled') }}</h2>
    <custom-wrapper>
      <Tiled />
    </custom-wrapper>
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Single from './single.vue';
import Range from './range.vue';
import Multiple from './multiple.vue';
import Week from './week.vue';
import Disabled from './disabled.vue';
import SingleQuick from './single-quick.vue';
import RangeQuick from './range-quick.vue';
import Custom from './custom.vue';
import Tiled from './tiled.vue';

const t = useTranslate({
  'zh-CN': {
    single: '选择单个日期',
    range: '选择日期区间',
    multiple: '选择多个日期',
    week: '选择周',
    disabled: '自定义禁用日期',
    singleQuick: '快捷选择-单个日期',
    rangeQuick: '快捷选择-日期范围',
    custom: '自定义日历',
    tiled: '平铺展示'
  },
  'en-US': {
    single: 'Select Single Date',
    range: 'Select Date Range',
    multiple: 'Select Multiple Date',
    week: 'Select Week',
    disabled: 'Disabled Date',
    singleQuick: 'Quick Select Single',
    rangeQuick: 'Quick Select Range',
    custom: 'Custom Calendar',
    tiled: 'Tiled Display'
  }
});
</script>

<style lang="scss">
.calendar-demo {
  .nut-cell__value {
    flex: initial !important;
  }
}
</style>
