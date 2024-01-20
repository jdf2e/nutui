<template>
  <nut-input v-model="val" placeholder="Placeholder" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
