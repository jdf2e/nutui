<template>
  <nut-cell title="Layers" is-link @click="show1 = true"></nut-cell>
  <nut-popup v-model:visible="show1" :style="{ padding: '30px 50px' }">
    <div @click="show2 = true">点击它</div>
  </nut-popup>
  <nut-popup v-model:visible="show2" :style="{ padding: '30px 50px' }">正文</nut-popup>
</template>
<script setup>
import { ref } from 'vue'
const show1 = ref(false)
const show2 = ref(false)
</script>
