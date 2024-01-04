<template>
  <Demo class="full">
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('smile') }}</h2>
    <Smile />

    <h2>{{ t('leftAlign') }}</h2>
    <LeftAlign />

    <h2>{{ t('autoHeight') }}</h2>
    <AutoHeight />

    <h2>{{ t('swipeable') }}</h2>
    <Swipeable />

    <h2>{{ t('scroll') }}</h2>
    <Scroll />

    <h2>{{ t('vertical') }}</h2>
    <Vertical />

    <h2>{{ t('verticalSmile') }}</h2>
    <VerticalSmile />

    <h2>{{ t('size') }}</h2>
    <Size />

    <h2>{{ t('custom') }}</h2>
    <Custom />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Smile from './smile.vue';
import AutoHeight from './auto-height.vue';
import Swipeable from './swipeable.vue';
import Scroll from './scroll.vue';
import Vertical from './vertical.vue';
import VerticalSmile from './vertical-smile.vue';
import Size from './size.vue';
import Custom from './custom.vue';
import LeftAlign from './left-align.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    smile: '微笑曲线',
    leftAlign: 'Title 左对齐',
    autoHeight: '自动高度',
    swipeable: '手势滑动切换',
    scroll: '标题滚动（上下布局）',
    vertical: '标题滚动（左右布局）',
    verticalSmile: '左右布局-微笑曲线',
    size: '字体尺寸',
    custom: '自定义标签栏'
  },
  'en-US': {
    basic: 'Basic Usage',
    smile: 'Smile Type',
    leftAlign: 'Title left align',
    autoHeight: 'Auto Height',
    swipeable: 'Swipeable',
    scroll: 'Title Scroll (horizontal)',
    vertical: 'Title Scroll (vertical)',
    verticalSmile: 'Vertical + Smile Type',
    size: 'FontSize',
    custom: 'Custom Tab'
  }
});
</script>
