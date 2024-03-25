<template>
  <nut-swiper :auto-play="3000" @change="onChange">
    <nut-swiper-item v-for="(item, index) in list" :key="index" style="height: 150px">
      <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
    </nut-swiper-item>
    <template #page>
      <div class="swiper-pagination"> {{ val }}/4 </div>
    </template>
  </nut-swiper>
</template>
<script setup>
import { ref } from 'vue'
const list = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
])
const val = ref(1)
const onChange = (index) => {
  val.value = index + 1
}
</script>
<style>
.swiper-pagination {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 46px;
  height: 22px;
  background: rgba(0, 0, 0, 0.33);
  border-radius: 22px;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
</style>
