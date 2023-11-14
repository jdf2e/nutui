<template>
  <Demo>
    <nut-fixed-nav
      v-model:visible="visible"
      active-text="基础用法"
      :position="{ top: '70px' }"
      :nav-list="navList"
      @selected="selected"
    />
    <nut-fixed-nav
      v-model:visible="visible1"
      type="left"
      :position="{ top: '140px' }"
      active-text="左侧收起"
      un-active-text="左侧展开"
      :nav-list="navList"
      @selected="selected"
    />
    <nut-fixed-nav
      v-model:visible="visible2"
      :position="{ top: '210px' }"
      :overlay="false"
      :nav-list="navList"
      @selected="selected"
    />

    <nut-fixed-nav v-model:visible="myActive" :position="{ top: '280px' }" type="left" @selected="selected">
      <template #list>
        <ul class="nut-fixed-nav__list">
          <li class="nut-fixed-nav__list-item">1</li>
          <li class="nut-fixed-nav__list-item">2</li>
          <li class="nut-fixed-nav__list-item">3</li>
          <li class="nut-fixed-nav__list-item">4</li>
          <li class="nut-fixed-nav__list-item">5</li>
        </ul>
      </template>
      <template #btn>
        <Retweet color="#fff" />
        <span class="text">{{ myActive ? '自定义开' : '自定义关' }}</span>
      </template>
    </nut-fixed-nav>
  </Demo>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { Retweet } from '@nutui/icons-vue-taro';
const visible = ref(false);
const visible1 = ref(false);
const visible2 = ref(false);
const myActive = ref(false);

onMounted(() => {
  setTimeout(() => {
    visible2.value = true;
  }, 1000);
});

const navList = reactive([
  {
    id: 1,
    text: '首页',
    icon: 'https://img11.360buyimg.com/imagetools/jfs/t1/117646/2/11112/1297/5ef83e95E81d77f05/daf8e3b1c81e3c98.png'
  },
  {
    id: 2,
    text: '分类',
    icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/119490/8/9568/1798/5ef83e95E968c69a6/dd029326f7d5042e.png'
  },
  {
    id: 3,
    text: '购物车',
    num: 2,
    icon: 'https://img14.360buyimg.com/imagetools/jfs/t1/130725/4/3157/1704/5ef83e95Eb976644f/b36c6cfc1cc1a99d.png'
  },
  {
    id: 4,
    text: '我的',
    icon: 'https://img12.360buyimg.com/imagetools/jfs/t1/147573/29/1603/1721/5ef83e94E1393a678/5ddf1695ec989373.png'
  }
]);
const selected = (res: any) => {
  console.log(res);
};
</script>
