<template>
  <nut-button loading type="info"></nut-button>
  <nut-button loading type="warning">Loading...</nut-button>
  <nut-button :loading="isLoading" type="success" @click="onChange">Click me!</nut-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const isLoading = ref(false);
const onChange = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 3000);
};
</script>
