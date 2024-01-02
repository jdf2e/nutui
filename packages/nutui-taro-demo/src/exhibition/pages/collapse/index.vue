<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('data') }}</h2>
    <Data />

    <h2>{{ t('accordion') }}</h2>
    <Accordion />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('extra') }}</h2>
    <Extra />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Data from './data.vue';
import Accordion from './accordion.vue';
import Custom from './custom.vue';
import Disabled from './disabled.vue';
import Extra from './extra.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    data: '绑定数据与事件',
    accordion: '手风琴',
    custom: '自定义折叠图标',
    disabled: '禁用状态',
    extra: '设置固定内容（不折叠）'
  },
  'en-US': {
    basic: 'Basic Usage',
    data: 'v-model & onChange',
    accordion: 'Accordion',
    custom: 'Custom Icon',
    disabled: 'Disabled CollapseItem',
    extra: 'Set fixed content (do not collapse)'
  }
});
</script>
