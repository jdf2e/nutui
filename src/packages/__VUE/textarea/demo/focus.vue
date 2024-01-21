<template>
  <nut-textarea v-model="val" autofocus />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
