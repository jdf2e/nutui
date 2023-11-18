<template>
  <div class="demo">
    <h2>{{ translate('title1') }}</h2>
    <nut-category :category="data.category" @change="change">
      <nut-category-pane :category-child="data.categoryChild1" @on-change="onChange"> </nut-category-pane>
    </nut-category>
    <h2>{{ translate('title2') }}</h2>
    <nut-category :category="data.category" @change="changeText">
      <nut-category-pane type="text" :category-child="data.categoryChild2" @on-change="onChange"> </nut-category-pane
    ></nut-category>

    <h2>{{ translate('title3') }}</h2>
    <nut-category
      ><nut-category-pane type="custom" :custom-category="data.customCategory" @on-change="changeCustom">
      </nut-category-pane
    ></nut-category>
  </div>
</template>

<script setup lang="ts">
import { createComponent } from '@/packages/utils/create';
import { reactive, onMounted } from 'vue';
const { translate } = createComponent('cmt');
import { useTranslate } from '@/sites/assets/util/useTranslate';
useTranslate({
  'zh-CN': {
    title1: '经典分类模式',
    title2: '只显示文字',
    title3: '自定义分类'
  },
  'en-US': {
    title1: 'Classic Classification Mode',
    title2: 'Show Text Only',
    title3: 'Custom taxonomy'
  }
});
const data = reactive({
  categoryInfo1: {} as any,
  category: [{}],
  categoryChild1: [{}],
  customCategory: [{}],
  categoryInfo2: {} as any,
  categoryChild2: [{}]
});

onMounted(() => {
  setTimeout(() => {
    getData();
  }, 500);
});

const getData = () => {
  fetch('//storage.360buyimg.com/nutui/3x/categoryData.js')
    .then((response) => response.json())
    .then((res) => {
      const { categoryInfo, categoryChild, customCategory } = res;
      data.categoryInfo1 = categoryInfo;
      data.category = categoryInfo.category;
      data.categoryChild1 = categoryChild;
      data.customCategory = customCategory;
      data.categoryInfo2 = categoryInfo;
      data.categoryChild2 = categoryChild;
    })
    .catch((err) => console.log('Oh, error', err));
};

const change = (index: any) => {
  data.categoryChild1 = [].concat(data?.categoryInfo1?.category[index]?.children as any);
};

const changeText = (index: any) => {
  data.categoryChild2 = [].concat(data.categoryInfo2.category[index].children as any);
};

const changeCustom = (v: any) => {
  console.log('点击分类数据:' + JSON.stringify(v));
};

const onChange = (v: any) => {
  console.log('当前分类数据:' + JSON.stringify(v));
};
</script>

<style lang="scss" scoped>
.demo {
  padding-left: 0 !important;
  padding-right: 0px !important;
}
</style>
