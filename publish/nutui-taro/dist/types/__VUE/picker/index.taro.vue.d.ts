import { CSSProperties } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: import("vue").PropType<(string | number)[]>;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    columns: {
        type: import("vue").PropType<(import("./types").PickerOption | import("./types").PickerOption[])[]>;
        default: () => never[];
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
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
    fieldNames: {
        type: import("vue").PropType<import("./types").PickerFieldNames>;
        default: () => {};
    };
}, {
    columnsType: import("vue").ComputedRef<"multiple" | "single" | "cascade">;
    columnsList: import("vue").ComputedRef<import("./types").PickerOption[][]>;
    columnFieldNames: import("vue").ComputedRef<{
        text: string;
        value: string;
        children: string;
        className: string;
    }>;
    cancel: () => void;
    changeHandler: (columnIndex: number, option: import("./types").PickerOption) => void;
    confirmHandler: () => void;
    defaultValues: import("vue").Ref<(string | number)[]>;
    pickerColumn: import("vue").Ref<any[]>;
    swipeRef: (el: any) => void;
    defaultIndexes: import("vue").ComputedRef<number[]>;
    tileChange: (data: any) => void;
    handlePickstart: () => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
    handlePickend: () => void;
    pickerViewStyles: import("vue").ComputedRef<CSSProperties>;
    pxCheck: (value?: string | number | undefined) => string | undefined;
    show: import("vue").Ref<boolean>;
    picking: import("vue").Ref<boolean>;
    ENV: import("vue").Ref<TaroGeneral.ENV_TYPE>;
    ENV_TYPE: import("vue").Ref<{
        WEAPP: TaroGeneral.ENV_TYPE.WEAPP;
        WEB: TaroGeneral.ENV_TYPE.WEB;
        RN: TaroGeneral.ENV_TYPE.RN;
        SWAN: TaroGeneral.ENV_TYPE.SWAN;
        ALIPAY: TaroGeneral.ENV_TYPE.ALIPAY;
        TT: TaroGeneral.ENV_TYPE.TT;
        QQ: TaroGeneral.ENV_TYPE.QQ;
        JD: TaroGeneral.ENV_TYPE.JD;
        HARMONYHYBRID: TaroGeneral.ENV_TYPE.HARMONYHYBRID;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "change" | "update:modelValue" | "confirm")[], "cancel" | "change" | "update:modelValue" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<(string | number)[]>;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    columns: {
        type: import("vue").PropType<(import("./types").PickerOption | import("./types").PickerOption[])[]>;
        default: () => never[];
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
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
    fieldNames: {
        type: import("vue").PropType<import("./types").PickerFieldNames>;
        default: () => {};
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    columns: (import("./types").PickerOption | import("./types").PickerOption[])[];
    modelValue: (string | number)[];
    threeDimensional: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    optionHeight: string | number;
    fieldNames: import("./types").PickerFieldNames;
    cancelText: string;
    okText: string;
    showToolbar: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutPicker: typeof _default;
    }
}