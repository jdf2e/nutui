<template>
  <nut-button type="primary" @click="show = true">open</nut-button>
  <nut-overlay v-model:visible="show"></nut-overlay>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
</script>
