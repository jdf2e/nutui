<template>
  <div class="demo demo-list">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell>
      <nut-list :list-data="state.count" @scroll-bottom="handleScroll">
        <template #default="{ index }">
          <div class="list-item">
            {{ index }}
          </div>
        </template>
      </nut-list>
    </nut-cell>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { translate } = createComponent('list');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '基本用法'
    },
    'en-US': {
      basic: 'Basic Usage'
    }
  });
initTranslate();
const state = reactive({
  count: new Array(100).fill(0)
});

const handleScroll = () => {
  let arr = new Array(100).fill(0);
  const len = state.count.length;
  state.count = state.count.concat(arr.map((item: number, index: number) => len + index + 1));
};

onMounted(() => {
  state.count = state.count.map((item: number, index: number) => index + 1);
});
</script>
<style lang="scss">
.demo-list {
  .nut-cell {
    height: 100%;
  }

  .nut-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
    height: 50px;
    background-color: #f4a8b6;
    border-radius: 10px;
  }
}
</style>
