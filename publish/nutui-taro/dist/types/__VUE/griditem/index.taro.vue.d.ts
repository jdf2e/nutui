
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    text: {
        type: StringConstructor;
    };
}, any, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    text: {
        type: StringConstructor;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutGridItem: typeof _default;
  }
}