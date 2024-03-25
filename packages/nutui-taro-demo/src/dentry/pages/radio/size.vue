<template>
  <nut-radio-group v-model="val1" direction="horizontal">
    <nut-radio label="1" shape="button">Option 1</nut-radio>
    <nut-radio label="2" shape="button">Option 2</nut-radio>
    <nut-radio label="3" shape="button">Option 3</nut-radio>
  </nut-radio-group>
  <nut-radio-group v-model="val2" direction="horizontal">
    <nut-radio label="1" shape="button" size="small">Option 1</nut-radio>
    <nut-radio label="2" shape="button" size="small">Option 2</nut-radio>
    <nut-radio label="3" shape="button" size="small">Option 3</nut-radio>
  </nut-radio-group>
  <nut-radio-group v-model="val3" direction="horizontal">
    <nut-radio label="1" shape="button" size="mini">Option 1</nut-radio>
    <nut-radio label="2" shape="button" size="mini">Option 2</nut-radio>
    <nut-radio label="3" shape="button" size="mini">Option 3</nut-radio>
  </nut-radio-group>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val1 = ref('1')
const val2 = ref('1')
const val3 = ref('1')
</script>
