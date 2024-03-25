<template>
  <nut-calendar-card v-model="value" @change="onChange"></nut-calendar-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(new Date('2023-01-01'))
const onChange = (val: Date) => {
  console.log(val)
}
</script>
