<template>
  <nut-cell title="Week" :desc="String(date)" @click="show = true"> </nut-cell>
  <nut-calendar
    v-model:visible="show"
    :default-value="date"
    type="week"
    start-date="2019-12-22"
    end-date="2021-01-08"
    @close="show = false"
    @choose="choose"
  >
  </nut-calendar>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
const date = ref(['2019-12-23', '2019-12-26']);
const choose = (param) => {
  const { weekDate } = param;
  date.value = [weekDate[0].date[3], weekDate[1].date[3]];
};
</script>
