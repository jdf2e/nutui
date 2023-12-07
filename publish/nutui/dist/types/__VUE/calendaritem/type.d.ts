export interface TouchParam {
    startY: number;
    endY: number;
    startTime: number;
    endTime: number;
    lastY: number;
    lastTime: number;
}
export type InputDate = string | string[];
export type StringArr = string[];
export interface CalendarState {
    yearMonthTitle: string;
    currDate: string | string[];
    propStartDate: string;
    propEndDate: string;
    currentIndex: number;
    unLoadPrev: boolean;
    touchParams: TouchParam;
    transformY: number;
    translateY: number;
    scrollDistance: number;
    defaultData: InputDate;
    chooseData: (string | string[])[];
    monthsData: MonthInfo[];
    dayPrefix: string;
    startData: InputDate;
    endData: InputDate;
    isRange: boolean;
    timer: number;
    avgHeight: number;
    monthsNum: number;
    defaultRange: number[];
}
export interface CalendarTaroState extends CalendarState {
    scrollTop: number;
    containerHeight: string;
}
export interface Day {
    day: string;
    type: string;
    year?: string;
    month?: string;
}
export interface MonthInfo {
    curData: string[] | string;
    title: string;
    monthData: Day[];
    cssHeight: number;
    cssScrollHeight: number;
}
export interface Dateprop {
    year: string;
    month: string;
}
export interface DateInfo {
    year: string;
    month: string;
    day: string;
}
export interface CalendarRef extends HTMLElement {
    scrollToDate: (date: string) => void;
    initPosition: () => void;
}
