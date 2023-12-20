
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    bottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    unactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    refRandomId: string;
    changeIndex: (index: number, active: number | string) => void;
    nutTabbarRef: import("vue").Ref<HTMLElement | null>;
    height: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "tabSwitch")[], "update:modelValue" | "tabSwitch", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    bottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    unactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onTabSwitch?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    bottom: boolean;
    size: string;
    safeAreaInsetBottom: boolean;
    modelValue: string | number;
    activeColor: string;
    placeholder: boolean;
    unactiveColor: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutTabbar: typeof _default;
  }
}