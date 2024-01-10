<template>
  <div v-show="days.length > 0" class="nut-calendarcard">
    <div class="nut-calendarcard-header">
      <div class="nut-calendarcard-header-left">
        <div class="double-left" @click="jump(-12)"> <DoubleLeft />1 </div>
        <div class="left" @click="jump(-1)"> <Left />2 </div>
      </div>
      <div class="nut-calendarcard-header-title">
        {{ translate('monthTitle', month.year, month.month) }}
      </div>
      <div class="nut-calendarcard-header-right">
        <div class="right" @click="jump(1)"> <Right />3 </div>
        <div class="double-right" @click="jump(12)"> <DoubleRight />4 </div>
      </div>
    </div>
    <div class="nut-calendarcard-content">
      <div class="nut-calendarcard-days">
        <div
          v-for="d in weekHeader"
          :key="d.name"
          class="nut-calendarcard-day header"
          :class="d.key === 0 || d.key === 6 ? 'weekend' : ''"
        >
          {{ d.name }}
        </div>
      </div>
      <div class="nut-calendarcard-days">
        <div
          v-for="day in days"
          :key="`${day.year}-${day.month}-${day.date}`"
          class="nut-calendarcard-day"
          :class="[day.type, ...getClasses(day)]"
          @click="handleDayClick(day)"
        >
          <div class="nut-calendarcard-day-top">
            <slot name="top" :day="day"></slot>
          </div>
          <div class="nut-calendarcard-day-inner">
            <slot :day="day">
              {{ day.date }}
            </slot>
          </div>
          <div class="nut-calendarcard-day-bottom">
            <slot name="bottom" :day="day"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { watchEffect, PropType, ref, computed } from 'vue';
import { CalendarCardDay, CalendarCardMonth, CalendarCardType, CalendarCardValue } from './types';
import {
  convertDateToDay,
  convertDayToDate,
  valueToRange,
  rangeTovalue,
  getDays,
  getCurrentWeekDays,
  compareDay,
  isSameDay
} from './utils';
import { useLocale } from '@/packages/utils/useLocale';
import { createComponent } from '@/packages/utils/create';

const cN = 'NutCalendarCard';
const { create } = createComponent('calendar-card');

export default create({
  props: {
    type: {
      type: String as PropType<CalendarCardType>,
      default: 'single'
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    },
    modelValue: {
      type: [Object, Array] as PropType<CalendarCardValue>,
      default: () => []
    },
    startDate: {
      type: Date,
      default: null
    },
    endDate: {
      type: Date,
      default: null
    },
    disableDay: {
      type: Function,
      default: () => false
    }
  },
  emits: ['update:modelValue', 'change', 'dayClick', 'pageChange'],
  setup(props, { emit, expose }) {
    const translate = useLocale(cN);

    const initMonth = () => {
      let date = new Date(Date.now());
      const val = props.modelValue;
      if (Array.isArray(val)) {
        if (val.length) {
          date = val[0];
        }
      } else if (val) {
        date = val;
      }
      return {
        year: date.getFullYear(),
        month: date.getMonth() + 1
      };
    };

    // 当前月份信息
    const month = ref<CalendarCardMonth>(initMonth());

    // 当前月份对应的日期(6 * 7 视图)
    const days = ref<CalendarCardDay[]>([]);

    const weekHeader = computed<
      {
        name: string;
        key: number;
      }[]
    >(() => {
      const weekdays = translate('weekdays').map((day: string, index: number) => {
        return {
          name: day,
          key: index
        };
      });
      return [...weekdays.slice(props.firstDayOfWeek, 7), ...weekdays.slice(0, props.firstDayOfWeek)];
    });

    const innerValue = ref<any[]>(props.modelValue ? valueToRange(props.modelValue) : []);

    watchEffect(() => {
      const val = props.modelValue ? valueToRange(props.modelValue) : [];
      innerValue.value = val;
    });

    const change = (v: CalendarCardDay[]) => {
      innerValue.value = v;
      if (props.type === 'single') {
        const date = convertDayToDate(v[0]);
        emit('update:modelValue', date);
        emit('change', date);
      } else if (props.type === 'multiple' || props.type === 'range' || props.type === 'week') {
        const val = rangeTovalue(v) as CalendarCardValue;
        emit('update:modelValue', val);
        emit('change', val);
      }
    };

    watchEffect(() => {
      const newDays = getDays(month.value, props.firstDayOfWeek);
      days.value = newDays;
      emit('pageChange', month.value);
    });

    const isDisable = (day: CalendarCardDay) => {
      if (props.disableDay && props.disableDay(day)) {
        return true;
      }
      if (props.startDate && Number(compareDay(day, convertDateToDay(props.startDate) as CalendarCardDay)) < 0) {
        return true;
      }
      if (props.endDate && Number(compareDay(day, convertDateToDay(props.endDate) as CalendarCardDay)) > 0) {
        return true;
      }
      return false;
    };

    const isActive = (day: CalendarCardDay) => {
      if (props.type === 'single' || props.type === 'multiple') {
        for (const val in innerValue.value) {
          if (isSameDay(day, innerValue.value[val])) {
            return true;
          }
        }
      } else if (props.type === 'range' && innerValue.value.length === 1 && isSameDay(innerValue.value[0], day)) {
        return true;
      }
      return false;
    };

    const isStart = (day: CalendarCardDay) => {
      return (
        (props.type === 'range' || props.type === 'week') &&
        innerValue.value.length === 2 &&
        isSameDay(day, innerValue.value[0])
      );
    };

    const isEnd = (day: CalendarCardDay) => {
      return (
        (props.type === 'range' || props.type === 'week') &&
        innerValue.value.length === 2 &&
        isSameDay(day, innerValue.value[1])
      );
    };

    const isMid = (day: CalendarCardDay) => {
      if (props.type === 'range' || props.type === 'week') {
        if (innerValue.value.length === 2) {
          const c1 = compareDay(innerValue.value[0], day);
          const c2 = compareDay(day, innerValue.value[1]);
          if (c1 && c1 < 0 && c2 && c2 < 0) {
            return true;
          }
        }
      }
      return false;
    };

    const isWeekend = (day: CalendarCardDay) => {
      const d = new Date(day.year, day.month - 1, day.date).getDay();
      return d === 0 || d === 6;
    };

    const getClasses = (day: CalendarCardDay) => {
      /**
       * active: single、multiple 激活日期
       * start: 范围开始日期
       * end: 范围结束日期
       * mid: 范围中间日期
       */
      if (isDisable(day)) {
        return ['disabled'];
      }
      const res = [] as string[];
      if (day.type === 'current') {
        if (isActive(day)) {
          res.push('active');
        }
        if (isStart(day)) {
          res.push('start');
        }
        if (isEnd(day)) {
          res.push('end');
        }
        if (isMid(day)) {
          res.push('mid');
        }
        if (isWeekend(day)) {
          res.push('weekend');
        }
      }
      return res;
    };

    const jumpTo = (y: number, m: number) => {
      if (props.startDate) {
        const c = compareDay(
          {
            year: y,
            month: m,
            date: 31
          },
          convertDateToDay(props.startDate) as CalendarCardDay
        );
        if (c && c < 0) {
          return;
        }
      }
      if (props.endDate) {
        const c = compareDay(
          {
            year: y,
            month: m,
            date: 1
          },
          convertDateToDay(props.endDate) as CalendarCardDay
        );
        if (c && c > 0) {
          return;
        }
      }
      month.value = {
        year: y,
        month: m
      };
    };

    const jump = (step = 1) => {
      const current = month.value.year * 12 + month.value.month;
      let newMonth = (current + step) % 12;
      if (newMonth === 0) {
        newMonth = 12;
      }
      const newYear = Math.floor((current + step - newMonth) / 12);
      jumpTo(newYear, newMonth);
    };

    const handleDayClick = (day: CalendarCardDay) => {
      if (day.type === 'prev' || day.type === 'next' || isDisable(day)) {
        return;
      }
      emit('dayClick', day);
      switch (props.type) {
        case 'single': {
          if (innerValue.value[0] && isSameDay(innerValue.value[0], day)) {
            change([]);
          } else {
            change([day]);
          }
          break;
        }
        case 'multiple': {
          const t = innerValue.value.find((i) => isSameDay(i, day));
          if (t) {
            change(innerValue.value.filter((i) => i !== t));
          } else {
            change([...innerValue.value, day]);
          }
          break;
        }
        case 'range': {
          const len = innerValue.value.length;
          if (len === 0 || len === 2) {
            change([day]);
          } else if (len === 1) {
            const t = compareDay(innerValue.value[0], day);
            if (t === 0 || t === null || t === undefined) {
              change([]);
            } else if (t < 0) {
              change([innerValue.value[0], day]);
            } else {
              change([day, innerValue.value[0]]);
            }
          } else {
            console.warn('[NutUI] Calendar range error');
          }
          break;
        }
        case 'week': {
          if (innerValue.value.length === 2 || innerValue.value.length === 0) {
            const [left, right] = getCurrentWeekDays(day, props.firstDayOfWeek);
            change([left, right]);
          } else {
            console.warn('[NutUI] Calendar week error');
          }
          break;
        }
        default: {
          console.warn('[NutUI] Calendar type error');
        }
      }
    };

    expose({
      jump,
      jumpTo
    });

    return {
      days,
      month,
      weekHeader,
      getClasses,
      handleDayClick,
      jump,
      translate
    };
  }
});
</script>
