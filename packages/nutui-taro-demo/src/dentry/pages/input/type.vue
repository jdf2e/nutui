<template>
  <nut-input v-model="val1" placeholder="Text" />
  <nut-input v-model="val2" placeholder="Password" type="password" />
  <nut-input v-model="val3" placeholder="Digit" type="digit" />
  <nut-input v-model="val4" placeholder="Number" type="number" />
</template>
<script setup>
import { ref } from 'vue';
const val1 = ref('');
const val2 = ref('');
const val3 = ref('');
const val4 = ref('');
</script>
