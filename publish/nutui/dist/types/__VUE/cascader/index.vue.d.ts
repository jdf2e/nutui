import { Ref } from 'vue';
import { CascaderValue, CascaderOption } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: ArrayConstructor;
    visible: BooleanConstructor;
    title: StringConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    convertConfig: ObjectConstructor;
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
        type: import("vue").PropType<import("../popup/types").PopupPosition>;
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
        type: import("vue").PropType<import("../popup/types").PopupCloseIconPosition>;
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
    onChange: (value: CascaderValue, pathNodes: CascaderOption[]) => void;
    onPathChange: (pathNodes: CascaderOption[]) => void;
    innerValue: Ref<CascaderValue>;
    innerVisible: import("vue").WritableComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "change" | "update:modelValue" | "pathChange")[], "update:visible" | "change" | "update:modelValue" | "pathChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: ArrayConstructor;
    visible: BooleanConstructor;
    title: StringConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    convertConfig: ObjectConstructor;
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
        type: import("vue").PropType<import("../popup/types").PopupPosition>;
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
        type: import("vue").PropType<import("../popup/types").PopupCloseIconPosition>;
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
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPathChange?: ((...args: any[]) => any) | undefined;
}, {
    round: boolean;
    style: Record<string, any>;
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
    options: unknown[];
    lazy: boolean;
    valueKey: string;
    textKey: string;
    childrenKey: string;
    poppable: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCascader: typeof _default;
    }
}