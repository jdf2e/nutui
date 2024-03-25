<template>
  <nut-textarea v-model="val" autosize />
</template>
<script setup>
import { ref } from 'vue'
const val = ref('')
</script>
