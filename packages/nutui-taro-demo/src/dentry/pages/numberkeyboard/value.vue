<template>
  <nut-cell title="v-model" :desc="val" @click="show = true" />
  <nut-number-keyboard
    v-model:visible="show"
    v-model="val"
    overlay
    :max-length="6"
    @blur="show = false"
    @close="show = false"
  >
  </nut-number-keyboard>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const val = ref('');
</script>
