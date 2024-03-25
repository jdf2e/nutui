import type { WithInstall } from '../../utils';
export type TrendArrowProps = Partial<{
    rate: number;
    digits: number;
    showSign: boolean;
    showZero: boolean;
    arrowLeft: boolean;
    syncTextColor: boolean;
    textColor: string;
    riseColor: string;
    dropColor: string;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    rate: number;
    digits: number;
    showSign: boolean;
    showZero: boolean;
    arrowLeft: boolean;
    syncTextColor: boolean;
    textColor: string;
    riseColor: string;
    dropColor: string;
}>>, {
    rate: number;
    digits: number;
    showSign: boolean;
    showZero: boolean;
    arrowLeft: boolean;
    syncTextColor: boolean;
    textColor: string;
    riseColor: string;
    dropColor: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    rate: number;
    digits: number;
    showSign: boolean;
    showZero: boolean;
    arrowLeft: boolean;
    syncTextColor: boolean;
    textColor: string;
    riseColor: string;
    dropColor: string;
}>>, {
    rate: number;
    digits: number;
    showSign: boolean;
    showZero: boolean;
    arrowLeft: boolean;
    syncTextColor: boolean;
    textColor: string;
    riseColor: string;
    dropColor: string;
}>>>, {
    textColor: string;
    rate: number;
    digits: number;
    showSign: boolean;
    showZero: boolean;
    arrowLeft: boolean;
    syncTextColor: boolean;
    riseColor: string;
    dropColor: string;
}, {}>, {
    "up-icon"?(_: {}): any;
    "down-icon"?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutTrendArrow: typeof _default;
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
