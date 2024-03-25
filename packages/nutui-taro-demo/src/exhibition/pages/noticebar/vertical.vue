<template>
  <nut-noticebar direction="vertical" :list="list" :speed="10" :stand-time="2000" @click="handleClick" />
</template>

<script setup>
import { ref } from 'vue'
const list = ref(['Radio 单选框', 'Checkbox 复选框', 'DatePicker 日期选择器', 'CalendarCard 日历卡片'])
const handleClick = (item) => {
  console.log(item)
}
</script>
