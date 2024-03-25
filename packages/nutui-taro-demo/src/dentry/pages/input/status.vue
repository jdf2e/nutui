<template>
  <nut-input v-model="val1" disabled />
  <nut-input v-model="val2" readonly />
</template>
<script setup>
import { ref } from 'vue'
const val1 = ref('Disabled')
const val2 = ref('Readonly')
</script>
