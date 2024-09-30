import type { WithInstall } from '../../utils';
import type { ButtonShape, ButtonType, ButtonSize } from './types';
export type ButtonProps = Partial<{
    color: string;
    shape: ButtonShape;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: ButtonType;
    size: ButtonSize;
    block: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    color: string;
    shape: ButtonShape;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: ButtonType;
    size: ButtonSize;
    block: boolean;
}>>, {
    color: string;
    shape: string;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: string;
    size: string;
    block: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    color: string;
    shape: ButtonShape;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: ButtonType;
    size: ButtonSize;
    block: boolean;
}>>, {
    color: string;
    shape: string;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: string;
    size: string;
    block: boolean;
}>>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
}>, {
    color: string;
    shape: ButtonShape;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: ButtonType;
    size: ButtonSize;
    block: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    icon?(_: {}): any;
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutButton: typeof _default;
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
