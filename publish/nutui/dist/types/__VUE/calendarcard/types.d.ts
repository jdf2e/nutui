export type CalendarCardType = 'single' | 'multiple' | 'range' | 'week';
export interface CalendarCardDay {
    type?: 'prev' | 'current' | 'next';
    year: number;
    month: number;
    date: number;
}
export interface CalendarCardMonth {
    year: number;
    month: number;
}
export type CalendarCardValue = Date | Date[] | null;
