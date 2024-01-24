<template>
  <Demo class="demo-tabbar">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('byName') }}</h2>
    <ByName />

    <h2>{{ t('customIcon') }}</h2>
    <CustomIcon />

    <h2>{{ t('customCheck') }}</h2>
    <CustomCheck />

    <h2>{{ t('showBadge') }}</h2>
    <ShowBadge />

    <h2>{{ t('customColor') }}</h2>
    <CustomColor />

    <h2>{{ t('customQuantity') }}</h2>
    <CustomQuantity />

    <h2>{{ t('fixedBottom') }}</h2>
    <FixedBottom />
  </Demo>
</template>

<script lang="ts" setup>
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import ByName from './by-name.vue';
import CustomIcon from './custom-icon.vue';
import CustomCheck from './custom-check.vue';
import ShowBadge from './show-badge.vue';
import CustomColor from './custom-color.vue';
import CustomQuantity from './custom-quantity.vue';
import FixedBottom from './fixed-bottom.vue';
const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    byName: '通过名称匹配',
    customIcon: '自定义图标',
    customCheck: '自定义选中',
    showBadge: '徽标提示',
    customColor: '自定义颜色',
    customQuantity: '自定义数量',
    fixedBottom: '固定底部'
  },
  'en-US': {
    basic: 'Basic Usage',
    byName: 'Match by name',
    customIcon: 'Custom Icon',
    customCheck: 'Custom Check',
    showBadge: 'Show Badge',
    customColor: 'Custom Color',
    customQuantity: 'Custom Quantity',
    fixedBottom: 'Fixed Bottom'
  }
});
</script>
