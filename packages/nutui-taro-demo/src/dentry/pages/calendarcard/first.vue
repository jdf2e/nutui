<template>
  <nut-calendar-card v-model="value" :first-day-of-week="1" @change="onChange"></nut-calendar-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(null)
const onChange = (val: Date) => {
  console.log(val)
}
</script>
