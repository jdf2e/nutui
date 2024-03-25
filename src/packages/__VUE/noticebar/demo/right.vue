<template>
  <nut-noticebar direction="vertical" :list="list" :speed="10" :stand-time="2000" @click="handleClick">
    <template #right-icon>
      <Fabulous />
    </template>
  </nut-noticebar>
</template>

<script setup>
import { ref } from 'vue'
import { Fabulous } from '@nutui/icons-vue'
const list = ref(['Radio 单选框', 'Checkbox 复选框', 'DatePicker 日期选择器', 'CalendarCard 日历卡片'])
const handleClick = (item) => {
  console.log(item)
}
</script>
