<template>
  <nut-searchbar v-model="val" @search="search"></nut-searchbar>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const val = ref('');
const search = (text: string) => {
  console.log('search', text);
};
</script>
