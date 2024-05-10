import { PropType } from 'vue';
import { CalendarRef } from '../calendaritem/type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    isAutoBackFill: {
        type: BooleanConstructor;
        default: boolean;
    };
    toDateAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    startText: {
        type: StringConstructor;
        default: string;
    };
    endText: {
        type: StringConstructor;
        default: string;
    };
    defaultValue: {
        type: PropType<string | string[]>;
    };
    startDate: {
        type: StringConstructor;
        default: string;
    };
    endDate: {
        type: StringConstructor;
        default: string;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledDate: FunctionConstructor;
}, {
    visible: import("vue").WritableComputedRef<boolean>;
    closePopup: () => void;
    opened: () => void;
    update: () => void;
    close: () => void;
    select: (param: any) => void;
    choose: (param: any) => void;
    calendarRef: import("vue").Ref<CalendarRef | null>;
    showTopBtn: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    topInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    dayInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    bottomInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    footerInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:visible" | "close" | "choose")[], "select" | "update:visible" | "close" | "choose", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    isAutoBackFill: {
        type: BooleanConstructor;
        default: boolean;
    };
    toDateAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    startText: {
        type: StringConstructor;
        default: string;
    };
    endText: {
        type: StringConstructor;
        default: string;
    };
    defaultValue: {
        type: PropType<string | string[]>;
    };
    startDate: {
        type: StringConstructor;
        default: string;
    };
    endDate: {
        type: StringConstructor;
        default: string;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
        validator: (val: number) => boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledDate: FunctionConstructor;
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onChoose?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    title: string;
    visible: boolean;
    lockScroll: boolean;
    poppable: boolean;
    isAutoBackFill: boolean;
    toDateAnimation: boolean;
    showTitle: boolean;
    showSubTitle: boolean;
    showToday: boolean;
    confirmText: string;
    startText: string;
    endText: string;
    startDate: string;
    endDate: string;
    firstDayOfWeek: number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCalendar: typeof _default;
    }
}