
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    title: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSideNavbarItem: typeof _default;
    }
}