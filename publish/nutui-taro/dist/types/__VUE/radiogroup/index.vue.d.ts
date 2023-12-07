
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    textPosition: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    direction: {
        type: StringConstructor;
        default: string;
    };
    textPosition: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean;
    direction: string;
    textPosition: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutRadioGroup: typeof _default;
  }
}