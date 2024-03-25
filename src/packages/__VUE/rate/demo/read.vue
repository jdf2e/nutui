<template>
  <nut-rate v-model="value" readonly />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(3)
</script>
