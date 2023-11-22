<template>
  <div class="demo full">
    <h2>{{ translate('title1') }}</h2>
    <nut-cell>
      <nut-space>
        <nut-button type="primary">{{ translate('btn') }}</nut-button>
        <nut-button type="primary">{{ translate('btn') }}</nut-button>
        <nut-button type="primary">{{ translate('btn') }}</nut-button>
        <nut-button type="primary">{{ translate('btn') }}</nut-button>
      </nut-space>
    </nut-cell>
    <h2>{{ translate('title2') }}</h2>
    <nut-cell>
      <nut-space direction="vertical" fill>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
      </nut-space>
    </nut-cell>
    <h2>{{ translate('title3') }}</h2>
    <nut-cell>
      <nut-space :gutter="20">
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
      </nut-space>
    </nut-cell>
    <nut-cell :style="{ '--nut-space-gap': '30px' }">
      <nut-space>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
      </nut-space>
    </nut-cell>
    <h2>{{ translate('title4') }}</h2>
    <nut-cell>
      <nut-space wrap>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
        <nut-button type="primary" block>{{ translate('btn') }}</nut-button>
      </nut-space>
    </nut-cell>
  </div>
</template>

<script lang="ts" setup>
import { useTranslate } from '@/sites/utils';

const translate = useTranslate({
  'zh-CN': {
    title1: '基础用法：默认间距为 8px',
    title2: '垂直排列',
    title3: '自定义间距',
    title4: '自动换行',
    btn: '按钮'
  },
  'en-US': {
    title1: 'Grammar and Usage：The default spacing is 8px',
    title2: 'Vertical Alignment',
    title3: 'Custom spacing',
    title4: 'word wrap',
    btn: 'Button'
  }
});
</script>
