import { Ref } from 'vue';
import type { PropType } from 'vue';
export interface dataList {
    price: string | number;
}

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    chooseText: {
        type: StringConstructor;
        default: string;
    };
    otherValueText: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: PropType<dataList[]>;
        default: () => never[];
    };
    cardAmountMin: {
        type: NumberConstructor;
        default: number;
    };
    cardAmountMax: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMin: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMax: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
}, {
    handleClick: (item: {
        price: number | string;
    }, index: number) => void;
    changeStep: (value: number) => void;
    change: (event: Event) => void;
    inputClick: () => void;
    stepValue: Ref<number>;
    currentIndex: Ref<string | number | null>;
    inputValue: Ref<string | number | undefined>;
    money: Ref<string | number | undefined>;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "changeStep" | "inputChange" | "inputClick")[], "change" | "update:modelValue" | "changeStep" | "inputChange" | "inputClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    chooseText: {
        type: StringConstructor;
        default: string;
    };
    otherValueText: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: PropType<dataList[]>;
        default: () => never[];
    };
    cardAmountMin: {
        type: NumberConstructor;
        default: number;
    };
    cardAmountMax: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMin: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMax: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChangeStep?: ((...args: any[]) => any) | undefined;
    onInputChange?: ((...args: any[]) => any) | undefined;
    onInputClick?: ((...args: any[]) => any) | undefined;
}, {
    placeholder: string;
    modelValue: string | number;
    chooseText: string;
    otherValueText: string;
    dataList: dataList[];
    cardAmountMin: number;
    cardAmountMax: number;
    cardBuyMin: number;
    cardBuyMax: number;
    suffix: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutEcard: typeof _default;
    }
}