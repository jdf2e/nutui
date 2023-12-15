<template>
  <nut-radio-group v-model="val">
    <nut-radio label="1" shape="button">Option 1</nut-radio>
    <nut-radio label="2" shape="button">Option 2</nut-radio>
    <nut-radio label="3" shape="button">Option 3</nut-radio>
  </nut-radio-group>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const val = ref('1');
</script>
