<template>
  <Demo class="demo-button">
    <h2>{{ t('type') }}</h2>
    <Type />

    <h2>{{ t('plain') }}</h2>
    <Plain />

    <h2>{{ t('disabled') }}</h2>
    <Disabled />

    <h2>{{ t('shape') }}</h2>
    <Shape />

    <h2>{{ t('loading') }}</h2>
    <Loading />

    <h2>{{ t('icon') }}</h2>
    <Icon />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('block') }}</h2>
    <Block />

    <h2>{{ t('color') }}</h2>
    <Color />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Type from './type.vue';
import Plain from './plain.vue';
import Disabled from './disabled.vue';
import Shape from './shape.vue';
import Loading from './loading.vue';
import Icon from './icon.vue';
import Size from './size.vue';
import Block from './block.vue';
import Color from './color.vue';
const t = useTranslate({
  'zh-CN': {
    type: '按钮类型',
    plain: '朴素按钮',
    disabled: '禁用状态',
    shape: '按钮形状',
    loading: '加载状态',
    icon: '图标按钮',
    size: '按钮尺寸',
    block: '块级元素',
    color: '自定义颜色'
  },
  'en-US': {
    type: 'Type',
    plain: 'Plain',
    disabled: 'Disabled',
    shape: 'Shape',
    loading: 'Loading',
    icon: 'Icon',
    size: 'Size',
    block: 'Block',
    color: 'Custom Color'
  }
});
</script>

<style lang="scss">
.demo-button {
  .nut-button {
    margin-right: 5px;
    margin-bottom: 5px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
