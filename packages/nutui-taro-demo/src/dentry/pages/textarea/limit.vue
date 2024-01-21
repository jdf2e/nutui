<template>
  <nut-textarea v-model="val" limit-show :max-length="20" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
