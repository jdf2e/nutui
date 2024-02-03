<template>
  <nut-space>
    <nut-button @click="calendarCardRef?.jump(1)">+ 1</nut-button>
    <nut-button @click="calendarCardRef?.jump(12)"> + 12 </nut-button>
    <nut-button @click="calendarCardRef?.jump(-12)"> - 12 </nut-button>
    <nut-button @click="calendarCardRef?.jumpTo(2023, 1)"> 2023 01 </nut-button>
  </nut-space>
  <nut-calendar-card ref="calendarCardRef" v-model="value" @change="onChange" />
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { CalendarCardInstance } from '@nutui/nutui-taro';
const calendarCardRef = ref<CalendarCardInstance>();
const value = ref(null);
const onChange = (val: Date) => {
  console.log(val);
};
</script>
