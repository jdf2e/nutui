<template>
  <nut-cell title="Multiple" :desc="String(date.length)" @click="show = true" />
  <nut-calendar
    v-model:visible="show"
    :default-value="date"
    type="multiple"
    start-date="2022-01-01"
    end-date="2022-09-10"
    @close="show = false"
    @choose="choose"
  >
  </nut-calendar>
</template>
<script setup>
import { ref } from 'vue'
const show = ref(false)
const date = ref([])
const choose = (param) => {
  date.value = param.map((item) => item[3])
}
</script>
