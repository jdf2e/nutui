<template>
  <nut-rate v-model="value" allow-half />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const value = ref(3.5)
</script>
