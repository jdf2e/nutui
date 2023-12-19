<template>
  <Demo>
    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('decimal') }}</h2>
    <Decimal />

    <h2>{{ t('through') }}</h2>
    <Through />

    <h2>{{ t('symbol') }}</h2>
    <Symbol />

    <h2>{{ t('position') }}</h2>
    <Position />

    <h2>{{ t('title5') }}</h2>
    <Thousands />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '../../../utils';
import Size from './size.vue';
import Decimal from './decimal.vue';
import Through from './through.vue';
import Symbol from './symbol.vue';
import Position from './position.vue';
import Thousands from './thousands.vue';

const t = useTranslate({
  'zh-CN': {
    size: '尺寸',
    decimal: '不保留小数',
    through: '划线价',
    symbol: '货币符号',
    position: '货币符号位置',
    title5: '千位分隔'
  },
  'en-US': {
    size: 'Size',
    decimal: 'No decimals',
    through: 'Strike Through',
    symbol: 'Currency symbol',
    position: 'Currency symbol position',
    title5: 'Separated by thousands'
  }
});
</script>
