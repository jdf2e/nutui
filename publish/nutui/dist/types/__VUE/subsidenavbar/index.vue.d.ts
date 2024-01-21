
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    style: import("vue").ComputedRef<{
        height: string;
    }>;
    handleClick: () => void;
    direction: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "titleClick"[], "titleClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onTitleClick?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    open: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSubSideNavbar: typeof _default;
    }
}