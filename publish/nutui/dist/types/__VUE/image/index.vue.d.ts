import { PropType, CSSProperties } from 'vue';
import { ImageFit } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    src: StringConstructor;
    fit: {
        type: PropType<ImageFit>;
        default: string;
    };
    position: {
        type: PropType<string>;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    radius: (NumberConstructor | StringConstructor)[];
    showError: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    imageClick: (event: Event) => void;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    styles: import("vue").ComputedRef<CSSProperties>;
    stylebox: import("vue").ComputedRef<{
        height?: string | undefined;
        width?: string | undefined;
        overflow?: string | undefined;
        borderRadius?: any;
    }>;
    error: () => void;
    load: () => void;
    show: import("vue").Ref<boolean>;
    imgRef: import("vue").Ref<null>;
    loading: import("vue").Ref<boolean>;
    isError: import("vue").Ref<boolean>;
    slotLoding: import("vue").Ref<import("vue").Slot<any> | undefined>;
    slotError: import("vue").Ref<import("vue").Slot<any> | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "error" | "load")[], "click" | "error" | "load", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    src: StringConstructor;
    fit: {
        type: PropType<ImageFit>;
        default: string;
    };
    position: {
        type: PropType<string>;
        default: string;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    width: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: StringConstructor;
        default: string;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    radius: (NumberConstructor | StringConstructor)[];
    showError: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLoading: {
        type: BooleanConstructor;
        default: boolean;
    };
    lazyLoad: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onLoad?: ((...args: any[]) => any) | undefined;
    onError?: ((...args: any[]) => any) | undefined;
}, {
    round: boolean;
    width: string;
    height: string;
    position: string;
    fit: ImageFit;
    alt: string;
    showError: boolean;
    showLoading: boolean;
    lazyLoad: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutImage: typeof _default;
    }
}