<template>
  <nut-cell title="Single" :desc="String(date)" @click="show = true" />
  <nut-calendar
    v-model:visible="show"
    :default-value="date"
    start-date="2022-01-11"
    end-date="2022-11-30"
    @close="show = false"
    @choose="choose"
  >
  </nut-calendar>
</template>
<script setup>
import { ref } from 'vue';
const show = ref(false);
const date = ref('2022-02-01');
const choose = (param) => {
  date.value = param[3];
};
</script>
