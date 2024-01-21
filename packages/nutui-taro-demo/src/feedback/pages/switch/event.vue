<template>
  <nut-switch v-model="val" @change="change" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref(true);
const change = (value) => {
  console.log(value);
};
</script>
