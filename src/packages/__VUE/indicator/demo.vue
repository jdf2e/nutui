<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-indicator :size="3" :current="3">step1</nut-indicator>
    </nut-cell>
    <nut-cell>
      <nut-row>
        <nut-col :span="12">
          <nut-button size="small" type="primary">{{ translate('button') }}</nut-button>
        </nut-col>
        <nut-col :span="12">
          <nut-indicator block align="right" :size="6" :current="5">step1</nut-indicator>
        </nut-col>
      </nut-row>
    </nut-cell>
    <h2>{{ translate('title') }}</h2>
    <nut-cell>
      <nut-indicator block algin="center" :size="6" :current="5">step1</nut-indicator>
    </nut-cell>
    <nut-cell>
      <nut-indicator block align="left" :size="6" :current="1">step1</nut-indicator>
    </nut-cell>
    <nut-cell>
      <nut-indicator block align="right" :size="6" :current="5">step1</nut-indicator>
    </nut-cell>
    <h2>{{ translate('title2') }}</h2>
    <nut-cell>
      <nut-indicator :fill-zero="false" :size="6" :current="5">step1</nut-indicator>
    </nut-cell>
  </div>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    button: '主要按钮',
    title: 'block用法',
    title2: '不补0'
  },
  'en-US': {
    basic: 'Basic Usage',
    button: 'Main Button',
    title: 'Block usage',
    title2: 'Do not make up 0'
  }
});
</script>
