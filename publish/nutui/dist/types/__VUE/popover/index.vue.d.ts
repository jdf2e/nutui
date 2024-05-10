import { PropType, CSSProperties } from 'vue';
import { PopoverList, PopoverTheme, PopoverLocation } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: PropType<PopoverList[]>;
        default: never[];
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    location: {
        type: PropType<PopoverLocation>;
        default: string;
    };
    offset: {
        type: ArrayConstructor;
        default: number[];
    };
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickAction: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: boolean;
    };
    targetId: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    showPopup: import("vue").Ref<boolean>;
    openPopover: () => void;
    popoverArrow: import("vue").ComputedRef<string>;
    closePopover: () => void;
    chooseItem: (item: any, index: number) => void;
    popoverRef: import("vue").Ref<any>;
    popoverContentRef: import("vue").Ref<any>;
    getRootPosition: import("vue").ComputedRef<CSSProperties>;
    popoverArrowStyle: import("vue").ComputedRef<CSSProperties>;
    renderIcon: (icon: import("vue").Component, props?: any) => "" | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "open" | "close" | "choose" | "update")[], "update:visible" | "open" | "close" | "choose" | "update", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    list: {
        type: PropType<PopoverList[]>;
        default: never[];
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    location: {
        type: PropType<PopoverLocation>;
        default: string;
    };
    offset: {
        type: ArrayConstructor;
        default: number[];
    };
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: PropType<CSSProperties>;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickAction: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOutside: {
        type: BooleanConstructor;
        default: boolean;
    };
    targetId: {
        type: StringConstructor;
        default: string;
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    onChoose?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    duration: string | number;
    overlayClass: string;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    offset: unknown[];
    theme: PopoverTheme;
    list: PopoverList[];
    customClass: string;
    bgColor: string;
    location: PopoverLocation;
    arrowOffset: number;
    showArrow: boolean;
    closeOnClickAction: boolean;
    closeOnClickOutside: boolean;
    targetId: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutPopover: typeof _default;
    }
}