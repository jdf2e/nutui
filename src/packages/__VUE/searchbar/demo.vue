<template>
  <div class="demo full">
    <h2>{{ translate('basic1') }}</h2>
    <nut-searchbar v-model="state.searchValue" :label="translate('word1')" :focus-style="{ outline: '1px solid red' }">
    </nut-searchbar>

    <h2>{{ translate('shape') }}</h2>
    <nut-searchbar shape="square"></nut-searchbar>

    <h2>{{ translate('basic2') }}</h2>
    <nut-searchbar v-model="state.searchValue1" @search="search"> </nut-searchbar>

    <h2>{{ translate('basic3') }}</h2>
    <nut-searchbar v-model="state.searchValue2" @click-left-icon="clickLeftIcon">
      <template #leftin>
        <Search2 />
      </template>
    </nut-searchbar>

    <h2>{{ translate('basic4') }}</h2>
    <nut-searchbar v-model="state.searchValue3">
      <template #rightout> {{ translate('word2') }} </template>
    </nut-searchbar>

    <h2>{{ translate('basic5') }}</h2>
    <nut-searchbar
      v-model="state.searchValue4"
      background="linear-gradient(to right, #9866F0, #EB4D50)"
      input-background="#fff"
    >
    </nut-searchbar>

    <h2>{{ translate('basic7') }}</h2>
    <nut-searchbar v-model="state.searchValue6">
      <template #clear-icon>
        <img :src="icon" style="width: 20px; height: 20px" />
      </template>
    </nut-searchbar>

    <h2>{{ translate('basic6') }}</h2>
    <nut-searchbar v-model="state.searchValue5" @click-right-icon="clickRightIcon">
      <template #leftout>
        <Left @click="clickLeft" />
      </template>
      <template #leftin>
        <Search2 />
      </template>
      <template #rightin>
        <Photograph />
      </template>
      <template #rightout>
        <Message />
      </template>
    </nut-searchbar>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { showToast } from '../toast';
import { Search2, Left, Photograph, Message } from '@nutui/icons-vue';
import { useTranslate } from '@/sites/assets/util/useTranslate';
const translate = useTranslate({
  'zh-CN': {
    basic1: '基础用法',
    basic2: '搜索事件监听',
    basic3: '显示搜索 icon',
    basic4: '右侧添加搜索文字',
    basic5: '更改输入框内部及外部的背景样式',
    basic6: '显示全部 icon',
    basic7: '自定义清除图标 icon',
    word1: '标签',
    word2: '搜索',
    title3: '标题3',
    shape: '设置搜索框形状'
  },
  'en-US': {
    basic1: 'Basic Usage',
    basic2: 'Search event listening',
    basic3: 'Display search Icon',
    basic4: 'Add search text to the right',
    basic5: 'Change the background style inside and outside the input box',
    basic6: 'Show all icons',
    basic7: 'custom clear button icon',
    word1: 'label',
    word2: 'search',
    shape: 'Search input shape'
  }
});
const icon =
  'https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png';
const state = reactive({
  searchValue: '',
  searchValue1: '',
  searchValue2: '',
  searchValue3: '',
  searchValue4: '',
  searchValue5: '',
  searchValue6: ''
});

const search = function () {
  showToast.text('搜索触发');
};

const clickLeft = function () {
  showToast.text('点击回退按钮');
};
const clickLeftIcon = function (a: string, b: Event) {
  console.log(a, b);
};
const clickRightIcon = function (a: string, b: Event) {
  console.log(a, b);
};
</script>

<style lang="scss" scoped></style>
