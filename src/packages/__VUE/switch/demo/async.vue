<template>
  <nut-switch :model-value="val" @change="change" />
</template>
<script setup>
import { ref } from 'vue'
const val = ref(true)
const change = (value) => {
  setTimeout(() => {
    val.value = value
  }, 2000)
}
</script>
