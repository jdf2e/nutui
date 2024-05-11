import type { WithInstall } from '../../utils';
export type BadgeProps = Partial<{
    value: string | number;
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    value: string | number;
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>>, {
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    value: string | number;
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>>, {
    max: number;
    dot: boolean;
    bubble: boolean;
    hidden: boolean;
    top: string;
    right: string;
    zIndex: number;
    color: string;
}>>>, {
    color: string;
    right: string;
    top: string;
    zIndex: number;
    hidden: boolean;
    dot: boolean;
    max: number;
    bubble: boolean;
}, {}>, {
    icon?(_: {}): any;
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutBadge: typeof _default;
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
