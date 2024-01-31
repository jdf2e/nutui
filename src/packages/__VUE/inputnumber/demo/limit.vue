<template>
  <nut-input-number v-model="val" :min="10" :max="20" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const val = ref(10);
</script>
