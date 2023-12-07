
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<any, any, any, import("vue").ComputedOptions, import("vue").MethodOptions, any, any, any, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<any>, {} | {
    [x: string]: any;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutPicker: typeof _default;
  }
}