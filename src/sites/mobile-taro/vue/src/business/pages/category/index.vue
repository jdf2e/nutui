<template>
  <div class="demo full" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>经典分类模式</h2>
    <nut-category :category="category" @change="change">
      <nut-category-pane :categoryChild="categoryChild" @onChange="onChange"> </nut-category-pane>
    </nut-category>

    <h2>只显示文字</h2>
    <nut-category :category="category" @change="changeText">
      <nut-category-pane type="text" :categoryChild="categoryChild" @onChange="onChange"> </nut-category-pane
    ></nut-category>

    <h2>自定义</h2>
    <nut-category
      ><nut-category-pane type="custom" :customCategory="customCategory" @onChange="changeCustom"> </nut-category-pane
    ></nut-category>
  </div>
</template>

<script lang="ts">
import { categoryInfo, categoryChild, customCategory } from './data';
import { reactive, toRefs, onMounted } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';

export default {
  components: { Header },
  setup() {
    const env = Taro.getEnv();
    const data = reactive({
      category: [{}],
      categoryChild: [{}],
      customCategory: [{}]
    });

    onMounted(() => {
      setTimeout(() => {
        data.category = categoryInfo.category;
        data.categoryChild = categoryChild;
        data.customCategory = customCategory;
      }, 500);
    });

    const change = (index: any) => {
      data.categoryChild = [].concat(categoryInfo.category[index + 1].children as any);
    };

    const changeText = (index: any) => {
      data.categoryChild = [].concat(categoryInfo.category[index + 1].children as any);
    };

    const changeCustom = () => {
      console.log('点击分类数据');
    };

    const onChange = () => {
      console.log('当前分类数据');
    };

    return {
      change,
      onChange,
      changeText,
      changeCustom,
      ...toRefs(data),
      env
    };
  }
};
</script>

<style lang="scss" scoped>
.demo {
  padding-left: 0 !important;
  padding-right: 0px !important;
}
</style>
