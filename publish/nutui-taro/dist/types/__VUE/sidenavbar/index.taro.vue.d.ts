import { Ref } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, {
    list: Ref<any, any>;
    count: Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    offset: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{}>, {
    offset: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSideNavbar: typeof _default;
    }
}