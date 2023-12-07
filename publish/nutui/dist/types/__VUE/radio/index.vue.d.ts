
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    shape: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    iconSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>>, {
    label: string | number | boolean;
    disabled: boolean;
    shape: string;
    iconSize: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutRadio: typeof _default;
  }
}