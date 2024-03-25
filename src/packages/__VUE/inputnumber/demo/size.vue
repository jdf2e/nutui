<template>
  <nut-input-number v-model="val" :button-size="30" :input-width="50" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref(1)
</script>
