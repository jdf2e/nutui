<template>
  <nut-range v-model="val" range @change="change"></nut-range>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const val = ref([20, 80]);
const change = (value: number[]) => {
  console.log(value);
};
</script>
