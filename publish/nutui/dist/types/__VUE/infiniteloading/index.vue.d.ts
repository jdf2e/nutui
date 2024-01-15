
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    loadTxt: {
        type: StringConstructor;
        default: string;
    };
    loadMoreTxt: {
        type: StringConstructor;
        default: string;
    };
    useCapture: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    translate: (keyPath: string, ...args: unknown[]) => any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    beforeScrollTop: import("vue").Ref<number>;
    isInfiniting: import("vue").Ref<boolean>;
    y: import("vue").Ref<number>;
    x: import("vue").Ref<number>;
    distance: import("vue").Ref<number>;
    scroller: import("vue").Ref<HTMLElement | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "scrollChange" | "loadMore")[], "update:modelValue" | "scrollChange" | "loadMore", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    hasMore: {
        type: BooleanConstructor;
        default: boolean;
    };
    threshold: {
        type: NumberConstructor;
        default: number;
    };
    loadTxt: {
        type: StringConstructor;
        default: string;
    };
    loadMoreTxt: {
        type: StringConstructor;
        default: string;
    };
    useCapture: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onScrollChange?: ((...args: any[]) => any) | undefined;
    onLoadMore?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: boolean;
    hasMore: boolean;
    threshold: number;
    loadTxt: string;
    loadMoreTxt: string;
    useCapture: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutInfiniteLoading: typeof _default;
    }
}