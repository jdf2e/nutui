import type { WithInstall } from '../../utils';
import { StarFillN } from '@nutui/icons-vue-taro';
export type RateProps = Partial<{
    count: string | number;
    modelValue: string | number;
    customIcon: any;
    size: string | number;
    activeColor: string;
    voidColor: string;
    readonly: boolean;
    disabled: boolean;
    allowHalf: boolean;
    spacing: string | number;
}>;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    count: string | number;
    modelValue: string | number;
    customIcon: any;
    size: string | number;
    activeColor: string;
    voidColor: string;
    readonly: boolean;
    disabled: boolean;
    allowHalf: boolean;
    spacing: string | number;
}>>, {
    count: number;
    modelValue: number;
    customIcon: () => typeof StarFillN;
    activeColor: string;
    voidColor: string;
    readonly: boolean;
    disabled: boolean;
    allowHalf: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    count: string | number;
    modelValue: string | number;
    customIcon: any;
    size: string | number;
    activeColor: string;
    voidColor: string;
    readonly: boolean;
    disabled: boolean;
    allowHalf: boolean;
    spacing: string | number;
}>>, {
    count: number;
    modelValue: number;
    customIcon: () => typeof StarFillN;
    activeColor: string;
    voidColor: string;
    readonly: boolean;
    disabled: boolean;
    allowHalf: boolean;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    activeColor: string;
    modelValue: string | number;
    count: string | number;
    readonly: boolean;
    customIcon: any;
    voidColor: string;
    allowHalf: boolean;
}, {}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutRate: typeof _default;
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
