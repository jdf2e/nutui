<template>
  <Demo>
    <h2>{{ t('start') }}</h2>
    <Start />

    <h2>{{ t('end') }}</h2>
    <End />

    <h2>{{ t('middle') }}</h2>
    <Middle />

    <h2>{{ t('row') }}</h2>
    <Row />

    <h2>{{ t('expand') }}</h2>
    <Expand />
  </Demo>
</template>
<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Start from './start.vue';
import End from './end.vue';
import Middle from './middle.vue';
import Row from './row.vue';
import Expand from './expand.vue';

const t = useTranslate({
  'zh-CN': {
    start: '头部省略',
    end: '尾部省略',
    middle: '中间省略',
    row: '多行省略',
    expand: '展开收起'
  },
  'en-US': {
    start: 'Start',
    end: 'End',
    middle: 'Middle',
    row: 'Multi-line',
    expand: 'Expand & Collapse'
  }
});
</script>
