<template>
  <nut-cell>
    <nut-video ref="videoRef" :source="source" :options="options" @play="play" @pause="pause" @playend="playend" />
  </nut-cell>
  <nut-space wrap>
    <nut-button type="success" @click="videoRef.play()">播放</nut-button>
    <nut-button type="warning" @click="videoRef.pause()">暂停</nut-button>
    <nut-button type="danger" @click="videoRef.stop()">结束</nut-button>
    <nut-button type="success" @click="videoRef.muted()">静音</nut-button>
    <nut-button type="danger" @click="videoRef.unmuted()">取消静音</nut-button>
  </nut-space>
</template>

<script setup>
import { ref } from 'vue'
const videoRef = ref()
const source = ref({
  src: 'https://storage.360buyimg.com/nutui/video/video_NutUI.mp4',
  type: 'video/mp4'
})
const options = ref({
  controls: true
})
const play = (el) => {
  console.log('play', el)
}
const pause = (el) => {
  console.log('pause', el)
}
const playend = (el) => {
  console.log('playend', el)
}
</script>
