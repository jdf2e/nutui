import { Ref, ComputedRef } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    height: {
        type: NumberConstructor[];
        default: number;
    };
    listData: {
        type: ArrayConstructor;
        default: () => never[];
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
    };
    containerHeight: {
        type: NumberConstructor;
    };
    estimateRowHeight: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: NumberConstructor;
        default: number;
    };
}, {
    list: Ref<any>;
    phantom: Ref<any>;
    actualContent: Ref<any>;
    getTransform: () => string | undefined;
    visibleData: ComputedRef<any>;
    refRandomId: string;
    getContainerHeight: ComputedRef<number>;
    handleScrollEvent: (e: any) => Promise<void>;
    start: Ref<number>;
    originStartIndex: Ref<number>;
    scrollTop: Ref<number>;
    cachePositions: Ref<{
        index: number;
        top: number;
        bottom: number;
        height: number;
        dValue: number;
    }[]>;
    phantomHeight: Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scrollUp" | "scrollDown" | "scrollBottom")[], "scrollUp" | "scrollDown" | "scrollBottom", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: NumberConstructor[];
        default: number;
    };
    listData: {
        type: ArrayConstructor;
        default: () => never[];
    };
    bufferSize: {
        type: NumberConstructor;
        default: number;
    };
    containerHeight: {
        type: NumberConstructor;
    };
    estimateRowHeight: {
        type: NumberConstructor;
        default: number;
    };
    margin: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onScrollUp?: ((...args: any[]) => any) | undefined;
    onScrollDown?: ((...args: any[]) => any) | undefined;
    onScrollBottom?: ((...args: any[]) => any) | undefined;
}, {
    height: number;
    margin: number;
    listData: unknown[];
    bufferSize: number;
    estimateRowHeight: number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutList: typeof _default;
    }
}