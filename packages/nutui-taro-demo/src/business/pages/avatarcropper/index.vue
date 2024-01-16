<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('shape') }}</h2>
    <Shape />

    <h2>{{ t('toolbar') }}</h2>
    <Toolbar />
  </Demo>
</template>

<script lang="ts" setup>
import { useTranslate } from '../../../utils';
import Basic from './basic.vue';
import Shape from './shape.vue';
import Toolbar from './toolbar.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    shape: '形状',
    toolbar: '裁剪区域 toolbar 插槽'
  },
  'en-US': {
    basic: 'Basic Usage',
    shape: 'Shape',
    toolbar: 'Toolbar Slot'
  }
});
</script>
