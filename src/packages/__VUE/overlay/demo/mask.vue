<template>
  <nut-button type="primary" @click="show = true">style</nut-button>
  <nut-overlay
    v-model:visible="show"
    :overlay-style="{
      backgroundColor: 'rgba(0, 0, 0, .2)'
    }"
  ></nut-overlay>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>
