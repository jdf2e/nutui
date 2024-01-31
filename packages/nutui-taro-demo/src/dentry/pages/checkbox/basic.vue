<template>
  <nut-cell>
    <nut-checkbox v-model="val1"> Right </nut-checkbox>
    <nut-checkbox v-model="val2" text-position="left"> Left </nut-checkbox>
  </nut-cell>
</template>
<script setup>
import { ref } from 'vue';
const val1 = ref(true);
const val2 = ref(false);
</script>
