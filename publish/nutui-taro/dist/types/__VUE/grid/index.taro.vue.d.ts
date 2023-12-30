
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<import("./common").GridDirection>;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, import("vue").RenderFunction, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, import("vue").EmitsOptions, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<import("./common").GridDirection>;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    reverse: boolean;
    center: boolean;
    border: boolean;
    square: boolean;
    columnNum: string | number;
    gutter: string | number;
    clickable: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutGrid: typeof _default;
  }
}