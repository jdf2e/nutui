<template>
  <nut-pagination v-model="page" :total-items="25" :items-per-page="5" @change="change" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const page = ref(1)
const change = (value: number) => {
  console.log(value)
}
</script>
