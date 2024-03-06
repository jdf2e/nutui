import type { WithInstall } from '../../utils';
import type { AnimateType, AnimateAction } from './types';
export type AnimateProps = Partial<{
    type: AnimateType;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
    duration: string | number;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    type: AnimateType;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
    duration: string | number;
}>>, {
    show: boolean;
    action: string;
    loop: boolean;
    duration: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    animate: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    type: AnimateType;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
    duration: string | number;
}>>, {
    show: boolean;
    action: string;
    loop: boolean;
    duration: number;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onAnimate?: ((...args: any[]) => any) | undefined;
}, {
    duration: string | number;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutAnimate: typeof _default;
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
