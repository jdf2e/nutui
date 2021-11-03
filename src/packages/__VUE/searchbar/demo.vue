<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-searchbar v-model="searchValue"> </nut-searchbar>

    <h2>搜索事件监听</h2>
    <nut-searchbar v-model="searchValue1" @search="search"> </nut-searchbar>

    <h2>显示搜索 icon</h2>
    <nut-searchbar v-model="searchValue2" :has-left-in="true">
      <template v-slot:leftin>
        <nut-icon size="14" name="search2"></nut-icon>
      </template>
    </nut-searchbar>

    <h2>右侧添加搜索文字</h2>
    <nut-searchbar v-model="searchValue3" :has-right-out="true">
      <template v-slot:rightout> 搜索 </template>
    </nut-searchbar>

    <h2>显示全部 icon</h2>
    <nut-searchbar
      v-model="searchValue4"
      :has-left-in="true"
      :has-left-out="true"
      :has-right-in="true"
      :has-right-out="true"
    >
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
import { createComponent } from '../../utils/create';
import { Toast } from '@/packages/nutui.vue';
const { createDemo } = createComponent('searchbar');
export default createDemo({
  props: {},
  setup() {
    const state = reactive({
      searchValue: '',
      searchValue1: '',
      searchValue2: '',
      searchValue3: '',
      searchValue4: ''
    });

    const search = function (e: any) {
      Toast.text('搜索触发');
    };

    const clickLeft = function () {
      Toast.text('点击回退按钮');
    };

    return {
      clickLeft,
      search,
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped></style>
