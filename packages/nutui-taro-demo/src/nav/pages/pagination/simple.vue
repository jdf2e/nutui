<template>
  <nut-pagination v-model="page" :page-count="12" mode="simple" @change="change" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
const page = ref(1);
const change = (value: number) => {
  console.log(value);
};
</script>
