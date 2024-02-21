<template>
  <nut-cell>
    <nut-video :source="source" :options="options" />
  </nut-cell>
</template>

<script setup>
import { ref } from 'vue';
const source = ref({
  src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
  type: 'video/mp4'
});
const options = ref({
  controls: true,
  poster:
    'https://img12.360buyimg.com/ling/s345x208_jfs/t1/168105/33/8417/54825/603df06dEfcddc4cb/21f9f5d0a1b3dad4.jpg.webp'
});
</script>
