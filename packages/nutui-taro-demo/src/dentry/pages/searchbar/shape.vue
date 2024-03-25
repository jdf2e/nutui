<template>
  <nut-searchbar v-model="val" shape="square"></nut-searchbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref('')
</script>
