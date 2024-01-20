<template>
  <nut-cell title="Range" :desc="String(date)" @click="show = true" />
  <nut-calendar
    v-model:visible="show"
    :default-value="date"
    type="range"
    start-date="2019-12-22"
    end-date="2021-01-08"
    is-auto-back-fill
    @close="show = false"
    @choose="choose"
    @select="select"
  >
  </nut-calendar>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
const date = ref(['2019-12-23', '2019-12-26']);
const choose = (param) => {
  date.value = [param[0][3], param[1][3]];
};
const select = (param) => {
  console.log(param);
};
</script>
