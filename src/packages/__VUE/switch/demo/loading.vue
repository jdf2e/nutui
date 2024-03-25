<template>
  <nut-switch v-model="val" loading active-color="red" />
</template>
<script setup>
import { ref } from 'vue'
const val = ref(true)
</script>
