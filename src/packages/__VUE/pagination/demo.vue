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
        <Left width="10px" height="10px" />
      </template>
      <template #next-text>
        <Right width="10px" height="10px" />
      </template>
      <template #page="{ item }">
        {{ item.number == 3 ? 'hot' : item.text }}
      </template>
    </nut-pagination>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTranslate } from '@/sites/utils';
import { Left, Right } from '@nutui/icons-vue';
const translate = useTranslate({
  'zh-CN': {
    basic: '基础用法',
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
const currentPage = ref(1);
const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
const pageChange = (value: number) => {
  console.log(value);
};
</script>
