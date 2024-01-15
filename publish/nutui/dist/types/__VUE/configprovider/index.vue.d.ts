
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    theme: {
        type: StringConstructor;
        default: string;
    };
    themeVars: {
        type: ObjectConstructor;
        default: {};
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    theme: {
        type: StringConstructor;
        default: string;
    };
    themeVars: {
        type: ObjectConstructor;
        default: {};
    };
    tag: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    theme: string;
    themeVars: Record<string, any>;
    tag: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutConfigProvider: typeof _default;
    }
}