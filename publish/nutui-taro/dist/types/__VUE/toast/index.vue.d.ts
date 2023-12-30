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
    toastBodyClass: import("vue").ComputedRef<any[]>;
    toastIconWrapperClass: import("vue").ComputedRef<(string | {
        'nut-toast-icon-no-animation': boolean;
    })[]>;
    onAfterLeave: () => void;
    renderIcon: (icon: Component, props?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | "";
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
    size: string | number;
    title: string;
    center: boolean;
    duration: number;
    closeOnClickOverlay: boolean;
    type: string;
    cover: boolean;
    bottom: string;
    icon: Component;
    bgColor: string;
    textAlignCenter: boolean;
    loadingRotate: boolean;
    coverColor: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutToast: typeof _default;
  }
}