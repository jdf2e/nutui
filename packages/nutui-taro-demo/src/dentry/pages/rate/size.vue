<template>
  <nut-rate v-model="value" size="35" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(3)
</script>
