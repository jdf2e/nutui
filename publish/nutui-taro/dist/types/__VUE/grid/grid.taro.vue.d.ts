import type { WithInstall } from '../../utils';
import { type GridDirection } from './types';
export type GridProps = Partial<{
    columnNum: string | number;
    border: boolean;
    gutter: string | number;
    center: boolean;
    square: boolean;
    reverse: boolean;
    direction: GridDirection;
    clickable: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    columnNum: string | number;
    border: boolean;
    gutter: string | number;
    center: boolean;
    square: boolean;
    reverse: boolean;
    direction: GridDirection;
    clickable: boolean;
}>>, {
    columnNum: number;
    border: boolean;
    gutter: number;
    center: boolean;
    square: boolean;
    reverse: boolean;
    clickable: boolean;
}>>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    columnNum: string | number;
    border: boolean;
    gutter: string | number;
    center: boolean;
    square: boolean;
    reverse: boolean;
    direction: GridDirection;
    clickable: boolean;
}>>, {
    columnNum: number;
    border: boolean;
    gutter: number;
    center: boolean;
    square: boolean;
    reverse: boolean;
    clickable: boolean;
}>>> & Readonly<{}>, {
    square: boolean;
    reverse: boolean;
    center: boolean;
    border: boolean;
    gutter: string | number;
    columnNum: string | number;
    clickable: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>, {
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutGrid: typeof _default;
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
