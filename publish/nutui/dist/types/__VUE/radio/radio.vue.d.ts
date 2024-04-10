import type { WithInstall } from '../../utils';
import { type RadioShape, type RadioButtonSize } from './types';
export type RadioProps = Partial<{
    disabled: boolean;
    shape: RadioShape;
    label: string | number | boolean;
    iconSize: string | number;
    size: RadioButtonSize;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    disabled: boolean;
    shape: RadioShape;
    label: string | number | boolean;
    iconSize: string | number;
    size: RadioButtonSize;
}>>, {
    disabled: boolean;
    shape: string;
    label: string;
    iconSize: string;
    size: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    disabled: boolean;
    shape: RadioShape;
    label: string | number | boolean;
    iconSize: string | number;
    size: RadioButtonSize;
}>>, {
    disabled: boolean;
    shape: string;
    label: string;
    iconSize: string;
    size: string;
}>>>, {
    shape: RadioShape;
    disabled: boolean;
    size: RadioButtonSize;
    label: string | number | boolean;
    iconSize: string | number;
}, {}>, {
    default?(_: {}): any;
    checkedIcon?(_: {}): any;
    icon?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutRadio: typeof _default;
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
