import { ArrowDown2, ArrowUp2 } from '@nutui/icons-vue-taro';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    style: import("vue").ComputedRef<{
        height: string;
    }>;
    handleClick: () => void;
    direction: import("vue").Ref<string, string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "titleClick"[], "titleClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onTitleClick?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    open: boolean;
}, {}, {
    ArrowDown2: typeof ArrowDown2;
    ArrowUp2: typeof ArrowUp2;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSubSideNavbar: typeof _default;
    }
}