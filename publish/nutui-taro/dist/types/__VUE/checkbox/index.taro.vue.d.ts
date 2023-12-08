
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
        type: StringConstructor;
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
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    textPosition: {
        type: StringConstructor;
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
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    label: string;
    disabled: boolean;
    modelValue: boolean;
    shape: string;
    textPosition: string;
    iconSize: string | number;
    indeterminate: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutCheckbox: typeof _default;
  }
}