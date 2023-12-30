
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    lock: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    swipeGroupRef: import("vue").Ref<null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    lock: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    lock: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSwipeGroup: typeof _default;
  }
}