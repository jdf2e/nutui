<template>
  <nut-audio :url="url" loop type="progress">
    <nut-space>
      <nut-audio-operate type="back"></nut-audio-operate>
      <nut-audio-operate type="play"></nut-audio-operate>
      <nut-audio-operate type="forward"></nut-audio-operate>
      <nut-audio-operate type="mute"></nut-audio-operate>
    </nut-space>
  </nut-audio>
</template>
<script setup lang="ts">
const url = '//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav';
</script>
