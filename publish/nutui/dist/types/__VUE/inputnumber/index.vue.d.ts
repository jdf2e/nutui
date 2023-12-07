
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    inputWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    buttonSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    decimalPlaces: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    change: (event: Event) => void;
    blur: (event: Event) => void;
    focus: (event: Event) => void;
    add: (event: Event) => void;
    addAllow: (value?: number) => boolean;
    reduce: (event: Event) => void;
    reduceAllow: (value?: number) => boolean;
    pxCheck: (value?: string | number | undefined) => string | undefined;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reduce" | "add" | "change" | "update:modelValue" | "blur" | "focus" | "overlimit")[], "reduce" | "add" | "change" | "update:modelValue" | "blur" | "focus" | "overlimit", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    inputWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    buttonSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    min: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    max: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    step: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    decimalPlaces: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onReduce?: ((...args: any[]) => any) | undefined;
    onOverlimit?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    modelValue: string | number;
    min: string | number;
    max: string | number;
    step: string | number;
    readonly: boolean;
    inputWidth: string | number;
    buttonSize: string | number;
    decimalPlaces: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutInputNumber: typeof _default;
  }
}