<template>
  <nut-button @click="show = true">open</nut-button>
  <nut-popup v-model:visible="show" position="bottom">
    <nut-date-picker
      v-model="val"
      :min-date="min"
      :max-date="max"
      :three-dimensional="false"
      @confirm="confirm"
    ></nut-date-picker>
  </nut-popup>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const min = new Date(2020, 0, 1)
const max = new Date(2025, 10, 1)
const val = ref(new Date(2022, 4, 10))
const confirm = ({ selectedValue }) => {
  console.log(selectedValue)
  show.value = false
}
</script>
