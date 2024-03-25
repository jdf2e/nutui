<template>
  <nut-date-picker
    v-model="val"
    type="year-month"
    :min-date="min"
    :max-date="max"
    :three-dimensional="false"
    @confirm="confirm"
  ></nut-date-picker>
</template>
<script setup>
import { ref } from 'vue'
const min = new Date(2012, 0)
const max = new Date(2024, 10)
const val = ref(new Date(2020, 2))
const confirm = ({ selectedValue }) => {
  console.log(selectedValue)
}
</script>
