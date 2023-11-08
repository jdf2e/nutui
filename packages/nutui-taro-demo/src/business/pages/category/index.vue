<template>
  <div class="demo full category-demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>经典分类模式</h2>
    <nut-category :category="data.category" @change="change">
      <nut-category-pane :categoryChild="data.categoryChild1" @onChange="onChange"> </nut-category-pane>
    </nut-category>

    <h2>只显示文字</h2>
    <nut-category :category="data.category" @change="changeText">
      <nut-category-pane type="text" :categoryChild="data.categoryChild2" @onChange="onChange"> </nut-category-pane
    ></nut-category>

    <h2>自定义分类</h2>
    <nut-category
      ><nut-category-pane type="custom" :customCategory="customCategory" @onChange="changeCustom"> </nut-category-pane
    ></nut-category>
  </div>
</template>

<script setup lang="ts">
import { categoryInfo, categoryChild, customCategory } from './data';
import { reactive, onMounted } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';

const env = Taro.getEnv();
const data = reactive({
  category: [{}],
  categoryChild1: [{}],
  customCategory: [{}],
  categoryChild2: [{}]
});

onMounted(() => {
  setTimeout(() => {
    data.category = categoryInfo.category;
    data.categoryChild1 = categoryChild;
    data.customCategory = customCategory;
    data.categoryChild2 = categoryChild;
  }, 500);
});

const change = (index: any) => {
  data.categoryChild1 = [].concat(data.category[index]?.children as any);
};

const changeText = (index: any) => {
  data.categoryChild2 = [].concat(data.category[index]?.children as any);
};

const changeCustom = () => {
  console.log('点击分类数据');
};

const onChange = () => {
  console.log('当前分类数据');
};
</script>

<style lang="scss" scoped>
.category-demo {
  padding-left: 0 !important;
  padding-right: 0px !important;
}
</style>
