<template>
  <nut-input v-model="val1" input-align="left" />
  <nut-input v-model="val2" input-align="center" />
  <nut-input v-model="val3" input-align="right" />
</template>
<script setup>
import { ref } from 'vue'
const val1 = ref('Left')
const val2 = ref('Center')
const val3 = ref('Right')
</script>
