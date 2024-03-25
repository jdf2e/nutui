<template>
  <Demo class="full category-demo">
    <h2>经典分类模式</h2>
    <nut-category :category="data.category" @change="change">
      <nut-category-pane :category-child="data.categoryChild1" @on-change="onChange"> </nut-category-pane>
    </nut-category>

    <h2>只显示文字</h2>
    <nut-category :category="data.category" @change="changeText">
      <nut-category-pane type="text" :category-child="data.categoryChild2" @on-change="onChange"> </nut-category-pane
    ></nut-category>

    <h2>自定义分类</h2>
    <nut-category
      ><nut-category-pane type="custom" :custom-category="customCategory" @on-change="changeCustom"> </nut-category-pane
    ></nut-category>
  </Demo>
</template>

<script setup lang="ts">
import { categoryInfo, categoryChild, customCategory } from './data'
import { reactive, onMounted } from 'vue'

const data = reactive({
  category: [{}],
  categoryChild1: [{}],
  customCategory: [{}],
  categoryChild2: [{}]
})

onMounted(() => {
  setTimeout(() => {
    data.category = categoryInfo.category
    data.categoryChild1 = categoryChild
    data.customCategory = customCategory
    data.categoryChild2 = categoryChild
  }, 500)
})

const change = (index: any) => {
  data.categoryChild1 = [].concat(data.category[index]?.children as any)
}

const changeText = (index: any) => {
  data.categoryChild2 = [].concat(data.category[index]?.children as any)
}

const changeCustom = () => {
  console.log('点击分类数据')
}

const onChange = () => {
  console.log('当前分类数据')
}
</script>

<style lang="scss" scoped>
.category-demo {
  padding-left: 0 !important;
  padding-right: 0px !important;
}
</style>
