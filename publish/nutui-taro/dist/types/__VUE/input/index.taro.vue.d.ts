import { PropType, ComputedRef } from 'vue';
import type { InputType, InputAlignType, InputFormatTrigger, ConfirmTextType, InputEvent } from './type';

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
    error: {
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
    adjustPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysSystem: {
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
    onInput: (event: Event) => void;
    onFocus: (event: Event) => void;
    onBlur: (event: Event) => void;
    clear: (event: Event) => void;
    startComposing: ({ target }: Event) => void;
    endComposing: ({ target }: Event) => void;
    onClick: (event: MouseEvent) => void;
    onClickInput: (event: MouseEvent) => void;
    onConfirm: (e: InputEvent) => void;
    onKeyup: (e: KeyboardEvent) => void;
    getModelValue: () => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "clear" | "update:modelValue" | "confirm" | "blur" | "focus" | "keypress" | "clickInput")[], "click" | "clear" | "update:modelValue" | "confirm" | "blur" | "focus" | "keypress" | "clickInput", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    error: {
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
    adjustPosition: {
        type: BooleanConstructor;
        default: boolean;
    };
    alwaysSystem: {
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
    onConfirm?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onClickInput?: ((...args: any[]) => any) | undefined;
}, {
    type: InputType;
    class: string;
    border: boolean;
    disabled: boolean;
    modelValue: string | number;
    required: boolean;
    readonly: boolean;
    formatter: (value: string) => string;
    error: boolean;
    placeholder: string;
    inputAlign: InputAlignType;
    maxLength: string | number;
    clearable: boolean;
    clearSize: string | number;
    formatTrigger: InputFormatTrigger;
    showWordLimit: boolean;
    autofocus: boolean;
    confirmType: ConfirmTextType;
    adjustPosition: boolean;
    alwaysSystem: boolean;
    showClearIcon: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutInput: typeof _default;
  }
}