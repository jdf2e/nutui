import type { PropType } from 'vue';
import { PickerOption } from '../picker/types';
import { Formatter, Filter } from './type';
declare function isDate(val: Date): val is Date;

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: null;
    title: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    isShowChinese: {
        type: BooleanConstructor;
        default: boolean;
    };
    minuteStep: {
        type: NumberConstructor;
        default: number;
    };
    minDate: {
        type: DateConstructor;
        default: () => Date;
        validator: typeof isDate;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
        validator: typeof isDate;
    };
    formatter: {
        type: PropType<Formatter>;
        default: null;
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    filter: PropType<Filter>;
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, {
    changeHandler: ({ columnIndex, selectedValue, selectedOptions }: {
        columnIndex: number;
        selectedValue: (string | number)[];
        selectedOptions: PickerOption[];
    }) => void;
    closeHandler: (val: any) => void;
    confirm: (val: any) => void;
    columns: import("vue").ComputedRef<PickerOption[][]>;
    currentDate: import("vue").Ref<{
        toString: () => string;
        toDateString: () => string;
        toTimeString: () => string;
        toLocaleString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleDateString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        toLocaleTimeString: {
            (): string;
            (locales?: string | string[] | undefined, options?: Intl.DateTimeFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.DateTimeFormatOptions | undefined): string;
        };
        valueOf: () => number;
        getTime: () => number;
        getFullYear: () => number;
        getUTCFullYear: () => number;
        getMonth: () => number;
        getUTCMonth: () => number;
        getDate: () => number;
        getUTCDate: () => number;
        getDay: () => number;
        getUTCDay: () => number;
        getHours: () => number;
        getUTCHours: () => number;
        getMinutes: () => number;
        getUTCMinutes: () => number;
        getSeconds: () => number;
        getUTCSeconds: () => number;
        getMilliseconds: () => number;
        getUTCMilliseconds: () => number;
        getTimezoneOffset: () => number;
        setTime: (time: number) => number;
        setMilliseconds: (ms: number) => number;
        setUTCMilliseconds: (ms: number) => number;
        setSeconds: (sec: number, ms?: number | undefined) => number;
        setUTCSeconds: (sec: number, ms?: number | undefined) => number;
        setMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCMinutes: (min: number, sec?: number | undefined, ms?: number | undefined) => number;
        setHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setUTCHours: (hours: number, min?: number | undefined, sec?: number | undefined, ms?: number | undefined) => number;
        setDate: (date: number) => number;
        setUTCDate: (date: number) => number;
        setMonth: (month: number, date?: number | undefined) => number;
        setUTCMonth: (month: number, date?: number | undefined) => number;
        setFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        setUTCFullYear: (year: number, month?: number | undefined, date?: number | undefined) => number;
        toUTCString: () => string;
        toISOString: () => string;
        toJSON: (key?: any) => string;
        [Symbol.toPrimitive]: {
            (hint: "default"): string;
            (hint: "string"): string;
            (hint: "number"): number;
            (hint: string): string | number;
        };
    }>;
    title: import("vue").Ref<string>;
    selectedValue: import("vue").Ref<any[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "cancel" | "change" | "update:modelValue" | "confirm")[], "click" | "cancel" | "change" | "update:modelValue" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: null;
    title: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    isShowChinese: {
        type: BooleanConstructor;
        default: boolean;
    };
    minuteStep: {
        type: NumberConstructor;
        default: number;
    };
    minDate: {
        type: DateConstructor;
        default: () => Date;
        validator: typeof isDate;
    };
    maxDate: {
        type: DateConstructor;
        default: () => Date;
        validator: typeof isDate;
    };
    formatter: {
        type: PropType<Formatter>;
        default: null;
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    filter: PropType<Filter>;
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    title: string;
    threeDimensional: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    optionHeight: string | number;
    cancelText: string;
    okText: string;
    showToolbar: boolean;
    isShowChinese: boolean;
    minuteStep: number;
    minDate: Date;
    maxDate: Date;
    formatter: Formatter;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutDatePicker: typeof _default;
    }
}