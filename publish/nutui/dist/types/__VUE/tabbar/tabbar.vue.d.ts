import type { WithInstall } from '../../utils';
export type TabbarProps = Partial<{
    modelValue: number | string;
    bottom: boolean;
    unactiveColor: string;
    activeColor: string;
    safeAreaInsetBottom: boolean;
    placeholder: boolean;
    beforeSwitch: (data: any, active: string | number) => boolean | Promise<boolean>;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: string | number;
    bottom: boolean;
    unactiveColor: string;
    activeColor: string;
    safeAreaInsetBottom: boolean;
    placeholder: boolean;
    beforeSwitch: (data: any, active: string | number) => boolean | Promise<boolean>;
}>>, {
    modelValue: number;
    bottom: boolean;
    unactiveColor: string;
    activeColor: string;
    safeAreaInsetBottom: boolean;
    placeholder: boolean;
    beforeSwitch: () => true;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (...args: any[]) => void;
    tabSwitch: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: string | number;
    bottom: boolean;
    unactiveColor: string;
    activeColor: string;
    safeAreaInsetBottom: boolean;
    placeholder: boolean;
    beforeSwitch: (data: any, active: string | number) => boolean | Promise<boolean>;
}>>, {
    modelValue: number;
    bottom: boolean;
    unactiveColor: string;
    activeColor: string;
    safeAreaInsetBottom: boolean;
    placeholder: boolean;
    beforeSwitch: () => true;
}>>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onTabSwitch?: ((...args: any[]) => any) | undefined;
}, {
    bottom: boolean;
    safeAreaInsetBottom: boolean;
    placeholder: boolean;
    activeColor: string;
    modelValue: string | number;
    unactiveColor: string;
    beforeSwitch: (data: any, active: string | number) => boolean | Promise<boolean>;
}, {}>, {
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutTabbar: typeof _default;
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
