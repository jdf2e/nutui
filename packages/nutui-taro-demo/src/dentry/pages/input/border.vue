<template>
  <nut-input v-model="val1" :border="false" />
  <nut-input v-model="val2" :border="false" />
</template>
<script setup>
import { ref } from 'vue'
const val1 = ref('12345')
const val2 = ref('12345')
</script>
