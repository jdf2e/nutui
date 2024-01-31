<template>
  <nut-cell title="Switch">
    <template #link>
      <nut-switch v-model="checked" />
    </template>
  </nut-cell>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const checked = ref(true);
</script>
