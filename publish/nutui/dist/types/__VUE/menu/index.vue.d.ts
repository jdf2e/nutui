import { PropType } from 'vue';
import { MenuDirection } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<MenuDirection>;
        default: string;
    };
    scrollFixed: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    titleClass: {
        type: StringConstructor;
        default: string;
    };
}, {
    toggleItem: (active: number) => void;
    children: import("vue").Reactive<any[]>;
    opened: import("vue").ComputedRef<boolean>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        'scroll-fixed': boolean;
    }>;
    barRef: import("vue").Ref<HTMLElement | undefined>;
    getClasses: (showPopup: boolean) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<MenuDirection>;
        default: string;
    };
    scrollFixed: {
        type: (NumberConstructor | BooleanConstructor | StringConstructor)[];
        default: boolean;
    };
    titleClass: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    duration: string | number;
    lockScroll: boolean;
    closeOnClickOverlay: boolean;
    overlay: boolean;
    direction: MenuDirection;
    activeColor: string;
    scrollFixed: string | number | boolean;
    titleClass: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutMenu: typeof _default;
    }
}