import type { WithInstall } from '../../utils';
import { PropType } from 'vue';
import { CalendarCardType, CalendarCardValue } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    type: {
        type: PropType<CalendarCardType>;
        default: string;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: PropType<CalendarCardValue>;
        default: () => never[];
    };
    startDate: {
        type: DateConstructor;
        default: null;
    };
    endDate: {
        type: DateConstructor;
        default: null;
    };
    disableDay: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}, {
    jump: (step?: number) => void;
    jumpTo: (y: number, m: number) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    dayClick: (...args: any[]) => void;
    pageChange: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<CalendarCardType>;
        default: string;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: PropType<CalendarCardValue>;
        default: () => never[];
    };
    startDate: {
        type: DateConstructor;
        default: null;
    };
    endDate: {
        type: DateConstructor;
        default: null;
    };
    disableDay: {
        type: FunctionConstructor;
        default: () => boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDayClick?: ((...args: any[]) => any) | undefined;
    onPageChange?: ((...args: any[]) => any) | undefined;
}, {
    type: CalendarCardType;
    modelValue: CalendarCardValue;
    startDate: Date;
    endDate: Date;
    firstDayOfWeek: number;
    disableDay: Function;
}, {}>, {
    top?(_: {
        day: {
            type?: "next" | "current" | "prev" | undefined;
            year: number;
            month: number;
            date: number;
        };
    }): any;
    default?(_: {
        day: {
            type?: "next" | "current" | "prev" | undefined;
            year: number;
            month: number;
            date: number;
        };
    }): any;
    bottom?(_: {
        day: {
            type?: "next" | "current" | "prev" | undefined;
            year: number;
            month: number;
            date: number;
        };
    }): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutCalendarCard: typeof _default;
    }
}
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
