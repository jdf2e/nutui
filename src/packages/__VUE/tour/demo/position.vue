<template>
  <nut-cell title="点击试试" @click="show = true">
    <template #link>
      <img id="tour3" :src="url" class="tour-demo-img" />
    </template>
  </nut-cell>

  <nut-tour
    v-model="show"
    :steps="steps"
    type="tile"
    bg-color="#f00"
    theme="dark"
    location="bottom-end"
    :offset="[8, 8]"
  ></nut-tour>
</template>

<script setup>
import { ref } from 'vue'
const url = 'https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png'
const show = ref(false)
const steps = ref([
  {
    content: '京东风格的轻量级移动端组件库',
    target: 'tour3',
    popoverOffset: [40, 12],
    arrowOffset: -36
  }
])
</script>

<style>
.tour-demo-img {
  width: 20px;
  height: 20px;
  margin: 0 10px;
}
</style>
