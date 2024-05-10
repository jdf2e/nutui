import { PropType } from 'vue';
import { MenuItemOption } from '../menu/types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: StringConstructor;
    options: {
        type: PropType<MenuItemOption[]>;
        default: never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: PropType<unknown>;
    cols: {
        type: NumberConstructor;
        default: number;
    };
    activeTitleClass: StringConstructor;
    inactiveTitleClass: StringConstructor;
}, {
    style: import("vue").ComputedRef<{
        top: string;
        bottom?: undefined;
    } | {
        bottom: string;
        top?: undefined;
    }>;
    placeholderElementStyle: import("vue").ComputedRef<{
        top: string;
        height: string;
    } | {
        bottom: string;
        height: string;
    }>;
    renderTitle: () => any;
    state: {
        showPopup: boolean;
        showWrapper: boolean;
    };
    parent: any;
    toggle: (show?: boolean) => void;
    onClick: (option: MenuItemOption) => void;
    handleClose: () => void;
    handleClickOutside: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "change" | "close" | "update:modelValue")[], "open" | "change" | "close" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: StringConstructor;
    options: {
        type: PropType<MenuItemOption[]>;
        default: never[];
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: PropType<unknown>;
    cols: {
        type: NumberConstructor;
        default: number;
    };
    activeTitleClass: StringConstructor;
    inactiveTitleClass: StringConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    options: MenuItemOption[];
    cols: number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutMenuItem: typeof _default;
    }
}