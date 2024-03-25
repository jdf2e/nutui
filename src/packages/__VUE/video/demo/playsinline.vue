<template>
  <nut-cell>
    <nut-video :source="source" :options="options" />
  </nut-cell>
</template>

<script setup>
import { ref } from 'vue'
const source = ref({
  src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
  type: 'video/mp4'
})
const options = ref({
  playsinline: true,
  controls: true
})
</script>
