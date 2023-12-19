<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('dot') }}</h2>
    <Dot />

    <h2>{{ t('desc') }}</h2>
    <Desc />

    <h2>{{ t('custom') }}</h2>
    <Custom />

    <h2>{{ t('vertical') }}</h2>
    <Vertical />

    <h2>{{ t('verticalDot') }}</h2>
    <VerticalDot />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Dot from './dot.vue';
import Desc from './desc.vue';
import Custom from './custom.vue';
import Vertical from './vertical.vue';
import VerticalDot from './vertical-dot.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    dot: '点状样式',
    desc: '标题和描述信息',
    custom: '自定义图标',
    vertical: '竖向步骤条',
    verticalDot: '点状步骤和垂直方向'
  },
  'en-US': {
    basic: 'Basic Usage',
    dot: 'Dot Style',
    desc: 'Title and description information',
    custom: 'Custom Icon',
    vertical: 'Vertical step bar',
    verticalDot: 'Point steps and vertical orientation'
  }
});
</script>
