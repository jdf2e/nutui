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
    currentDate: import("vue").Ref<Date>;
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