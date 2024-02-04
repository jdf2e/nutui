<template>
  <Demo class="full custom-demo">
    <nut-tabs v-model="value" :animated-time="0">
      <nut-tab-pane :title="t('basic')" pane-key="1">
        <Basic />
      </nut-tab-pane>
      <nut-tab-pane :title="t('distance')" pane-key="2">
        <Distance />
      </nut-tab-pane>
      <nut-tab-pane :title="t('custom')" pane-key="3">
        <Custom />
      </nut-tab-pane>
    </nut-tabs>
  </Demo>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useTranslate } from '@/sites/utils';
import Basic from './basic.vue';
import Distance from './distance.vue';
import Custom from './custom.vue';
const value = ref('1');
const t = useTranslate({
  'zh-CN': {
    basic: '基础用法',
    distance: '设置出现位置',
    custom: '自定义样式'
  },
  'en-US': {
    basic: 'Basic Usage',
    distance: 'Distance',
    custom: 'Custom Style'
  }
});
</script>

<style lang="scss" scoped>
.custom-demo {
  :deep(.nut-tabs) {
    .nut-tabs__content {
      height: calc(100vh - 57px - 46px);
    }
  }
}
</style>
