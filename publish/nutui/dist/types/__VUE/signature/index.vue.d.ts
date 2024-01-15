
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    customClass: {
        type: StringConstructor;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeStyle: {
        type: StringConstructor;
        default: () => "#fff" | "#000";
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    unSupportTpl: {
        type: StringConstructor;
        default: string;
    };
}, {
    canvas: any;
    wrap: any;
    isCanvasSupported: () => boolean;
    confirm: () => void;
    clear: () => void;
    classes: import("vue").ComputedRef<{
        [x: string]: string | boolean;
        "nut-signature": boolean;
    }>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    canvasHeight: import("vue").Ref<number>;
    canvasWidth: import("vue").Ref<number>;
    ctx: import("vue").Ref<any>;
    isSupportTouch: import("vue").Ref<boolean>;
    events: import("vue").Ref<string[]>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "end" | "start" | "confirm" | "signing")[], "clear" | "end" | "start" | "confirm" | "signing", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    customClass: {
        type: StringConstructor;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeStyle: {
        type: StringConstructor;
        default: () => "#fff" | "#000";
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    unSupportTpl: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClear?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onEnd?: ((...args: any[]) => any) | undefined;
    onSigning?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    customClass: string;
    lineWidth: number;
    strokeStyle: string;
    unSupportTpl: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSignature: typeof _default;
    }
}