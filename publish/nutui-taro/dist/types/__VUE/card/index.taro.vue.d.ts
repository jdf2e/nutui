
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    imgUrl: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    price: {
        type: StringConstructor;
        default: string;
    };
    vipPrice: {
        type: StringConstructor;
        default: string;
    };
    shopDesc: {
        type: StringConstructor;
        default: string;
    };
    delivery: {
        type: StringConstructor;
        default: string;
    };
    shopName: {
        type: StringConstructor;
        default: string;
    };
    isNeedPrice: {
        type: BooleanConstructor;
        default: boolean;
    };
}, unknown, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    imgUrl: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    price: {
        type: StringConstructor;
        default: string;
    };
    vipPrice: {
        type: StringConstructor;
        default: string;
    };
    shopDesc: {
        type: StringConstructor;
        default: string;
    };
    delivery: {
        type: StringConstructor;
        default: string;
    };
    shopName: {
        type: StringConstructor;
        default: string;
    };
    isNeedPrice: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    title: string;
    price: string;
    imgUrl: string;
    vipPrice: string;
    shopDesc: string;
    delivery: string;
    shopName: string;
    isNeedPrice: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCard: typeof _default;
    }
}