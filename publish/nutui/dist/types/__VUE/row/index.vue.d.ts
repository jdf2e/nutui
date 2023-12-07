
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    flexWrap: {
        type: StringConstructor;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    justify: {
        type: StringConstructor;
        default: string;
    };
    align: {
        type: StringConstructor;
        default: string;
    };
    flexWrap: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    type: string;
    justify: string;
    gutter: string | number;
    align: string;
    flexWrap: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutRow: typeof _default;
  }
}