
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    current: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    progressDot: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickStep"[], "clickStep", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: StringConstructor;
        default: string;
    };
    current: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    progressDot: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClickStep?: ((...args: any[]) => any) | undefined;
}, {
    direction: string;
    current: string | number;
    progressDot: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSteps: typeof _default;
  }
}