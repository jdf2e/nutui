
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
}, any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
    };
    to: {
        type: (ObjectConstructor | StringConstructor)[];
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    replace: boolean;
    url: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutGridItem: typeof _default;
  }
}