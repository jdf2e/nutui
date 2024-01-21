<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('loading') }}</h2>
    <Loading />

    <h2>{{ t('event') }}</h2>
    <Event />

    <h2>{{ t('async') }}</h2>
    <Async />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('text') }}</h2>
    <Text />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Disabled from './disabled.vue';
import Loading from './loading.vue';
import Event from './event.vue';
import Async from './async.vue';
import Color from './color.vue';
import Text from './text.vue';
import IconDemo from './icon.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    disabled: '禁用状态',
    loading: '加载状态',
    event: 'Change 事件',
    async: '异步控制',
    color: '自定义颜色',
    text: '支持文字',
    icon: '自定义加载图标'
  },
  'en-US': {
    basic: 'Basic Usage',
    disabled: 'Disabled',
    loading: 'Loading',
    event: 'Change Event',
    async: 'Async Control',
    color: 'Custom Color',
    text: 'Support Text',
    icon: 'Custom Loading Icon'
  }
});
</script>
