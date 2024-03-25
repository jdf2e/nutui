<template>
  <nut-swipe>
    <template #left>
      <nut-button shape="square" style="height: 100%" type="success">Btn1</nut-button>
    </template>
    <nut-cell title="Description">
      <template #link>
        <nut-input-number v-model="number" />
      </template>
    </nut-cell>
    <template #right>
      <nut-button shape="square" style="height: 100%" type="danger">Btn2</nut-button>
      <nut-button shape="square" style="height: 100%" type="info">Btn3</nut-button>
    </template>
  </nut-swipe>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const number = ref(0)
</script>
