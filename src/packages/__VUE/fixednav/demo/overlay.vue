<template>
  <nut-fixed-nav v-model:visible="visible" :overlay="false" :position="{ top: '210px' }" :nav-list="navList" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const visible = ref(false)
const navList = ref([
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
])
</script>
