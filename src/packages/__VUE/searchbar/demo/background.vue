<template>
  <nut-searchbar
    v-model="val"
    background="linear-gradient(to right, #9866F0, #EB4D50)"
    input-background="#fff"
  ></nut-searchbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const val = ref('')
</script>
