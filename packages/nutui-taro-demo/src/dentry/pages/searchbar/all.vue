<template>
  <nut-searchbar v-model="val">
    <template #leftout>
      <Left />
    </template>
    <template #leftin>
      <Search2 />
    </template>
    <template #rightin>
      <Photograph />
    </template>
    <template #rightout>
      <Message />
    </template>
  </nut-searchbar>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { Search2, Left, Photograph, Message } from '@nutui/icons-vue-taro'
const val = ref('')
</script>
