<template>
  <nut-calendar-card v-model="value" @change="onChange">
    <template #top="{ day }">
      {{ day.date === 8 ? '☺' : '' }}
    </template>
    <template #default="{ day }">
      {{ day.date <= 9 ? `0${day.date}` : day.date }}
    </template>
    <template #bottom="{ day }">
      {{ day.date === 8 ? '节日' : '' }}
    </template>
  </nut-calendar-card>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const value = ref(null);
const onChange = (val: Date) => {
  console.log(val);
};
</script>
