
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {
    translate: (keyPath: string, ...args: unknown[]) => any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    beforeScrollTop: import("vue").Ref<number, number>;
    isInfiniting: import("vue").Ref<boolean, boolean>;
    y: import("vue").Ref<number, number>;
    x: import("vue").Ref<number, number>;
    distance: import("vue").Ref<number, number>;
    scroller: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "scrollChange" | "loadMore")[], "update:modelValue" | "scrollChange" | "loadMore", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onScrollChange?: ((...args: any[]) => any) | undefined;
    onLoadMore?: ((...args: any[]) => any) | undefined;
}>, {
    modelValue: boolean;
    hasMore: boolean;
    threshold: number;
    loadTxt: string;
    loadMoreTxt: string;
    useCapture: boolean;
}, {}, {
    Loading: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutInfiniteLoading: typeof _default;
    }
}