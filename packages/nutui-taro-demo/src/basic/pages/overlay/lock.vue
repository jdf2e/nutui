<template>
  <nut-button type="primary" @click="show = true">lock-scroll</nut-button>
  <nut-overlay v-model:visible="show" :lock-scroll="true"></nut-overlay>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>
