import type { PropType } from 'vue';
import { CheckboxTextPosition, CheckboxShape } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    textPosition: {
        type: PropType<CheckboxTextPosition>;
        default: string;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: PropType<CheckboxShape>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    textPosition: {
        type: PropType<CheckboxTextPosition>;
        default: string;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    indeterminate: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: PropType<CheckboxShape>;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    shape: CheckboxShape;
    disabled: boolean;
    label: string;
    modelValue: boolean;
    textPosition: CheckboxTextPosition;
    iconSize: string | number;
    indeterminate: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCheckbox: typeof _default;
    }
}