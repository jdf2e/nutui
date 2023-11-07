<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-searchbar v-model="state.searchValue" />

    <h2>设置搜索框形状</h2>
    <nut-searchbar shape="square" />

    <h2>搜索事件监听</h2>
    <nut-searchbar v-model="state.searchValue1" @search="search" />

    <h2>显示搜索 icon</h2>
    <nut-searchbar v-model="state.searchValue2">
      <template #leftin>
        <Search2 />
      </template>
    </nut-searchbar>

    <h2>右侧添加搜索文字</h2>
    <nut-searchbar v-model="state.searchValue3" :confirm-type="state.confirmType">
      <template #rightout> 搜索 </template>
    </nut-searchbar>

    <h2>更改输入框内部及外部的背景样式</h2>
    <nut-searchbar
      v-model="state.searchValue4"
      background="linear-gradient(to right, #9866F0, #EB4D50)"
      input-background="#fff"
    >
    </nut-searchbar>

    <h2>自定义清除按钮 icon</h2>
    <nut-searchbar v-model="state.searchValue6">
      <template #clear-icon>
        <img :src="icon" style="width: 20px; height: 20px" />
      </template>
    </nut-searchbar>

    <h2>显示全部 icon</h2>
    <nut-searchbar v-model="state.searchValue5">
      <template #leftout>
        <Left />
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
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
import { Search2, Left, Photograph, Message } from '@nutui/icons-vue-taro';
const env = Taro.getEnv();

const icon =
  'https://img10.360buyimg.com/imagetools/jfs/t1/170133/30/22902/10546/61833626E32d7ccde/a7c373ba30de9a89.png';

const state = reactive({
  searchValue: '',
  searchValue1: '',
  searchValue2: '',
  searchValue3: '',
  searchValue4: '',
  searchValue5: '',
  searchValue6: '',
  confirmType: 'search'
});

const search = function () {
  console.log('搜索触发');
};
</script>

<style lang="scss" scoped></style>
