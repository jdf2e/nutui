<template>
  <nut-cell @click="show = true">{{ value || 'null' }}</nut-cell>
  <nut-popup v-model:visible="show" position="bottom">
    <nut-calendar-card v-model="value" @change="onChange"></nut-calendar-card>
    <nut-button block type="primary" @click="show = false">确认</nut-button>
  </nut-popup>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref(false);
const value = ref(null);
const onChange = (val: Date) => {
  console.log(val);
};
</script>
