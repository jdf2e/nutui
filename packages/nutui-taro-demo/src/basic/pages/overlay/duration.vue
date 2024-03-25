<template>
  <nut-button type="primary" @click="show = true">duration</nut-button>
  <nut-overlay v-model:visible="show" :duration="2.5"></nut-overlay>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>
