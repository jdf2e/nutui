import { PropType, CSSProperties } from 'vue';
type StickyPosition = 'top' | 'bottom';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<StickyPosition>;
        default: string;
    };
    top: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    bottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    container: {
        type: PropType<Element>;
        default: null;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, {
    rootRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    rootStyle: import("vue").ComputedRef<CSSProperties | undefined>;
    stickyRef: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
    stickyStyle: import("vue").ComputedRef<CSSProperties>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    position: {
        type: PropType<StickyPosition>;
        default: string;
    };
    top: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    bottom: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    container: {
        type: PropType<Element>;
        default: null;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    bottom: string | number;
    top: string | number;
    zIndex: string | number;
    position: StickyPosition;
    container: Element;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSticky: typeof _default;
    }
}