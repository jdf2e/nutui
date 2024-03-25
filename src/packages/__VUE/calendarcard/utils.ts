import Utils from '@/packages/utils/date'
import { CalendarCardDay, CalendarCardMonth, CalendarCardValue } from './types'

export const convertDateToDay = (date: Date) => {
  return date
    ? {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate()
      }
    : null
}

export const convertDayToDate = (day: CalendarCardDay) => {
  return day ? new Date(day.year, day.month - 1, day.date) : null
}

export const valueToRange = (val?: CalendarCardValue) => {
  if (Array.isArray(val)) {
    return val.map((date: Date) => {
      return convertDateToDay(date)
    })
  }
  return val ? [convertDateToDay(val)] : []
}

export const rangeTovalue = (range?: CalendarCardDay[]) => {
  if (Array.isArray(range)) {
    return range.map((day: CalendarCardDay) => {
      return convertDayToDate(day)
    })
  }
  return range ? [convertDayToDate(range)] : []
}

/**
 * 获取当月面板中前一个月的日期数据
 */
export const getPrevMonthDays = (year: number, month: number, firstDayOfWeek: number) => {
  let prevMonth = month - 1
  let prevYear = year
  if (prevMonth <= 0) {
    prevMonth = 12
    prevYear -= 1
  }
  let days = Utils.getMonthPreDay(year, month)
  days -= firstDayOfWeek
  if (days >= 7) {
    days -= 7
  }

  const preDates = Utils.getMonthDays(`${prevYear}`, `${prevMonth}`)
  const months = Array.from(Array(preDates), (_, k) => {
    return {
      type: 'prev',
      year: prevYear,
      month: prevMonth,
      date: k + 1
    } as CalendarCardDay
  })
  return months.slice(preDates - days)
}

/**
 * 获取当前月的日期数据
 */
export const getCurrentMonthDays = (year: number, month: number) => {
  const days = Utils.getMonthDays(`${year}`, `${month}`)
  return Array.from(Array(days), (_, k) => {
    return {
      type: 'current',
      year,
      month,
      date: k + 1
    } as CalendarCardDay
  })
}

/**
 * 根据日期获取当前周的起始日期
 */
export const getCurrentWeekDays = (day: CalendarCardDay, firstDayOfWeek: number): CalendarCardDay[] => {
  const current = new Date(day.year, day.month - 1, day.date)
  const count = (current.getDay() + 7 - firstDayOfWeek) % 7
  return [
    convertDateToDay(new Date(current.getTime() - 24 * 60 * 60 * 1000 * count)) as CalendarCardDay,
    convertDateToDay(new Date(current.getTime() + 24 * 60 * 60 * 1000 * (6 - count))) as CalendarCardDay
  ]
}

/**
 * 获取 month 月份数据
 * @param month
 * @param firstDayOfWeek
 * @returns
 */
export const getDays = (month: CalendarCardMonth, firstDayOfWeek: number) => {
  const y = month.year
  const m = month.month
  const days = [...getPrevMonthDays(y, m, firstDayOfWeek), ...getCurrentMonthDays(y, m)] as CalendarCardDay[]
  const size = days.length
  const yearOfNextMonth = month.month === 12 ? month.year + 1 : month.year
  const monthOfNextMonth = month.month === 12 ? 1 : month.month + 1
  // 补全 6 行 7 列视图
  for (let i = 1; i <= 42 - size; i++) {
    days.push({
      type: 'next',
      year: yearOfNextMonth,
      month: monthOfNextMonth,
      date: i
    })
  }
  return days
}

/**
 * 比较两个日期
 * @param day1
 * @param day2
 * @returns
 */
export const compareDay = (day1: CalendarCardDay, day2: CalendarCardDay) => {
  if (day1 && day2) {
    if (day1.year === day2.year) {
      if (day1.month === day2.month) {
        return day1.date - day2.date
      }
      return day1.month - day2.month
    }
    return day1.year - day2.year
  }
}

export const isSameDay = (day1: CalendarCardDay, day2: CalendarCardDay) => {
  return compareDay(day1, day2) === 0
}
