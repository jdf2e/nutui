<template>
  <nut-textarea v-model="val" :rows="3" autosize />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
