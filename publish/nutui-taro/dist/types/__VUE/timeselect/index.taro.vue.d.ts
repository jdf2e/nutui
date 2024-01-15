
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    height: {
        type: StringConstructor[];
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    currentKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    currentTime: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lockScroll: {
        type: BooleanConstructor[];
        default: boolean;
    };
}, {
    popStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    close: () => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "update:visible")[], "select" | "update:visible", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        defalut: boolean;
    };
    height: {
        type: StringConstructor[];
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    currentKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    currentTime: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lockScroll: {
        type: BooleanConstructor[];
        default: boolean;
    };
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    visible: boolean;
    lockScroll: boolean;
    height: string;
    currentKey: string | number;
    currentTime: unknown[];
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTimeSelect: typeof _default;
    }
}