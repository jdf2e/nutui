import { StarFillN } from '@nutui/icons-vue-taro';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    count: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    customIcon: {
        type: ObjectConstructor;
        default: () => typeof StarFillN;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    voidColor: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
}, {
    onClick: (e: number, index: number) => void;
    pxCheck: (value?: string | number | undefined) => string | undefined;
    rateRefs: import("vue").Ref<HTMLElement[]>;
    refRandomId: string;
    renderIcon: (icon: import("vue").Component, props?: any) => "" | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    disabled: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    count: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    customIcon: {
        type: ObjectConstructor;
        default: () => typeof StarFillN;
    };
    size: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    voidColor: {
        type: StringConstructor;
        default: string;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    allowHalf: {
        type: BooleanConstructor;
        default: boolean;
    };
    spacing: {
        type: (NumberConstructor | StringConstructor)[];
        default: undefined;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    size: string | number;
    activeColor: string;
    modelValue: string | number;
    count: string | number;
    readonly: boolean;
    customIcon: Record<string, any>;
    voidColor: string;
    allowHalf: boolean;
    spacing: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutRate: typeof _default;
    }
}