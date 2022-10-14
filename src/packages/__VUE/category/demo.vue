<template>
  <div class="demo">
    <h2>{{ translate('title1') }}</h2>
    <nut-category :category="category" @change="change">
      <nut-categorypane :categoryChild="categoryChild" @onChange="onChange"> </nut-categorypane>
    </nut-category>
    <h2>{{ translate('title2') }}</h2>
    <nut-category :category="category" @change="changeText">
      <nut-categorypane type="text" :categoryChild="categoryChild" @onChange="onChange"> </nut-categorypane
    ></nut-category>

    <h2>{{ translate('title3') }}</h2>
    <nut-category
      ><nut-categorypane type="custom" :customCategory="customCategory" @onChange="changeCustom"> </nut-categorypane
    ></nut-category>
  </div>
</template>

<script lang="ts">
import { createComponent } from '@/packages/utils/create';
import { reactive, toRefs, onMounted } from 'vue';
const { createDemo, translate } = createComponent('cmt');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
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
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const data = reactive({
      categoryInfo: {},
      category: [{}],
      categoryChild: [{}],
      customCategory: [{}]
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
          data.categoryInfo = categoryInfo;
          data.category = categoryInfo.category;
          data.categoryChild = categoryChild;
          data.customCategory = customCategory;
        })
        .catch((err) => console.log('Oh, error', err));
    };

    const change = (index: any) => {
      data.categoryChild = [].concat(data?.categoryInfo?.category[index + 1]?.children as any);
    };

    const changeText = (index: any) => {
      data.categoryChild = [].concat(data.categoryInfo.category[index + 1].children as any);
    };

    const changeCustom = (v: any) => {
      console.log('点击分类数据:' + JSON.stringify(v));
    };

    const onChange = (v: any) => {
      console.log('当前分类数据:' + JSON.stringify(v));
    };

    return {
      change,
      onChange,
      changeText,
      changeCustom,
      ...toRefs(data),
      translate
    };
  }
});
</script>

<style lang="scss" scoped>
.demo {
  padding-left: 0 !important;
  padding-right: 0px !important;
}
</style>
