
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: number | boolean;
        "nut-col": boolean;
    }>;
    style: import("vue").ComputedRef<{
        paddingLeft: string;
        paddingRight: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, never[], never, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    span: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>> & {}, {
    span: string | number;
    offset: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutCol: typeof _default;
  }
}