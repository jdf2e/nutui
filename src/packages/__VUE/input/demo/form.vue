<template>
  <nut-form>
    <nut-form-item label="Label" label-align="center">
      <nut-input v-model="val" />
    </nut-form-item>
  </nut-form>
</template>
<script setup>
import { ref } from 'vue';
const val = ref('');
</script>
