
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
}, {
    index: import("vue").ComputedRef<any>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    handleClickStep: () => void;
    dot: import("vue").Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickStep"[], "clickStep", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClickStep?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    content: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutStep: typeof _default;
  }
}