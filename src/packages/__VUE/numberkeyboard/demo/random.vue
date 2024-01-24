<template>
  <nut-cell title="random" @click="show = true" />
  <nut-number-keyboard v-model:visible="show" random-keys @input="onInput" @blur="show = false" @close="show = false">
  </nut-number-keyboard>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const onInput = (val: string) => {
  console.log(val);
};
</script>
