<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('tag') }}</h2>
    <Tag />

    <h2>{{ t('shop') }}</h2>
    <Shop />

    <h2>{{ t('footer') }}</h2>
    <Footer />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Tag from './tag.vue';
import Shop from './shop.vue';
import Footer from './footer.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    tag: '自定义商品标签',
    shop: '自定义店铺介绍',
    footer: '自定义右下角内容'
  },
  'en-US': {
    basic: 'Basic Usage',
    tag: 'Custom prolist',
    shop: 'Custom Content',
    footer: 'Customize bottom right content'
  }
});
</script>
