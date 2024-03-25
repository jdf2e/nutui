<template>
  <nut-calendar-card v-model="value" :start-date="startDate" :end-date="endDate" @change="onChange"></nut-calendar-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(null)
const startDate = new Date(Date.now() - 90 * 24 * 3600 * 1000)
const endDate = new Date(Date.now() + 90 * 24 * 3600 * 1000)
const onChange = (val: Date) => {
  console.log(val)
}
</script>
