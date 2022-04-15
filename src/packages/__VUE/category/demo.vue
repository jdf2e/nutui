<template>
  <div class="demo">
    <h2>经典分类模式</h2>
    <nut-category :category="category" @change="change">
      <nut-categorypane :categoryChild="categoryChild" @onChange="onChange"> </nut-categorypane>
    </nut-category>

    <h2>只显示文字</h2>
    <nut-category :category="category" @change="changeText">
      <nut-categorypane type="text" :categoryChild="categoryChild" @onChange="onChange"> </nut-categorypane
    ></nut-category>

    <h2>自定义</h2>
    <nut-category
      ><nut-categorypane type="custom" :customCategory="customCategory" @onChange="changeCustom"> </nut-categorypane
    ></nut-category>
  </div>
</template>

<script lang="ts">
import { createComponent } from '../../utils/create';
import { categoryInfo, categoryChild, customCategory } from './data';
const { createDemo } = createComponent('cmt');
import { reactive, ref, toRefs, onMounted } from 'vue';

export default createDemo({
  props: {},
  setup() {
    const data = reactive({
      category: [{}],
      categoryChild: [{}],
      customCategory: [{}]
    });

    onMounted(() => {
      setTimeout(() => {
        // getData();
        data.category = categoryInfo.category;
        data.categoryChild = categoryChild;
        data.customCategory = customCategory;
      }, 500);
    });

    const getData = () => {
      fetch('//storage.360buyimg.com/nutui/3x/categoryData1.js')
        .then((response) => response.json())
        .then((res) => {
          // console.log('res', res)
          const { categoryInfo, categoryChild, customCategory } = res;
          data.category = categoryInfo.category;
          data.categoryChild = categoryChild;
          data.customCategory = customCategory;
        }) //执行结果是 resolve就调用then方法
        .catch((err) => console.log('Oh, error', err)); //执行结果是 reject就调用catch方法
    };

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
      ...toRefs(data)
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
