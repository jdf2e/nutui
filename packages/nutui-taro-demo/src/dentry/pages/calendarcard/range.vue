<template>
  <nut-calendar-card v-model="value" type="range" @change="onChange"></nut-calendar-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref([])
const onChange = (val: Date) => {
  console.log(val)
}
</script>
