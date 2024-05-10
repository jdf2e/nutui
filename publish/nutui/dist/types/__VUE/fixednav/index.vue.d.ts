import { PropType } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    navList: {
        default: () => never[];
        type: PropType<any[]>;
    };
    activeColor: {
        default: string;
        type: StringConstructor;
    };
    activeText: {
        default: string;
        type: StringConstructor;
    };
    unActiveText: {
        default: string;
        type: StringConstructor;
    };
    position: {
        default: () => {
            top: string;
            bottom: string;
        };
        type: ObjectConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        "nut-fixed-nav": boolean;
        active: boolean;
    }>;
    updateValue: (value?: boolean) => void;
    selected: (item: any, event: Event) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
    current: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "selected")[], "update:visible" | "selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    navList: {
        default: () => never[];
        type: PropType<any[]>;
    };
    activeColor: {
        default: string;
        type: StringConstructor;
    };
    activeText: {
        default: string;
        type: StringConstructor;
    };
    unActiveText: {
        default: string;
        type: StringConstructor;
    };
    position: {
        default: () => {
            top: string;
            bottom: string;
        };
        type: ObjectConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    visible: boolean;
    overlay: boolean;
    position: Record<string, any>;
    navList: any[];
    activeColor: string;
    activeText: string;
    unActiveText: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutFixedNav: typeof _default;
    }
}