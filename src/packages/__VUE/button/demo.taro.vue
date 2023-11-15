<template>
  <Demo class="demo demo-button">
    <h2>{{ translate('type') }}</h2>
    <Type />

    <h2>{{ translate('plain') }}</h2>
    <Plain />

    <h2>{{ translate('disabled') }}</h2>
    <Disabled />

    <h2>{{ translate('shape') }}</h2>
    <Shape />

    <h2>{{ translate('loading') }}</h2>
    <Loading />

    <h2>{{ translate('icon') }}</h2>
    <Icon />

    <h2>{{ translate('size') }}</h2>
    <Size />

    <h2>{{ translate('block') }}</h2>
    <Block />

    <h2>{{ translate('color') }}</h2>
    <Color />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/assets/util/useTranslate';
import Type from './demo/type.vue';
import Plain from './demo/plain.vue';
import Disabled from './demo/disabled.vue';
import Shape from './demo/shape.vue';
import Loading from './demo/loading.vue';
import Icon from './demo/icon.taro.vue';
import Size from './demo/size.vue';
import Block from './demo/block.vue';
import Color from './demo/color.vue';
const translate = useTranslate<['type', 'plain', 'disabled', 'shape', 'loading', 'icon', 'size', 'block', 'color']>({
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
