<template>
  <Demo>
    <h2>{{ t('basic') }}</h2>
    <Basic />

    <h2>{{ t('customAttributeName') }}</h2>
    <CustomAttributeName />

    <h2>{{ t('asyncLoading') }}</h2>
    <AsyncLoading />

    <h2>{{ t('asyncLoadingPartial') }}</h2>
    <AsyncLoadingPartial />

    <h2>{{ t('automaticTransfer') }}</h2>
    <AutomaticTransfer />
  </Demo>
</template>

<script setup lang="ts">
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import CustomAttributeName from './custom-attribute-name.vue';
import AsyncLoading from './async-loading.vue';
import AsyncLoadingPartial from './async-loading-partial.vue';
import AutomaticTransfer from './automatic-transfer.vue';

const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    customAttributeName: '自定义属性名称',
    asyncLoading: '动态加载',
    asyncLoadingPartial: '部分数据动态加载',
    automaticTransfer: '自动转换'
  },
  'en-US': {
    basic: 'Basic Usage',
    customAttributeName: 'Custom attribute name',
    asyncLoading: 'Async loading',
    asyncLoadingPartial: 'Async loading of partial data',
    automaticTransfer: 'Automatic data conversion'
  }
});
</script>
