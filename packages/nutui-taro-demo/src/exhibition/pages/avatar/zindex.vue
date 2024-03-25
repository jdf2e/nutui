<template>
  <nut-avatar-group max-count="3" z-index="right" max-content="...">
    <nut-avatar><img :src="url" /></nut-avatar>
    <nut-avatar><My /></nut-avatar>
    <nut-avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">小明</nut-avatar>
    <nut-avatar><My /></nut-avatar>
  </nut-avatar-group>
</template>
<script setup lang="ts">
import { My } from '@nutui/icons-vue-taro'
const url = 'https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png'
</script>
