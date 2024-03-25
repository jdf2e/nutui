<template>
  <nut-progress :percentage="val" />
  <nut-button type="default" @click="reduce"> -10 </nut-button>
  <nut-button type="primary" @click="add"> + 10 </nut-button>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref(0)
const add = () => {
  if (val.value >= 100) {
    return false
  }
  val.value += 10
}
const reduce = () => {
  if (val.value <= 0) {
    return false
  }
  val.value -= 10
}
</script>
