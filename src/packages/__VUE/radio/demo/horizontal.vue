<template>
  <nut-radio-group v-model="val" direction="horizontal">
    <nut-radio label="1">Option 1</nut-radio>
    <nut-radio label="2">Option 2</nut-radio>
    <nut-radio label="3">Option 3</nut-radio>
  </nut-radio-group>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref('1')
</script>
