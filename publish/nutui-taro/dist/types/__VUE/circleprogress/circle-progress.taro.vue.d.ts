import type { WithInstall } from '../../utils';
import type { CircleProgressStrokeLinecap } from './types';
export type CircleProgressProps = Partial<{
    progress: string | number;
    strokeWidth: string | number;
    radius: string | number;
    strokeLinecap: CircleProgressStrokeLinecap;
    color: any;
    pathColor: string;
    clockwise: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    progress: string | number;
    strokeWidth: string | number;
    radius: string | number;
    strokeLinecap: CircleProgressStrokeLinecap;
    color: any;
    pathColor: string;
    clockwise: boolean;
}>>, {
    progress: number;
    strokeWidth: number;
    radius: number;
    strokeLinecap: string;
    color: string;
    pathColor: string;
    clockwise: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    progress: string | number;
    strokeWidth: string | number;
    radius: string | number;
    strokeLinecap: CircleProgressStrokeLinecap;
    color: any;
    pathColor: string;
    clockwise: boolean;
}>>, {
    progress: number;
    strokeWidth: number;
    radius: number;
    strokeLinecap: string;
    color: string;
    pathColor: string;
    clockwise: boolean;
}>>>, {
    color: any;
    progress: string | number;
    strokeLinecap: CircleProgressStrokeLinecap;
    strokeWidth: string | number;
    radius: string | number;
    pathColor: string;
    clockwise: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutCircleProgress: typeof _default;
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
