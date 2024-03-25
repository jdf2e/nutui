<template>
  <div style="height: 500px">
    <nut-calendar
      :poppable="false"
      is-auto-back-fill
      :default-value="date"
      start-date="2022-01-11"
      end-date="2022-11-30"
      @choose="choose"
    >
    </nut-calendar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const date = ref('2022-02-01')
const choose = (param) => {
  console.log(param)
  date.value = param[3]
}
</script>
