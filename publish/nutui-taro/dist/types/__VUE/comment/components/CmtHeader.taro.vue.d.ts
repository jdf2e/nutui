declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
}>, {
    handleClick: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "handleClick"[], "handleClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
}>> & Readonly<{
    onHandleClick?: ((...args: any[]) => any) | undefined;
}>, {
    info: Record<string, any>;
    type: string;
}, {}, {
    NutRate: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        disabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<string | number>;
        };
        activeColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        count: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        readonly: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        customIcon: {
            type: import("vue").PropType<any>;
            default: () => typeof import("@nutui/icons-vue-taro").StarFillN;
        };
        voidColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        allowHalf: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        spacing: {
            type: import("vue").PropType<string | number>;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        change: (...args: any[]) => void;
        "update:modelValue": (...args: any[]) => void;
    }, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        size: {
            type: import("vue").PropType<string | number>;
        };
        activeColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        modelValue: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        count: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        readonly: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        customIcon: {
            type: import("vue").PropType<any>;
            default: () => typeof import("@nutui/icons-vue-taro").StarFillN;
        };
        voidColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
        allowHalf: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        spacing: {
            type: import("vue").PropType<string | number>;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
        activeColor: string;
        modelValue: string | number;
        count: string | number;
        readonly: boolean;
        customIcon: any;
        voidColor: string;
        allowHalf: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
