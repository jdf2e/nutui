import type { PropType } from 'vue';
export interface ActionSheetMenuItems {
    [key: PropertyKey]: any;
    name?: string;
    subname?: string;
    disable?: boolean;
    loading?: boolean;
    color?: string;
}

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    cancelTxt: {
        type: StringConstructor;
        default: string;
    };
    optionTag: {
        type: StringConstructor;
        default: string;
    };
    optionSubTag: {
        type: StringConstructor;
        default: string;
    };
    chooseTagValue: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    menuItems: {
        type: PropType<ActionSheetMenuItems[]>;
        default: () => never[];
    };
    closeAbled: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<import("../popup/types").PopupPosition>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: PropType<import("../popup/types").PopupCloseIconPosition>;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}, {
    slotDefault: boolean;
    isHighlight: (item: ActionSheetMenuItems) => string;
    cancelActionSheet: () => void;
    chooseItem: (item: ActionSheetMenuItems, index: number) => void;
    close: (e: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "cancel" | "close" | "choose")[], "update:visible" | "cancel" | "close" | "choose", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    cancelTxt: {
        type: StringConstructor;
        default: string;
    };
    optionTag: {
        type: StringConstructor;
        default: string;
    };
    optionSubTag: {
        type: StringConstructor;
        default: string;
    };
    chooseTagValue: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
    menuItems: {
        type: PropType<ActionSheetMenuItems[]>;
        default: () => never[];
    };
    closeAbled: {
        type: BooleanConstructor;
        default: boolean;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<import("../popup/types").PopupPosition>;
        default: string;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    style: {
        type: ObjectConstructor;
        default: () => {};
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: PropType<import("../popup/types").PopupCloseIconPosition>;
        default: string;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    teleportDisable: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlayClass: {
        type: StringConstructor;
        default: string;
    };
    overlayStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onChoose?: ((...args: any[]) => any) | undefined;
}, {
    round: boolean;
    color: string;
    style: Record<string, any>;
    title: string;
    transition: string;
    visible: boolean;
    zIndex: string | number;
    duration: string | number;
    lockScroll: boolean;
    overlayClass: string;
    overlayStyle: Record<string, any>;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    position: import("../popup/types").PopupPosition;
    popClass: string;
    closeable: boolean;
    closeIconPosition: import("../popup/types").PopupCloseIconPosition;
    destroyOnClose: boolean;
    teleport: string | Element;
    teleportDisable: boolean;
    safeAreaInsetBottom: boolean;
    cancelTxt: string;
    optionTag: string;
    optionSubTag: string;
    chooseTagValue: string;
    description: string;
    menuItems: ActionSheetMenuItems[];
    closeAbled: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutActionSheet: typeof _default;
    }
}