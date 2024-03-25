<template>
  <nut-searchbar v-model="val" :focus-style="{ outline: '1px solid red' }"></nut-searchbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref('')
</script>
