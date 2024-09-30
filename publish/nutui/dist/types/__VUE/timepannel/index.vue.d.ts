
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    pannelKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        'nut-time-pannel--curr': boolean;
    }>;
    handlePannel: (pannelKey: number | string) => void;
    currentKey: import("vue").Ref<unknown, unknown>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    pannelKey: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    name: string;
    pannelKey: string | number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTimePannel: typeof _default;
    }
}