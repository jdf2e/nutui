import type { WithInstall } from '../../utils';
export interface InputTarget extends HTMLInputElement {
    composing?: boolean;
}
export type TextareaProps = Partial<{
    modelValue: string;
    textAlign: 'left' | 'center' | 'right';
    limitShow: boolean;
    maxLength: string | number;
    rows: string | number;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    autosize: boolean | Record<string, number>;
    autofocus: boolean;
}>;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: string;
    textAlign: "center" | "left" | "right";
    limitShow: boolean;
    maxLength: string | number;
    rows: string | number;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    autosize: boolean | Record<string, number>;
    autofocus: boolean;
}>>, {
    modelValue: string;
    limitShow: boolean;
    maxLength: string;
    rows: string;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    autosize: boolean;
    autofocus: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    blur: (...args: any[]) => void;
    change: (...args: any[]) => void;
    focus: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: string;
    textAlign: "center" | "left" | "right";
    limitShow: boolean;
    maxLength: string | number;
    rows: string | number;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    autosize: boolean | Record<string, number>;
    autofocus: boolean;
}>>, {
    modelValue: string;
    limitShow: boolean;
    maxLength: string;
    rows: string;
    placeholder: string;
    readonly: boolean;
    disabled: boolean;
    autosize: boolean;
    autofocus: boolean;
}>>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    placeholder: string;
    modelValue: string;
    maxLength: string | number;
    autofocus: boolean;
    readonly: boolean;
    limitShow: boolean;
    rows: string | number;
    autosize: boolean | Record<string, number>;
}, {}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutTextarea: typeof _default;
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
