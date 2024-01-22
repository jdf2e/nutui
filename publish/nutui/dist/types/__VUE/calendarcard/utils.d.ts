import { CalendarCardDay, CalendarCardMonth, CalendarCardValue } from './types';
export declare const convertDateToDay: (date: Date) => {
    year: number;
    month: number;
    date: number;
} | null;
export declare const convertDayToDate: (day: CalendarCardDay) => Date | null;
export declare const valueToRange: (val?: CalendarCardValue) => ({
    year: number;
    month: number;
    date: number;
} | null)[];
export declare const rangeTovalue: (range?: CalendarCardDay[]) => (Date | null)[];
export declare const getPrevMonthDays: (year: number, month: number, firstDayOfWeek: number) => CalendarCardDay[];
export declare const getCurrentMonthDays: (year: number, month: number) => CalendarCardDay[];
export declare const getCurrentWeekDays: (day: CalendarCardDay, firstDayOfWeek: number) => CalendarCardDay[];
export declare const getDays: (month: CalendarCardMonth, firstDayOfWeek: number) => CalendarCardDay[];
export declare const compareDay: (day1: CalendarCardDay, day2: CalendarCardDay) => number | undefined;
export declare const isSameDay: (day1: CalendarCardDay, day2: CalendarCardDay) => boolean;
