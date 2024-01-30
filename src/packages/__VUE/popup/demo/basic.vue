<template>
  <nut-cell title="Center" is-link @click="show = true"></nut-cell>
  <nut-popup v-model:visible="show" :style="{ padding: '30px 50px' }"> 正文 </nut-popup>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
</script>
