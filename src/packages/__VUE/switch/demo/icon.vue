<template>
  <nut-switch v-model="val" loading>
    <template #icon>
      <Loading name="loading" />
    </template>
  </nut-switch>
</template>
<script setup>
import { ref } from 'vue';
import { Loading } from '@nutui/icons-vue';
const val = ref(true);
</script>
