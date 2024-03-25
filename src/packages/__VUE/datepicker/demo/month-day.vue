<template>
  <nut-date-picker
    v-model="val"
    type="month-day"
    :min-date="min"
    :max-date="max"
    :three-dimensional="false"
    @confirm="confirm"
  ></nut-date-picker>
</template>
<script setup>
import { ref } from 'vue'
const min = new Date(2020, 0, 20)
const max = new Date(2020, 9, 10)
const val = ref(new Date(2020, 2, 28))
const confirm = ({ selectedValue }) => {
  console.log(selectedValue)
}
</script>
