<template>
  <div class="demo full bg-w">
    <h2>{{ translate('basic') }}</h2>
    <nut-divider />
    <h2>{{ translate('withText') }}</h2>
    <nut-divider>{{ translate('text') }}</nut-divider>
    <h2>{{ translate('contentPosition') }}</h2>
    <nut-divider content-position="left">{{ translate('text') }}</nut-divider>
    <nut-divider content-position="right">{{ translate('text') }}</nut-divider>
    <h2>{{ translate('dashed') }}</h2>
    <nut-divider dashed>{{ translate('text') }}</nut-divider>
    <h2>{{ translate('customStyle') }}</h2>
    <nut-divider :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }">{{
      translate('text')
    }}</nut-divider>
    <h2>{{ translate('verticalDivider') }}</h2>
    <div :style="{ fontSize: '14px', marginLeft: '27px', color: '#909ca4' }">
      {{ translate('text') }}
      <nut-divider direction="vertical" />
      <a href="#" :style="{ color: '#1989fa' }">{{ translate('link') }}</a>
      <nut-divider direction="vertical" />
      <a href="#" :style="{ color: '#1989fa' }">{{ translate('link') }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('divider');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      withText: '展示文本',
      contentPosition: '内容位置',
      dashed: '虚线',
      customStyle: '自定义样式',
      verticalDivider: '垂直分割线',
      text: '文本',
      link: '链接'
    },
    'en-US': {
      basic: 'Basic Usage',
      withText: 'With Text',
      contentPosition: 'Content Position',
      dashed: 'Dashed',
      customStyle: 'Custom Style',
      verticalDivider: 'Vertical Divider',
      text: 'Text',
      link: 'Link'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    return { translate };
  }
});
</script>
