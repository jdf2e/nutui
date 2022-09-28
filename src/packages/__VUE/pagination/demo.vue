<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-pagination v-model="currentPage" :total-items="25" :items-per-page="5" @change="pageChange" />
    <h2>{{ translate('simpleMode') }}</h2>
    <nut-pagination v-model="currentPage1" :page-count="12" mode="simple" @change="pageChange" />
    <h2>{{ translate('showEllipses') }}</h2>
    <nut-pagination v-model="currentPage2" :total-items="125" :show-page-size="3" force-ellipses @change="pageChange" />
    <h2>{{ translate('customButton') }}</h2>
    <nut-pagination v-model="currentPage3" :total-items="500" :show-page-size="5" @change="pageChange">
      <template #prev-text>
        <nut-icon name="left" size="10px" />
      </template>
      <template #next-text>
        <nut-icon name="right" size="10px" />
      </template>
      <template #page="{ item }">
        {{ item.number == 3 ? 'hot' : item.text }}
      </template>
    </nut-pagination>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('pagination');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法',
      simpleMode: '简单模式',
      showEllipses: '显示省略号',
      customButton: '自定义按钮'
    },
    'en-US': {
      basic: 'Basic Usage',
      simpleMode: 'Simple Mode',
      showEllipses: 'Show ellipses',
      customButton: 'Custom Button'
    }
  });
export default createDemo({
  setup() {
    initTranslate();
    const state = reactive({
      currentPage: 1,
      currentPage1: 1,
      currentPage2: 1,
      currentPage3: 1
    });
    const pageChange = (value: number) => {
      console.log('page change', value);
    };

    return {
      ...toRefs(state),
      pageChange,
      translate
    };
  }
});
</script>
