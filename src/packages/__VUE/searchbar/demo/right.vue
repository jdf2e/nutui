<template>
  <nut-searchbar v-model="val">
    <template #rightout> Search </template>
    <template #rightin>
      <Search2 />
    </template>
  </nut-searchbar>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { Search2 } from '@nutui/icons-vue';
const val = ref('');
</script>
