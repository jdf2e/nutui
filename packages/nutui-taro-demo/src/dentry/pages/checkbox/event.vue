<template>
  <nut-cell>
    <nut-checkbox v-model="val" @change="change"> Change </nut-checkbox>
  </nut-cell>
</template>
<script setup>
import { ref } from 'vue';
const val = ref(false);
const change = (state) => {
  console.log(state);
};
</script>
