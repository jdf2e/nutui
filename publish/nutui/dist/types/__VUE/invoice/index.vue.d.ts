
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    formValue: {
        type: ObjectConstructor;
        default: {};
    };
    submit: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    formRef: import("vue").Ref<any>;
    list: any;
    submitFun: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("submit" | "onSubmit" | "scrollBottom")[], "submit" | "onSubmit" | "scrollBottom", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: ArrayConstructor;
        default: () => never[];
    };
    formValue: {
        type: ObjectConstructor;
        default: {};
    };
    submit: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onSubmit?: ((...args: any[]) => any) | undefined;
    onOnSubmit?: ((...args: any[]) => any) | undefined;
    onScrollBottom?: ((...args: any[]) => any) | undefined;
}, {
    data: unknown[];
    submit: boolean;
    formValue: Record<string, any>;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutInvoice: typeof _default;
  }
}