<template>
  <nut-cell title="Top" is-link @click="showTop = true"></nut-cell>
  <nut-popup v-model:visible="showTop" position="top" :style="{ height: '20%' }"></nut-popup>

  <nut-cell title="Bottom" is-link @click="showBottom = true"></nut-cell>
  <nut-popup v-model:visible="showBottom" position="bottom" :style="{ height: '20%' }"></nut-popup>

  <nut-cell title="Left" is-link @click="showLeft = true"></nut-cell>
  <nut-popup v-model:visible="showLeft" position="left" :style="{ width: '20%', height: '100%' }"></nut-popup>

  <nut-cell title="Right" is-link @click="showRight = true"></nut-cell>
  <nut-popup v-model:visible="showRight" position="right" :style="{ width: '20%', height: '100%' }"></nut-popup>
</template>
<script setup>
import { ref } from 'vue'
const showTop = ref(false)
const showBottom = ref(false)
const showLeft = ref(false)
const showRight = ref(false)
</script>
