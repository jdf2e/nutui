import { PropType } from 'vue';
export type CategoryType = {
    catName?: string;
    [key: string]: any;
};

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: PropType<CategoryType>;
        default: never[];
    };
}, {
    getChildList: (index: any) => void;
    checkIndex: import("vue").Ref<number>;
    categoryLeft: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    category: {
        type: PropType<CategoryType>;
        default: never[];
    };
}>>, {
    type: string;
    category: CategoryType;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCategory: typeof _default;
    }
}