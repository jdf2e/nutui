<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-sticky top="57">
      <nut-button type="primary">{{ translate('content') }}</nut-button>
    </nut-sticky>
    <h2>{{ translate('title1') }}</h2>
    <nut-sticky top="120">
      <nut-button type="primary" style="margin-left: 50px">{{ translate('title1') }} 120px</nut-button>
    </nut-sticky>
    <h2>{{ translate('title2') }}</h2>
    <div ref="container" style="width: 100%; height: 150px; background-color: #fff">
      <nut-sticky top="57" :container="container">
        <nut-button type="info" style="margin-left: 100px">{{ translate('title2') }}</nut-button>
      </nut-sticky>
    </div>
    <h2>{{ translate('title3') }}</h2>
    <div style="height: 100vh"></div>
    <nut-sticky bottom="50" position="bottom">
      <nut-button type="primary">{{ translate('title3') }} 50px</nut-button>
    </nut-sticky>
    <div style="height: 100vh"></div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import NutSticky from './index.vue';
import NutButton from '../button/index.vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    title1: '吸顶距离',
    title2: '指定容器',
    title3: '吸底距离',
    content: '吸顶按钮'
  },
  'en-US': {
    basic: 'Basic Usage',
    title1: 'Ceiling distance',
    title2: 'Specify container',
    title3: 'Suction distance',
    content: 'Ceiling button'
  }
});
const container = ref<HTMLElement>();
</script>
