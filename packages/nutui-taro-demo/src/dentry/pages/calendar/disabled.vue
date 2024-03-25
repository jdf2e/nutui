<template>
  <nut-cell title="Disabled Date" :desc="String(date)" @click="show = true"> </nut-cell>
  <nut-calendar
    v-model:visible="show"
    :default-value="date"
    start-date="2022-01-01"
    end-date="2022-11-30"
    :disabled-date="disabledDate"
    @close="show = false"
    @choose="choose"
  >
  </nut-calendar>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const date = ref('')
const choose = (param) => {
  date.value = param[3]
}
const disabledDate = (date) => {
  const disabledDate = {
    '2022-01-05': true,
    '2022-01-06': true,
    '2022-01-10': true,
    '2022-01-11': true,
    '2022-01-12': true,
    '2022-01-13': true,
    '2022-01-14': true
  }
  return disabledDate[date]
}
</script>
