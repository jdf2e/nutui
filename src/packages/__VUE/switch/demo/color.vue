<template>
  <nut-switch v-model="val" active-color="skyblue" />
</template>
<script setup>
import { ref } from 'vue'
const val = ref(true)
</script>
