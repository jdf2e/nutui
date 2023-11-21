import Utils from '@/packages/utils/date';
import { CalendarCardDay } from './types';

export const convertDateToDay = (date: Date) => {
  return date
    ? {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        date: date.getDate()
      }
    : null;
};

export const convertDayToDate = (day: CalendarCardDay) => {
  return day ? new Date(day.year, day.month - 1, day.date) : null;
};

/**
 * 获取当月面板中前一个月的日期数据
 */
export const getPrevMonthDays = (year: number, month: number, firstDayOfWeek: number) => {
  let prevMonth = month - 1;
  let prevYear = year;
  if (prevMonth <= 0) {
    prevMonth = 12;
    prevYear -= 1;
  }
  let days = Utils.getMonthPreDay(year, month);
  days -= firstDayOfWeek;
  if (days >= 7) {
    days -= 7;
  }

  const preDates = Utils.getMonthDays(`${prevYear}`, `${prevMonth}`);
  const months = Array.from(Array(preDates), (_, k) => {
    return {
      type: 'prev',
      year: prevYear,
      month: prevMonth,
      date: k + 1
    } as CalendarCardDay;
  });
  return months.slice(preDates - days);
};

/**
 * 获取当前月的日期数据
 */
export const getCurrentMonthDays = (year: number, month: number) => {
  const days = Utils.getMonthDays(`${year}`, `${month}`);
  return Array.from(Array(days), (_, k) => {
    return {
      type: 'current',
      year,
      month,
      date: k + 1
    } as CalendarCardDay;
  });
};

/**
 * 根据日期获取当前周的起始日期
 */
export const getCurrentWeekDays = (day: CalendarCardDay, firstDayOfWeek: number): CalendarCardDay[] => {
  const current = new Date(day.year, day.month - 1, day.date);
  const count = (current.getDay() + 7 - firstDayOfWeek) % 7;
  return [
    convertDateToDay(new Date(current.getTime() - 24 * 60 * 60 * 1000 * count)) as CalendarCardDay,
    convertDateToDay(new Date(current.getTime() + 24 * 60 * 60 * 1000 * (6 - count))) as CalendarCardDay
  ];
};
