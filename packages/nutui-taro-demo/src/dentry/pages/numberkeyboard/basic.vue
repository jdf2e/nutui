<template>
  <nut-cell title="default" @click="show = true" />
  <nut-number-keyboard
    v-model:visible="show"
    overlay
    @input="onInput"
    @delete="onDelete"
    @blur="show = false"
    @close="show = false"
  >
  </nut-number-keyboard>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const onInput = (val: string) => {
  console.log(val);
};
const onDelete = () => {
  console.log('onDelete');
};
</script>
