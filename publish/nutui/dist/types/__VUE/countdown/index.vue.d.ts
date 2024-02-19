
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    paused: {
        default: boolean;
        type: BooleanConstructor;
    };
    startTime: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: Date): boolean;
    };
    endTime: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: Date): boolean;
    };
    millisecond: {
        default: boolean;
        type: BooleanConstructor;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, {
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    start: () => void;
    pause: () => void;
    renderTime: import("vue").ComputedRef<string | {
        d: number;
        h: number;
        m: number;
        s: number;
        ms: number;
    }>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    reset: () => void;
    time: import("vue").Ref<string | number>;
    paused: import("vue").Ref<boolean>;
    modelValue: import("vue").Ref<Record<string, any>>;
    millisecond: import("vue").Ref<boolean>;
    format: import("vue").Ref<string>;
    autoStart: import("vue").Ref<boolean>;
    startTime: import("vue").Ref<string | number | undefined>;
    endTime: import("vue").Ref<string | number | undefined>;
    onInput: import("vue").Ref<((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined>;
    onEnd: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onRestart: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onPaused: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onOnEnd: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onOnRestart: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onOnPaused: import("vue").Ref<((...args: any[]) => any) | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("input" | "end" | "paused" | "update:modelValue" | "restart" | "onEnd" | "onRestart" | "onPaused")[], "input" | "end" | "paused" | "update:modelValue" | "restart" | "onEnd" | "onRestart" | "onPaused", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    paused: {
        default: boolean;
        type: BooleanConstructor;
    };
    startTime: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: Date): boolean;
    };
    endTime: {
        type: (NumberConstructor | StringConstructor)[];
        validator(v: Date): boolean;
    };
    millisecond: {
        default: boolean;
        type: BooleanConstructor;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
    autoStart: {
        type: BooleanConstructor;
        default: boolean;
    };
    time: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & {
    onInput?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onEnd?: ((...args: any[]) => any) | undefined;
    onRestart?: ((...args: any[]) => any) | undefined;
    onPaused?: ((...args: any[]) => any) | undefined;
    onOnEnd?: ((...args: any[]) => any) | undefined;
    onOnRestart?: ((...args: any[]) => any) | undefined;
    onOnPaused?: ((...args: any[]) => any) | undefined;
}, {
    time: string | number;
    paused: boolean;
    modelValue: Record<string, any>;
    millisecond: boolean;
    format: string;
    autoStart: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCountdown: typeof _default;
    }
}