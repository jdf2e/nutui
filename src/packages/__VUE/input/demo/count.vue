<template>
  <nut-input v-model="val" show-word-limit :max-length="50" />
</template>
<script setup>
import { ref } from 'vue'
const val = ref('12345')
</script>
