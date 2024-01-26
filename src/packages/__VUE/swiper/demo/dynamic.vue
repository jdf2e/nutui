<template>
  <nut-swiper :auto-play="3000">
    <nut-swiper-item v-for="(item, index) in list" :key="index" style="height: 150px">
      <img :src="item" alt="" style="height: 100%; width: 100%" draggable="false" />
    </nut-swiper-item>
  </nut-swiper>
</template>
<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
const list = ref([
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
]);

onMounted(() => {
  setTimeout(() => {
    list.value = list.value.slice(1);
  }, 3000);
});
</script>
