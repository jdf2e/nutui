<template>
  <nut-pagination v-model="page" :total-items="500" :show-page-size="5">
    <template #prev-text>
      <Left size="10" />
    </template>
    <template #next-text>
      <Right size="10" />
    </template>
    <template #page="{ item }"> {{ item.number == 3 ? 'hot' : item.text }} </template>
  </nut-pagination>
</template>
<script setup lang="ts">
import { Left, Right } from '@nutui/icons-vue-taro';
import { ref } from 'vue';
const page = ref(1);
</script>
