import { Ref } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, {
    list: Ref<any>;
    count: Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>>, {
    offset: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSideNavbar: typeof _default;
    }
}