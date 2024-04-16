import type { WithInstall } from '../../utils';
export type CountdownProps = Partial<{
    modelValue: Record<string, string>;
    paused: boolean;
    startTime: number | string;
    endTime: number | string;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
    time: number | string;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: Record<string, string>;
    paused: boolean;
    startTime: string | number;
    endTime: string | number;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
    time: string | number;
}>>, {
    paused: boolean;
    startTime: string;
    endTime: string;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
    time: number;
}>, {
    start: () => void;
    pause: () => void;
    reset: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    input: (...args: any[]) => void;
    end: (...args: any[]) => void;
    paused: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    restart: (...args: any[]) => void;
    onEnd: (...args: any[]) => void;
    onRestart: (...args: any[]) => void;
    onPaused: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: Record<string, string>;
    paused: boolean;
    startTime: string | number;
    endTime: string | number;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
    time: string | number;
}>>, {
    paused: boolean;
    startTime: string;
    endTime: string;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
    time: number;
}>>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEnd?: ((...args: any[]) => any) | undefined;
    onRestart?: ((...args: any[]) => any) | undefined;
    onPaused?: ((...args: any[]) => any) | undefined;
    onOnEnd?: ((...args: any[]) => any) | undefined;
    onOnRestart?: ((...args: any[]) => any) | undefined;
    onOnPaused?: ((...args: any[]) => any) | undefined;
}, {
    time: string | number;
    paused: boolean;
    startTime: string | number;
    endTime: string | number;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
}, {}>, {
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutCountdown: typeof _default;
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
