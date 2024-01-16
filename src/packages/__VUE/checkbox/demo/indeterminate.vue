<template>
  <nut-cell>
    <nut-checkbox v-model="val" indeterminate> Indeterminate </nut-checkbox>
  </nut-cell>
</template>
<script setup>
import { ref } from 'vue';
const val = ref(false);
</script>
