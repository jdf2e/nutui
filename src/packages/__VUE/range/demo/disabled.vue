<template>
  <nut-range v-model="val" disabled @change="change"></nut-range>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const val = ref(40);
const change = (value: number) => {
  console.log(value);
};
</script>
