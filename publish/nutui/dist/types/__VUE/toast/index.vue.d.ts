import { PropType, Component } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    id: StringConstructor;
    msg: StringConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customClass: StringConstructor;
    bottom: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    icon: {
        type: PropType<Component>;
        default: null;
    };
    textAlignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingRotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    onClose: FunctionConstructor;
    unmount: FunctionConstructor;
    cover: {
        type: BooleanConstructor;
        default: boolean;
    };
    coverColor: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    state: {
        mounted: boolean;
    };
    hide: () => void;
    clickCover: () => void;
    hasIcon: import("vue").ComputedRef<boolean>;
    toastBodyClass: import("vue").ComputedRef<(string | {
        'nut-toast-center': boolean;
        'nut-toast-has-icon'?: undefined;
        'nut-toast-cover'?: undefined;
        'nut-toast-loading'?: undefined;
    } | {
        'nut-toast-has-icon': boolean;
        'nut-toast-center'?: undefined;
        'nut-toast-cover'?: undefined;
        'nut-toast-loading'?: undefined;
    } | {
        'nut-toast-cover': boolean;
        'nut-toast-center'?: undefined;
        'nut-toast-has-icon'?: undefined;
        'nut-toast-loading'?: undefined;
    } | {
        'nut-toast-loading': boolean;
        'nut-toast-center'?: undefined;
        'nut-toast-has-icon'?: undefined;
        'nut-toast-cover'?: undefined;
    } | undefined)[]>;
    toastIconWrapperClass: import("vue").ComputedRef<(string | {
        'nut-toast-icon-no-animation': boolean;
    })[]>;
    onAfterLeave: () => void;
    renderIcon: (icon: Component, props?: any) => "" | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    msg: StringConstructor;
    duration: {
        type: NumberConstructor;
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customClass: StringConstructor;
    bottom: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    icon: {
        type: PropType<Component>;
        default: null;
    };
    textAlignCenter: {
        type: BooleanConstructor;
        default: boolean;
    };
    loadingRotate: {
        type: BooleanConstructor;
        default: boolean;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    onClose: FunctionConstructor;
    unmount: FunctionConstructor;
    cover: {
        type: BooleanConstructor;
        default: boolean;
    };
    coverColor: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    size: string | number;
    title: string;
    icon: Component;
    bottom: string;
    center: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    cover: boolean;
    textAlignCenter: boolean;
    loadingRotate: boolean;
    bgColor: string;
    coverColor: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutToast: typeof _default;
    }
}