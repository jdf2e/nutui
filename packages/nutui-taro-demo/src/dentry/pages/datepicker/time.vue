<template>
  <nut-date-picker
    v-model="val"
    type="time"
    :min-date="min"
    :max-date="max"
    :three-dimensional="false"
    @confirm="confirm"
  ></nut-date-picker>
</template>
<script setup>
import { ref } from 'vue'
const min = new Date(2020, 1, 1, 10, 40, 0)
const max = new Date(2020, 1, 1, 23, 29, 59)
const val = ref(new Date(2020, 1, 1, 15, 30, 30))
const confirm = ({ selectedValue }) => {
  console.log(selectedValue)
}
</script>
