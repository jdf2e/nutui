<template>
  <nut-picker v-model="value" :columns="columns" title="请选择时间" @confirm="confirm" />
</template>
<script setup>
import { ref } from 'vue'
const value = ref(['Wednesday', 'Afternoon'])
const columns = ref([
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' }
  ],
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' }
  ]
])

const confirm = ({ selectedValue, selectedOptions }) => {
  console.log(selectedValue, selectedOptions)
}
</script>
