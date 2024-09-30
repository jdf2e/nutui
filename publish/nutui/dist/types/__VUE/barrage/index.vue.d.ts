
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    danmu: {
        type: ArrayConstructor;
        default: () => never[];
    };
    frequency: {
        type: NumberConstructor;
        default: number;
    };
    speeds: {
        type: NumberConstructor;
        default: number;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    classTime: number;
    danmuList: any;
    dmBody: import("vue").Ref<HTMLDivElement, HTMLDivElement>;
    dmContainer: import("vue").Ref<HTMLDivElement, HTMLDivElement>;
    add: (word: string) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    danmu: {
        type: ArrayConstructor;
        default: () => never[];
    };
    frequency: {
        type: NumberConstructor;
        default: number;
    };
    speeds: {
        type: NumberConstructor;
        default: number;
    };
    rows: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    top: number;
    rows: number;
    loop: boolean;
    danmu: unknown[];
    frequency: number;
    speeds: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutBarrage: typeof _default;
    }
}