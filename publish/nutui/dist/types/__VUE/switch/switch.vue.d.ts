import type { WithInstall } from '../../utils';
export type SwitchProps = Partial<{
    modelValue: string | number | boolean;
    disabled: boolean;
    activeColor: string;
    inactiveColor: string;
    activeText: string;
    inactiveText: string;
    activeValue: string | number | boolean;
    inactiveValue: string | number | boolean;
    loading: boolean;
    disable: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: string | number | boolean;
    disabled: boolean;
    activeColor: string;
    inactiveColor: string;
    activeText: string;
    inactiveText: string;
    activeValue: string | number | boolean;
    inactiveValue: string | number | boolean;
    loading: boolean;
    disable: boolean;
}>>, {
    modelValue: boolean;
    disabled: boolean;
    activeColor: string;
    inactiveColor: string;
    activeText: string;
    inactiveText: string;
    activeValue: boolean;
    inactiveValue: boolean;
    loading: boolean;
    disable: boolean;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: (...args: any[]) => void;
    "update:modelValue": (...args: any[]) => void;
    "update:loading": (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: string | number | boolean;
    disabled: boolean;
    activeColor: string;
    inactiveColor: string;
    activeText: string;
    inactiveText: string;
    activeValue: string | number | boolean;
    inactiveValue: string | number | boolean;
    loading: boolean;
    disable: boolean;
}>>, {
    modelValue: boolean;
    disabled: boolean;
    activeColor: string;
    inactiveColor: string;
    activeText: string;
    inactiveText: string;
    activeValue: boolean;
    inactiveValue: boolean;
    loading: boolean;
    disable: boolean;
}>>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:loading"?: ((...args: any[]) => any) | undefined;
}, {
    loading: boolean;
    disabled: boolean;
    activeColor: string;
    activeText: string;
    modelValue: string | number | boolean;
    inactiveColor: string;
    disable: boolean;
    inactiveText: string;
    activeValue: string | number | boolean;
    inactiveValue: string | number | boolean;
}, {}>, {
    icon?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutSwitch: typeof _default;
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
