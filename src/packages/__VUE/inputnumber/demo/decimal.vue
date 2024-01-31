<template>
  <nut-input-number v-model="val" step="0.1" decimal-places="1" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const val = ref(1);
</script>
