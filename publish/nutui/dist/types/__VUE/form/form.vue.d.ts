import type { WithInstall } from '../../utils';
import type { FormLabelPosition, FormRules, FormStarPosition } from './types';
export type FormProps = Partial<{
    modelValue: any;
    rules: FormRules;
    disabled: boolean;
    labelPosition: FormLabelPosition;
    starPosition: FormStarPosition;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: any;
    rules: FormRules;
    disabled: boolean;
    labelPosition: FormLabelPosition;
    starPosition: FormStarPosition;
}>>, {
    modelValue: () => {};
    rules: () => {};
    disabled: boolean;
    labelPosition: string;
    starPosition: string;
}>, {
    submit: () => boolean;
    reset: () => void;
    validate: (customProp?: string) => Promise<unknown>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    validate: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    modelValue: any;
    rules: FormRules;
    disabled: boolean;
    labelPosition: FormLabelPosition;
    starPosition: FormStarPosition;
}>>, {
    modelValue: () => {};
    rules: () => {};
    disabled: boolean;
    labelPosition: string;
    starPosition: string;
}>>> & {
    onValidate?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: any;
    rules: FormRules;
    labelPosition: FormLabelPosition;
    starPosition: FormStarPosition;
}, {}>, {
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutForm: typeof _default;
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
