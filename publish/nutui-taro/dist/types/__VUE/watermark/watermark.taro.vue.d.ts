import type { WithInstall } from '../../utils';
export type WatermarkProps = Partial<{
    gapX: number;
    gapY: number;
    zIndex: number;
    width: number;
    height: number;
    rotate: number;
    image: string;
    imageWidth: number;
    imageHeight: number;
    content: string | string[];
    fontColor: string;
    fontStyle: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string | number;
    fullPage: boolean;
}>;
declare const _default: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    gapX: number;
    gapY: number;
    zIndex: number;
    width: number;
    height: number;
    rotate: number;
    image: string;
    imageWidth: number;
    imageHeight: number;
    content: string | string[];
    fontColor: string;
    fontStyle: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string | number;
    fullPage: boolean;
}>>, {
    gapX: number;
    gapY: number;
    zIndex: number;
    width: number;
    height: number;
    rotate: number;
    imageWidth: number;
    imageHeight: number;
    content: string;
    fontColor: string;
    fontStyle: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: number;
    fullPage: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    gapX: number;
    gapY: number;
    zIndex: number;
    width: number;
    height: number;
    rotate: number;
    image: string;
    imageWidth: number;
    imageHeight: number;
    content: string | string[];
    fontColor: string;
    fontStyle: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: string | number;
    fullPage: boolean;
}>>, {
    gapX: number;
    gapY: number;
    zIndex: number;
    width: number;
    height: number;
    rotate: number;
    imageWidth: number;
    imageHeight: number;
    content: string;
    fontColor: string;
    fontStyle: string;
    fontFamily: string;
    fontWeight: string;
    fontSize: number;
    fullPage: boolean;
}>>>, {
    zIndex: number;
    content: string | string[];
    fontFamily: string;
    fontSize: string | number;
    fontStyle: string;
    fontWeight: string;
    height: number;
    rotate: number;
    width: number;
    gapX: number;
    gapY: number;
    imageWidth: number;
    imageHeight: number;
    fontColor: string;
    fullPage: boolean;
}, {}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutWatermark: typeof _default;
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
