import { PropType, ComputedRef } from 'vue';
import type { InputType, InputAlignType, InputFormatTrigger, ConfirmTextType } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: PropType<InputType>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    inputAlign: {
        type: PropType<InputAlignType>;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTrigger: {
        type: PropType<InputFormatTrigger>;
        default: string;
    };
    formatter: {
        type: PropType<(value: string) => string>;
        default: null;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmType: {
        type: PropType<ConfirmTextType>;
        default: string;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClearIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
}, {
    renderInput: (type: InputType) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    inputRef: import("vue").Ref<any>;
    active: import("vue").Ref<boolean>;
    classes: ComputedRef<{
        [x: string]: boolean;
    }>;
    styles: ComputedRef<any>;
    disabled: ComputedRef<boolean>;
    onInput: (event: Event) => void;
    onFocus: (event: Event) => void;
    onBlur: (event: Event) => void;
    clear: (event: Event) => void;
    startComposing: ({ target }: Event) => void;
    endComposing: ({ target }: Event) => void;
    onClick: (event: MouseEvent) => void;
    onClickInput: (event: MouseEvent) => void;
    focus: () => void;
    blur: () => void;
    select: () => void;
    onKeyup: (e: KeyboardEvent) => void;
    getModelValue: () => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clear" | "blur" | "focus" | "keypress" | "update:modelValue" | "clickInput" | "confirm")[], "click" | "clear" | "blur" | "focus" | "keypress" | "update:modelValue" | "clickInput" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<InputType>;
        default: string;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    inputAlign: {
        type: PropType<InputAlignType>;
        default: string;
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    formatTrigger: {
        type: PropType<InputFormatTrigger>;
        default: string;
    };
    formatter: {
        type: PropType<(value: string) => string>;
        default: null;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    confirmType: {
        type: PropType<ConfirmTextType>;
        default: string;
    };
    error: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClearIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onKeypress?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onClickInput?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    type: InputType;
    class: string;
    error: boolean;
    border: boolean;
    placeholder: string;
    modelValue: string | number;
    required: boolean;
    maxLength: string | number;
    clearable: boolean;
    autofocus: boolean;
    readonly: boolean;
    inputAlign: InputAlignType;
    formatter: (value: string) => string;
    clearSize: string | number;
    formatTrigger: InputFormatTrigger;
    showWordLimit: boolean;
    confirmType: ConfirmTextType;
    showClearIcon: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutInput: typeof _default;
    }
}