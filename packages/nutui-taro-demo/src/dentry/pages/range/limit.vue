<template>
  <nut-range v-model="val" :max="10" :min="-10" @change="change" />
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref(0)
const change = (value: number) => {
  console.log(value)
}
</script>
