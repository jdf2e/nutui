<template>
  <Demo class="badge-demo">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('max') }}</h2>
    <Max />

    <h2>{{ t('color') }}</h2>
    <Color />

    <h2>{{ t('icon') }}</h2>
    <IconDemo />

    <h2>{{ t('position') }}</h2>
    <Position />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Max from './max.vue';
import Color from './color.vue';
import IconDemo from './icon.vue';
import Position from './position.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    max: '最大值',
    color: '自定义颜色',
    icon: '自定义徽标内容',
    position: '自定义位置'
  },
  'en-US': {
    basic: 'Basic Usage',
    max: 'Max',
    color: 'Custom Color',
    icon: 'Custom Content',
    position: 'Custom Position '
  }
});
</script>

<style lang="scss">
.badge-demo {
  .nut-badge {
    margin-right: 40px;
  }
}
</style>
