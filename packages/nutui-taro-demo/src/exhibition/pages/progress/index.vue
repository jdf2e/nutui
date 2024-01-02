<template>
  <Demo class="bg-w demo-progress">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('text') }}</h2>
    <Text />

    <h2>{{ t('inside') }}</h2>
    <Inside />

    <h2>{{ t('content') }}</h2>
    <Content />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('status') }}</h2>
    <Status />

    <h2>{{ t('change') }}</h2>
    <Change />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Color from './color.vue';
import Text from './text.vue';
import Inside from './inside.vue';
import Content from './content.vue';
import Size from './size.vue';
import Status from './status.vue';
import Change from './change.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    color: '设置颜色高度',
    text: '设置百分比不显示',
    inside: '设置百分比内显',
    content: '设置百分比内显自定义内容',
    size: '自定义尺寸',
    status: '设置状态显示',
    change: '动态改变'
  },
  'en-US': {
    basic: 'Basic Usage',
    color: 'Custom Style',
    text: 'Don’t Show Percentage',
    inside: 'Percentage displayed inside',
    content: 'Custom Content',
    size: 'Custom Size',
    status: 'Status Display',
    change: 'Dynamic Change'
  }
});
</script>

<style lang="scss">
.demo-progress {
  .nut-button {
    margin-right: 10px;
  }
  .nut-progress {
    margin-bottom: 15px;
  }
}
</style>
