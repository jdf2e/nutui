
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    disable: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeText: {
        type: StringConstructor;
        default: string;
    };
    inactiveText: {
        type: StringConstructor;
        default: string;
    };
    activeValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    inactiveValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    style: import("vue").ComputedRef<{
        backgroundColor: string;
    }>;
    isActive: import("vue").ComputedRef<boolean>;
    onClick: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "update:loading")[], "change" | "update:modelValue" | "update:loading", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    disable: {
        type: BooleanConstructor;
        default: boolean;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeText: {
        type: StringConstructor;
        default: string;
    };
    inactiveText: {
        type: StringConstructor;
        default: string;
    };
    activeValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    inactiveValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:loading"?: ((...args: any[]) => any) | undefined;
}, {
    disable: boolean;
    loading: boolean;
    modelValue: string | number | boolean;
    activeColor: string;
    activeText: string;
    inactiveColor: string;
    inactiveText: string;
    activeValue: string | number | boolean;
    inactiveValue: string | number | boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSwitch: typeof _default;
  }
}