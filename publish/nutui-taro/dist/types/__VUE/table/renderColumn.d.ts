
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    slots: {
        type: ArrayConstructor;
        default: () => never[];
    };
    record: {
        type: ObjectConstructor;
        default: () => {};
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    slots: {
        type: ArrayConstructor;
        default: () => never[];
    };
    record: {
        type: ObjectConstructor;
        default: () => {};
    };
}>>, {
    slots: unknown[];
    record: Record<string, any>;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTable: typeof _default;
    }
}