<template>
  <nut-date-picker
    v-model="val"
    type="datetime"
    :min-date="min"
    :max-date="max"
    :three-dimensional="false"
    @confirm="confirm"
  ></nut-date-picker>
</template>
<script setup>
import { ref } from 'vue';
const min = new Date(2020, 0, 1, 10, 40);
const max = new Date(2025, 10, 1, 23, 29);
const val = ref(new Date(2022, 4, 10));
const confirm = ({ selectedValue }) => {
  console.log(selectedValue);
};
</script>
