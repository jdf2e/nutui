<template>
  <nut-noticebar direction="vertical" :height="50" :speed="10" :stand-time="1000" :list="[]">
    <div v-for="(item, index) in list" :key="index" class="custom-item" :data-index="index">{{ item }}</div>
  </nut-noticebar>
</template>

<script setup>
import { ref } from 'vue';
const list = ref(['Radio 单选框', 'Checkbox 复选框', 'DatePicker 日期选择器', 'CalendarCard 日历卡片']);
</script>
