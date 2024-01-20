<template>
  <nut-switch v-model="val" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref(true);
</script>
