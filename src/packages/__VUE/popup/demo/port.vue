<template>
  <nut-cell title="Teleport" is-link @click="show = true"></nut-cell>
  <Teleport to="#app">
    <nut-popup v-model:visible="show" :style="{ padding: '30px 50px' }"> app </nut-popup>
  </Teleport>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
</script>
