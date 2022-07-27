<template>
  <div class="demo full">
    <h2>{{ translate('basic') }}</h2>
    <nut-textarea v-model="value" />
    <h2>{{ translate('title') }}</h2>
    <nut-textarea v-model="value2" limit-show max-length="20" />
    <h2>{{ translate('title1') }}</h2>
    <nut-textarea v-model="value3" :rows="1" autosize />
    <h2>{{ translate('title2') }}</h2>
    <nut-textarea readonly :model-value="translate('desc1')" />
    <h2>{{ translate('title3') }}</h2>
    <nut-textarea disabled :model-value="translate('desc2')" limit-show max-length="20" />
    <h2>{{ translate('title4') }}</h2>
    <nut-textarea autofocus v-model="value4" />
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('textarea');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      title: '显示字数统计',
      title1: '高度自定义，拉伸',
      title2: '只读',
      title3: '禁用',
      title4: '自动获取焦点',
      desc1: 'textarea只读状态',
      desc2: 'textarea禁用状态'
    },
    'en-US': {
      basic: 'Basic Usage',
      title: 'Display word count',
      title1: 'Height customization, stretching',
      title2: 'read-only',
      title3: 'Disable',
      title4: 'Get focus automatically',
      desc1: 'Textarea read only status',
      desc2: 'Textarea disabled'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const value = ref('');
    const value2 = ref('');
    const value3 = ref('');
    const value4 = ref('');

    return {
      value,
      value2,
      value3,
      value4,
      translate
    };
  }
});
</script>

<style lang="scss" scoped></style>
