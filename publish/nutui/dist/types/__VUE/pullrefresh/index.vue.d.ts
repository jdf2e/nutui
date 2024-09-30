import { CSSProperties } from 'vue';
type PullRefreshStatus = 'normal' | 'loading' | 'loosing' | 'pulling' | 'complete';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    pullingTxt: {
        type: StringConstructor;
        default: string;
    };
    loosingTxt: {
        type: StringConstructor;
        default: string;
    };
    loadingTxt: {
        type: StringConstructor;
        default: string;
    };
    completeTxt: {
        type: StringConstructor;
        default: string;
    };
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    pullDistance: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    completeDuration: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    touchStart: (event: TouchEvent) => void;
    touchMove: (event: TouchEvent) => void;
    touchEnd: () => void;
    getStyle: import("vue").ComputedRef<{
        transitionDuration: string;
        transform: string;
    }>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    getHeightStyle: import("vue").ComputedRef<CSSProperties>;
    getPullStatus: import("vue").ComputedRef<any>;
    isPullRefresh: import("vue").Ref<{
        valueOf: () => boolean;
    }, {
        valueOf: () => boolean;
    }>;
    distance: import("vue").Ref<{
        toString: (radix?: number | undefined) => string;
        toFixed: (fractionDigits?: number | undefined) => string;
        toExponential: (fractionDigits?: number | undefined) => string;
        toPrecision: (precision?: number | undefined) => string;
        valueOf: () => number;
        toLocaleString: {
            (locales?: string | string[] | undefined, options?: Intl.NumberFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined): string;
        };
    }, {
        toString: (radix?: number | undefined) => string;
        toFixed: (fractionDigits?: number | undefined) => string;
        toExponential: (fractionDigits?: number | undefined) => string;
        toPrecision: (precision?: number | undefined) => string;
        valueOf: () => number;
        toLocaleString: {
            (locales?: string | string[] | undefined, options?: Intl.NumberFormatOptions | undefined): string;
            (locales?: Intl.LocalesArgument, options?: Intl.NumberFormatOptions | undefined): string;
        };
    }>;
    status: import("vue").Ref<PullRefreshStatus, PullRefreshStatus>;
    scroller: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "refresh")[], "change" | "update:modelValue" | "refresh", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    pullingTxt: {
        type: StringConstructor;
        default: string;
    };
    loosingTxt: {
        type: StringConstructor;
        default: string;
    };
    loadingTxt: {
        type: StringConstructor;
        default: string;
    };
    completeTxt: {
        type: StringConstructor;
        default: string;
    };
    headHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    pullDistance: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    completeDuration: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onRefresh?: ((...args: any[]) => any) | undefined;
}>, {
    duration: string | number;
    modelValue: boolean;
    pullingTxt: string;
    loosingTxt: string;
    loadingTxt: string;
    completeTxt: string;
    headHeight: string | number;
    pullDistance: string | number;
    completeDuration: number;
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
        style: import("vue").ComputedRef<CSSProperties>;
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
        NutPullRefresh: typeof _default;
    }
}