export interface InputTarget extends HTMLInputElement {
    composing: boolean;
}

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    limitShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autosize: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    textareaRef: import("vue").Ref<any>;
    classes: import("vue").ComputedRef<{
        "nut-textarea": boolean;
        "nut-textarea--disabled": boolean;
    }>;
    styles: any;
    change: (event: Event) => void;
    focus: (event: Event) => void;
    blur: (event: Event) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
    startComposing: ({ target }: Event) => void;
    endComposing: ({ target }: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("blur" | "change" | "focus" | "update:modelValue")[], "blur" | "change" | "focus" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    textAlign: {
        type: StringConstructor;
        default: string;
    };
    limitShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    autosize: {
        type: (BooleanConstructor | ObjectConstructor)[];
        default: boolean;
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    onFocus?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string;
    rows: string | number;
    readonly: boolean;
    textAlign: string;
    placeholder: string;
    maxLength: string | number;
    autofocus: boolean;
    limitShow: boolean;
    autosize: boolean | Record<string, any>;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutTextarea: typeof _default;
  }
}