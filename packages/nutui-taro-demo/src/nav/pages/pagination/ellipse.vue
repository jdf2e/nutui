<template>
  <nut-pagination v-model="page" :total-items="125" :show-page-size="3" force-ellipses />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const page = ref(1);
</script>
