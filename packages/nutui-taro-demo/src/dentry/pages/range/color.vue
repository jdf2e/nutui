<template>
  <nut-range v-model="val" inactive-color="red" button-color="blue" active-color="skyblue" @change="change"></nut-range>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref(40)
const change = (value: number) => {
  console.log(value)
}
</script>
