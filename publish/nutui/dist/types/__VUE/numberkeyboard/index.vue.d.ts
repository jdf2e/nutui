import { Ref, PropType } from 'vue';
export interface keys {
    id: number | string;
    type: string;
}

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customKey: {
        type: PropType<string[]>;
        default: () => never[];
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    randomKeys: {
        type: BooleanConstructor;
        default: boolean;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    clickKeyIndex: Ref<string | number | undefined>;
    defaultKey: () => keys[];
    closeBoard: () => void;
    onTouchEnd: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchstart: (item: {
        id: string | number;
        type: string;
    }, event: TouchEvent) => void;
    keysList: import("vue").ComputedRef<keys[]>;
    genCustomKeys: () => keys[];
    getBasicKeys: () => keys[];
    root: Ref<any>;
    show: Ref<boolean>;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("delete" | "input" | "blur" | "close" | "update:visible" | "update:modelValue")[], "delete" | "input" | "blur" | "close" | "update:visible" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customKey: {
        type: PropType<string[]>;
        default: () => never[];
    };
    modelValue: {
        type: StringConstructor;
        default: string;
    };
    maxlength: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    randomKeys: {
        type: BooleanConstructor;
        default: boolean;
    };
    popClass: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDelete?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    visible: boolean;
    lockScroll: boolean;
    type: string;
    popClass: string;
    modelValue: string;
    confirmText: string;
    maxlength: string | number;
    customKey: string[];
    randomKeys: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutNumberKeyboard: typeof _default;
  }
}