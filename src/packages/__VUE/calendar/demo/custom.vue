<template>
  <nut-cell title="Custom" :desc="String(date)" @click="show = true" />
  <nut-calendar
    ref="calendarRef"
    v-model:visible="show"
    :default-value="date"
    type="range"
    :first-day-of-week="1"
    confirm-text="提交"
    start-text="入店"
    end-text="离店"
    @close="show = false"
    @choose="choose"
  >
    <template #btn>
      <div class="calendar-demo-wrapper">
        <div class="btn" @click="click1">去某个时间</div>
        <div class="btn" @click="click2">最近七天</div>
        <div class="btn" @click="click3">当月</div>
      </div>
    </template>
    <template #day="props">
      <span>{{ props.date.day }}</span>
    </template>
  </nut-calendar>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(false)
const date = ref([])
const calendarRef = ref(null)
const getNumTwoBit = function (n) {
  n = Number(n)
  return (n > 9 ? '' : '0') + n
}
const date2Str = function (date, split) {
  split = split || '-'
  const y = date.getFullYear()
  const m = getNumTwoBit(date.getMonth() + 1)
  const d = getNumTwoBit(date.getDate())
  return [y, m, d].join(split)
}
const getDay = function (i) {
  i = i || 0
  let date = new Date()
  const diff = i * (1000 * 60 * 60 * 24)
  date = new Date(date.getTime() + diff)
  return date2Str(date)
}
const isLeapYear = function (y) {
  return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0
}
const getMonthDays = function (year, month) {
  if (/^0/.test(month)) {
    month = month.split('')[1]
  }
  return [0, 31, isLeapYear(Number(year)) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month]
}
const choose = (param) => {
  date.value = [param[0][3], param[1][3]]
}
const click1 = () => {
  if (calendarRef.value) {
    const d = new Date()
    d.setDate(d.getDate() + 30)
    calendarRef.value.scrollToDate(date2Str(d))
  }
}
const click2 = () => {
  const d = [date2Str(new Date()), getDay(6)]
  date.value = d
}
const click3 = () => {
  const d = new Date()
  const year = d.getFullYear()
  let month = d.getMonth() + 1
  month = month < 10 ? '0' + month : month + ''
  const yearMonth = `${year}-${month}`
  const currMonthDays = getMonthDays(year + '', month + '')
  date.value = [`${yearMonth}-01`, `${yearMonth}-${currMonthDays}`]
}
</script>

<style>
.calendar-demo-wrapper {
  display: flex;
  padding: 0 40px;
  justify-content: center;
}

.calendar-demo-wrapper .btn {
  margin: 0px 5px;
  background: #fa3f19;
  color: #fff;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
}
</style>
