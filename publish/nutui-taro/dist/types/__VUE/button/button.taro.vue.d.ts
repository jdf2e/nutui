import type { WithInstall } from '../../utils';
import type { ButtonShape, ButtonType, ButtonSize, ButtonFormType } from './types';
export type ButtonProps = Partial<{
    color: string;
    shape: ButtonShape;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: ButtonType;
    size: ButtonSize;
    block: boolean;
    formType: ButtonFormType;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    color: string;
    shape: ButtonShape;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: ButtonType;
    size: ButtonSize;
    block: boolean;
    formType: ButtonFormType;
}>>, {
    color: string;
    shape: string;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: string;
    size: string;
    block: boolean;
    formType: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
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
    formType: ButtonFormType;
}>>, {
    color: string;
    shape: string;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: string;
    size: string;
    block: boolean;
    formType: string;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    shape: ButtonShape;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: ButtonType;
    size: ButtonSize;
    block: boolean;
    formType: ButtonFormType;
}, {}>, {
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
