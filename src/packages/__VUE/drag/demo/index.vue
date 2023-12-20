<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2 style="margin-top: 60px">{{ t('direction') }}</h2>
    <Direction />

    <h2 style="margin-top: 60px">{{ t('attract') }}</h2>
    <Attract />

    <h2 style="margin-top: 60px">{{ t('boundary') }}</h2>
    <Boundary />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Direction from './direction.vue';
import Attract from './attract.vue';
import Boundary from './boundary.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    direction: '限制拖拽方向',
    attract: '自动吸边',
    boundary: '限制拖拽边界'
  },
  'en-US': {
    basic: 'Basic Usage',
    direction: 'Limit Direction',
    attract: 'Attract',
    boundary: 'Limit Boundaries'
  }
});
</script>
