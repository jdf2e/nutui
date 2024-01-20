<template>
  <nut-audio ref="audioRef" :url="url" :loop="false" type="none">
    <div class="custom-audio">
      <div><Voice></Voice></div>
      <div>{{ duration }}"</div>
    </div>
  </nut-audio>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { Voice } from '@nutui/icons-vue';
const url = '//storage.360buyimg.com/jdcdkh/SMB/VCG231024564.wav';
const audioRef = ref();
const duration = ref(0);
onMounted(() => {
  setTimeout(() => {
    duration.value = audioRef.value?.second?.toFixed();
  }, 500);
});
</script>
<style>
.custom-audio {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  height: 20px;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.6);
  border-radius: 18px;
}
</style>
