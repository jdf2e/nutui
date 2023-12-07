export declare const component: (tag: string) => {
    props: {
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
    };
    setup(props: any, { slots }: any): () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
};
