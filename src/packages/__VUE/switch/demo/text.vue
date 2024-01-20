<template>
  <nut-switch v-model="val" active-text="开" inactive-text="关" />
</template>
<script setup>
import { ref } from 'vue';
const val = ref(true);
</script>
