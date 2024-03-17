import type { WithInstall } from '../../utils';
export type BacktopProps = Partial<{
    bottom: number;
    right: number;
    elId: string;
    distance: number;
    zIndex: number;
    isAnimation: boolean;
    duration: number;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    bottom: number;
    right: number;
    elId: string;
    distance: number;
    zIndex: number;
    isAnimation: boolean;
    duration: number;
}>>, {
    bottom: number;
    right: number;
    elId: string;
    distance: number;
    zIndex: number;
    isAnimation: boolean;
    duration: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    bottom: number;
    right: number;
    elId: string;
    distance: number;
    zIndex: number;
    isAnimation: boolean;
    duration: number;
}>>, {
    bottom: number;
    right: number;
    elId: string;
    distance: number;
    zIndex: number;
    isAnimation: boolean;
    duration: number;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    bottom: number;
    right: number;
    zIndex: number;
    duration: number;
    elId: string;
    distance: number;
    isAnimation: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutBacktop: typeof _default;
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
