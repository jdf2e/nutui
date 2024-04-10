import type { WithInstall } from '../../utils';
import type { CellSize } from './types';
export type CellProps = Partial<{
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
    center: boolean;
    size: CellSize;
    to: string | object;
    replace: boolean;
    url: string;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
    center: boolean;
    size: CellSize;
    to: string | object;
    replace: boolean;
    url: string;
}>>, {
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string;
    center: boolean;
    size: string;
    replace: boolean;
    url: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
    center: boolean;
    size: CellSize;
    to: string | object;
    replace: boolean;
    url: string;
}>>, {
    title: string;
    subTitle: string;
    desc: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string;
    center: boolean;
    size: string;
    replace: boolean;
    url: string;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    size: CellSize;
    replace: boolean;
    title: string;
    desc: string;
    center: boolean;
    subTitle: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
    url: string;
}, {}>, {
    default?(_: {}): any;
    icon?(_: {}): any;
    title?(_: {}): any;
    desc?(_: {}): any;
    link?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutCell: typeof _default;
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
