import { Ref, ComputedRef } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {
    list: Ref<any, any>;
    phantom: Ref<any, any>;
    actualContent: Ref<any, any>;
    getTransform: () => string | undefined;
    visibleData: ComputedRef<any>;
    refRandomId: string;
    getContainerHeight: ComputedRef<number>;
    handleScrollEvent: (e: any) => Promise<void>;
    start: Ref<number, number>;
    originStartIndex: Ref<number, number>;
    scrollTop: Ref<number, number>;
    cachePositions: Ref<{
        index: number;
        top: number;
        bottom: number;
        height: number;
        dValue: number;
    }[], {
        index: number;
        top: number;
        bottom: number;
        height: number;
        dValue: number;
    }[]>;
    phantomHeight: Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scrollUp" | "scrollDown" | "scrollBottom")[], "scrollUp" | "scrollDown" | "scrollBottom", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    onScrollUp?: ((...args: any[]) => any) | undefined;
    onScrollDown?: ((...args: any[]) => any) | undefined;
    onScrollBottom?: ((...args: any[]) => any) | undefined;
}>, {
    height: number;
    margin: number;
    listData: unknown[];
    bufferSize: number;
    estimateRowHeight: number;
}, {}, {
    NutScrollView: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{}>, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutList: typeof _default;
    }
}