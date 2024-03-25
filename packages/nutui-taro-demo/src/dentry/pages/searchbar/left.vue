<template>
  <nut-searchbar v-model="val">
    <template #leftout> label </template>
    <template #leftin>
      <Search2 />
    </template>
  </nut-searchbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Search2 } from '@nutui/icons-vue-taro'
const val = ref('')
</script>
