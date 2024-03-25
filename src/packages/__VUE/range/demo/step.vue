<template>
  <nut-range v-model="val" :step="5" @change="change"></nut-range>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref(20)
const change = (value: number) => {
  console.log(value)
}
</script>
