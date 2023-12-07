declare const Utils: {
    isLeapYear: (y: number) => boolean;
    getWhatDay: (year: number, month: number, day: number) => string;
    getMonthPreDay: (year: number, month: number) => number;
    getMonthDays: (year: string, month: string) => number;
    getNumTwoBit: (n: number) => string;
    date2Str: (date: Date, split?: string) => string;
    getDay: (i: number) => string;
    compareDate: (date1: string, date2: string) => boolean;
    isEqual: (date1: string, date2: string) => boolean;
    getMonthWeek: (year: string, month: string, date: string, firstDayOfWeek?: number) => number;
    getYearWeek: (year: string, month: string, date: string, firstDayOfWeek?: number) => number;
    getWeekDate: (year: string, month: string, date: string, firstDayOfWeek?: number) => string[];
    formatResultDate: (date: string) => string[];
};
export default Utils;
