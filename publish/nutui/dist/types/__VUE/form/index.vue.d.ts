
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    rules: {
        type: import("vue").PropType<import("./types").FormRules>;
        default: () => {};
    };
    labelPosition: {
        type: import("vue").PropType<import("../formitem/types").FormItemLabelPosition>;
        default: string;
    };
    starPosition: {
        type: import("vue").PropType<import("../formitem/types").FormItemStarPosition>;
        default: string;
    };
}, {
    validate: (customProp?: string) => Promise<unknown>;
    reset: () => void;
    submit: () => boolean;
    formErrorTip: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ObjectConstructor;
        default: () => {};
    };
    rules: {
        type: import("vue").PropType<import("./types").FormRules>;
        default: () => {};
    };
    labelPosition: {
        type: import("vue").PropType<import("../formitem/types").FormItemLabelPosition>;
        default: string;
    };
    starPosition: {
        type: import("vue").PropType<import("../formitem/types").FormItemStarPosition>;
        default: string;
    };
}>> & {
    [x: `on${Capitalize<string>}`]: ((...args: any[]) => any) | undefined;
}, {
    modelValue: Record<string, any>;
    rules: import("./types").FormRules;
    labelPosition: import("../formitem/types").FormItemLabelPosition;
    starPosition: import("../formitem/types").FormItemStarPosition;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutForm: typeof _default;
    }
}