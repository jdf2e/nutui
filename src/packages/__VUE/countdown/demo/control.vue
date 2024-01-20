<template>
  <nut-space align="center">
    <nut-countdown :end-time="end" :paused="paused" @paused="onPaused" @restart="onRestart" />
    <nut-button size="small" @click="toggle">{{ paused ? 'start' : 'stop' }}</nut-button>
  </nut-space>
</template>
<script setup>
import { ref } from 'vue';
const paused = ref(false);
const end = ref(Date.now() + 60 * 1000);

const toggle = () => {
  paused.value = !paused.value;
};
const onPaused = (v) => {
  console.log('paused: ', v);
};
const onRestart = (v) => {
  console.log('restart: ', v);
};
</script>
