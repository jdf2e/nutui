<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('col') }}</h2>
    <Col />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />

    <h2>{{ t('up') }}</h2>
    <Up />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Custom from './custom.vue';
import Col from './col.vue';
import Color from './color.vue';
import IconDemo from './icon.vue';
import Up from './up.vue';
import Disabled from './disabled.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    custom: '自定义菜单内容',
    col: '一行两列',
    color: '自定义选中态颜色',
    icon: '自定义图标',
    up: '向上展开',
    disabled: '禁用菜单'
  },
  'en-US': {
    basic: 'Basic Usage',
    custom: 'Custom Menu Content',
    col: 'Two Cols In One Line',
    color: 'Custom Active Color',
    icon: 'Custom Icons',
    up: 'Expand Direction',
    disabled: 'Disable Menu'
  }
});
</script>
