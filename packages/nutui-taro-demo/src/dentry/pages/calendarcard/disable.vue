<template>
  <nut-calendar-card v-model="value" :disable-day="disableDay" @change="onChange"></nut-calendar-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null);
const onChange = (val: Date) => {
  console.log(val);
};
const disableDay = (day: any) => {
  const d = new Date(`${day.year}-${day.month}-${day.date}`).getDay();
  return d === 1 || d === 3;
};
</script>
