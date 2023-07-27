<template>
  <div class="demo full category-demo">
    <div v-if="tabIndex === 0">
      <nut-category :category="category" @change="change" style="height: 500px">
        <nut-category-pane :categoryChild="data.categoryChild1" @change="onChange"></nut-category-pane>
      </nut-category>
    </div>

    <template v-if="tabIndex === 1">
      <nut-category :category="category" @change="changeText">
        <nut-category-pane type="text" :categoryChild="data.categoryChild2" @change="onChange"> </nut-category-pane
      ></nut-category>
    </template>

    <Tabbar safeAreaInsetBottom bottom placeholder v-model="tabIndex">
      <nut-tabbar-item
        v-for="item in List"
        :tab-title="item.title"
        :icon="item.icon"
        :key="item.title"
      ></nut-tabbar-item>
    </Tabbar>
  </div>
</template>

<script setup lang="ts">
import { createComponent } from '@/packages/utils/create';
import { reactive, h, ref, onMounted } from 'vue';
import { Tabbar } from '@/packages/nutui.vue';
import { Home, Category } from '@nutui/icons-vue';
const { translate } = createComponent('cmt');
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
initTranslate();
const category = ref([]);
const data = reactive({
  categoryInfo1: {},
  category: [{}],
  categoryChild1: [{}],
  categoryInfo2: {},
  categoryChild2: [{}]
});
const tabIndex = ref(0);
onMounted(() => {
  setTimeout(() => {
    getData();
  }, 500);
});

const List = [
  {
    title: translate('title1'),
    icon: h(Home)
  },
  {
    title: translate('title2'),
    icon: h(Category)
  }
];

const getData = () => {
  fetch('//storage.360buyimg.com/nutui/3x/categoryData.js')
    .then((response) => response.json())
    .then((res) => {
      const { categoryInfo, categoryChild } = res;
      data.categoryInfo1 = categoryInfo;
      category.value = categoryInfo.category;
      data.categoryChild1 = categoryChild;
      data.categoryInfo2 = categoryInfo;
      data.categoryChild2 = categoryChild;
    })
    .catch((err) => console.log('Oh, error', err));
};

const change = (index: number) => {
  data.categoryChild1 = data?.categoryInfo1?.category[index]?.children;
};

const changeText = (index: number) => {
  data.categoryChild2 = data.categoryInfo2.category[index].children;
};

const onChange = (v: any) => {
  console.log('当前分类数据:', v);
};
</script>
