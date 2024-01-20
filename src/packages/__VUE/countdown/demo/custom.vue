<template>
  <nut-countdown v-model="time" :end-time="end">
    <nut-space>
      <div class="countdown-item">{{ time.d }}</div>
      <div>:</div>
      <div class="countdown-item">{{ time.h }}</div>
      <div>:</div>
      <div class="countdown-item">{{ time.m }}</div>
      <div>:</div>
      <div class="countdown-item">{{ time.s }}</div>
    </nut-space>
  </nut-countdown>
</template>

<script setup>
import { ref } from 'vue';
const end = ref(Date.now() + 1000 * 60 * 60 * 24 * 12);
const time = ref({
  d: '1',
  h: '00',
  m: '00',
  s: '00'
});
</script>

<style>
.countdown-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  background: #e8220e;
  color: #fff;
  font-size: 14px;
  border-radius: 6px;
}
</style>
