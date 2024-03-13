import type { WithInstall } from '../../utils';
export type InputNumberProps = Partial<{
    modelValue: string | number;
    inputWidth: string | number;
    buttonSize: string | number;
    min: string | number;
    max: string | number;
    step: string | number;
    decimalPlaces: string | number;
    disabled: boolean;
    readonly: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: string | number;
    inputWidth: string | number;
    buttonSize: string | number;
    min: string | number;
    max: string | number;
    step: string | number;
    decimalPlaces: string | number;
    disabled: boolean;
    readonly: boolean;
}>>, {
    modelValue: number;
    inputWidth: string;
    buttonSize: string;
    min: number;
    max: number;
    step: number;
    decimalPlaces: number;
    disabled: boolean;
    readonly: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    reduce: (...args: any[]) => void;
    add: (...args: any[]) => void;
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    overlimit: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: string | number;
    inputWidth: string | number;
    buttonSize: string | number;
    min: string | number;
    max: string | number;
    step: string | number;
    decimalPlaces: string | number;
    disabled: boolean;
    readonly: boolean;
}>>, {
    modelValue: number;
    inputWidth: string;
    buttonSize: string;
    min: number;
    max: number;
    step: number;
    decimalPlaces: number;
    disabled: boolean;
    readonly: boolean;
}>>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onReduce?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onOverlimit?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string | number;
    max: string | number;
    min: string | number;
    step: string | number;
    readonly: boolean;
    inputWidth: string | number;
    buttonSize: string | number;
    decimalPlaces: string | number;
}, {}>, {
    "left-icon"?(_: {}): any;
    "right-icon"?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutInputNumber: typeof _default;
    }
}
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
