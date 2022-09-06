<template>
  <div class="demo full">
    <h2>基础用法</h2>
    <nut-searchbar v-model="searchValue" :focus-style="{ border: '1px solid red' }"> </nut-searchbar>

    <h2>搜索事件监听</h2>
    <nut-searchbar v-model="searchValue1" @search="search"> </nut-searchbar>

    <h2>显示搜索 icon</h2>
    <nut-searchbar v-model="searchValue2">
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
    </nut-searchbar>

    <h2>右侧添加搜索文字</h2>
    <nut-searchbar v-model="searchValue3" :confirm-type="confirmType">
      <template v-slot:rightout> 搜索 </template>
    </nut-searchbar>

    <h2>更改输入框内部及外部的背景样式</h2>
    <nut-searchbar
      v-model="searchValue4"
      background="linear-gradient(to right, #9866F0, #EB4D50)"
      input-background="#fff"
    >
    </nut-searchbar>

    <h2>自定义清除按钮 icon</h2>
    <nut-searchbar v-model="searchValue6" :clear-icon="icon"> </nut-searchbar>

    <h2>显示全部 icon</h2>
    <nut-searchbar v-model="searchValue5">
      <template v-slot:leftout>
        <nut-icon @click="clickLeft" size="20" name="left"></nut-icon>
      </template>
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
      <template v-slot:rightin>
        <nut-icon size="20" name="photograph"></nut-icon>
      </template>
      <template v-slot:rightout>
        <nut-icon size="20" name="message"></nut-icon>
      </template>
    </nut-searchbar>
  </div>
</template>

<script lang="ts">
import { toRefs, reactive } from 'vue';
export default {
  props: {},
  setup() {
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

    const clickLeft = function () {
      console.log('点击回退按钮');
    };

    return {
      icon,
      clickLeft,
      search,
      ...toRefs(state)
    };
  }
};
</script>

<style lang="scss" scoped></style>
