import { Ref } from 'vue';
import type { PropType } from 'vue';
export interface dataList {
    price: string | number;
}

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    chooseText: {
        type: StringConstructor;
        default: string;
    };
    otherValueText: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: PropType<dataList[]>;
        default: () => never[];
    };
    cardAmountMin: {
        type: NumberConstructor;
        default: number;
    };
    cardAmountMax: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMin: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMax: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
}>, {
    handleClick: (item: {
        price: number | string;
    }, index: number) => void;
    changeStep: (value: number) => void;
    change: (event: Event) => void;
    inputClick: () => void;
    stepValue: Ref<number, number>;
    currentIndex: Ref<string | number | null, string | number | null>;
    inputValue: Ref<string | number | undefined, string | number | undefined>;
    money: Ref<string | number | undefined, string | number | undefined>;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "changeStep" | "inputChange" | "inputClick")[], "change" | "update:modelValue" | "changeStep" | "inputChange" | "inputClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    chooseText: {
        type: StringConstructor;
        default: string;
    };
    otherValueText: {
        type: StringConstructor;
        default: string;
    };
    dataList: {
        type: PropType<dataList[]>;
        default: () => never[];
    };
    cardAmountMin: {
        type: NumberConstructor;
        default: number;
    };
    cardAmountMax: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMin: {
        type: NumberConstructor;
        default: number;
    };
    cardBuyMax: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    suffix: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onChangeStep?: ((...args: any[]) => any) | undefined;
    onInputChange?: ((...args: any[]) => any) | undefined;
    onInputClick?: ((...args: any[]) => any) | undefined;
}>, {
    placeholder: string;
    modelValue: string | number;
    chooseText: string;
    otherValueText: string;
    dataList: dataList[];
    cardAmountMin: number;
    cardAmountMax: number;
    cardBuyMin: number;
    cardBuyMax: number;
    suffix: string;
}, {}, {
    NutInputNumber: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            max: {
                type: PropType<string | number>;
                default: number;
            };
            modelValue: {
                type: PropType<string | number>;
                default: number;
            };
            min: {
                type: PropType<string | number>;
                default: number;
            };
            step: {
                type: PropType<string | number>;
                default: number;
            };
            readonly: {
                type: PropType<boolean>;
                default: boolean;
            };
            inputWidth: {
                type: PropType<string | number>;
                default: string;
            };
            buttonSize: {
                type: PropType<string | number>;
                default: string;
            };
            decimalPlaces: {
                type: PropType<string | number>;
                default: number;
            };
        }>> & Readonly<{
            onBlur?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            onFocus?: ((...args: any[]) => any) | undefined;
            onReduce?: ((...args: any[]) => any) | undefined;
            onAdd?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onOverlimit?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            blur: (...args: any[]) => void;
            change: (...args: any[]) => void;
            focus: (...args: any[]) => void;
            reduce: (...args: any[]) => void;
            add: (...args: any[]) => void;
            "update:modelValue": (...args: any[]) => void;
            overlimit: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            max: {
                type: PropType<string | number>;
                default: number;
            };
            modelValue: {
                type: PropType<string | number>;
                default: number;
            };
            min: {
                type: PropType<string | number>;
                default: number;
            };
            step: {
                type: PropType<string | number>;
                default: number;
            };
            readonly: {
                type: PropType<boolean>;
                default: boolean;
            };
            inputWidth: {
                type: PropType<string | number>;
                default: string;
            };
            buttonSize: {
                type: PropType<string | number>;
                default: string;
            };
            decimalPlaces: {
                type: PropType<string | number>;
                default: number;
            };
        }>> & Readonly<{
            onBlur?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            onFocus?: ((...args: any[]) => any) | undefined;
            onReduce?: ((...args: any[]) => any) | undefined;
            onAdd?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onOverlimit?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            max: string | number;
            modelValue: string | number;
            min: string | number;
            step: string | number;
            readonly: boolean;
            inputWidth: string | number;
            buttonSize: string | number;
            decimalPlaces: string | number;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            max: {
                type: PropType<string | number>;
                default: number;
            };
            modelValue: {
                type: PropType<string | number>;
                default: number;
            };
            min: {
                type: PropType<string | number>;
                default: number;
            };
            step: {
                type: PropType<string | number>;
                default: number;
            };
            readonly: {
                type: PropType<boolean>;
                default: boolean;
            };
            inputWidth: {
                type: PropType<string | number>;
                default: string;
            };
            buttonSize: {
                type: PropType<string | number>;
                default: string;
            };
            decimalPlaces: {
                type: PropType<string | number>;
                default: number;
            };
        }>> & Readonly<{
            onBlur?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            onFocus?: ((...args: any[]) => any) | undefined;
            onReduce?: ((...args: any[]) => any) | undefined;
            onAdd?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
            onOverlimit?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            disabled: boolean;
            max: string | number;
            modelValue: string | number;
            min: string | number;
            step: string | number;
            readonly: boolean;
            inputWidth: string | number;
            buttonSize: string | number;
            decimalPlaces: string | number;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        max: {
            type: PropType<string | number>;
            default: number;
        };
        modelValue: {
            type: PropType<string | number>;
            default: number;
        };
        min: {
            type: PropType<string | number>;
            default: number;
        };
        step: {
            type: PropType<string | number>;
            default: number;
        };
        readonly: {
            type: PropType<boolean>;
            default: boolean;
        };
        inputWidth: {
            type: PropType<string | number>;
            default: string;
        };
        buttonSize: {
            type: PropType<string | number>;
            default: string;
        };
        decimalPlaces: {
            type: PropType<string | number>;
            default: number;
        };
    }>> & Readonly<{
        onBlur?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        onFocus?: ((...args: any[]) => any) | undefined;
        onReduce?: ((...args: any[]) => any) | undefined;
        onAdd?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onOverlimit?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        blur: (...args: any[]) => void;
        change: (...args: any[]) => void;
        focus: (...args: any[]) => void;
        reduce: (...args: any[]) => void;
        add: (...args: any[]) => void;
        "update:modelValue": (...args: any[]) => void;
        overlimit: (...args: any[]) => void;
    }, string, {
        disabled: boolean;
        max: string | number;
        modelValue: string | number;
        min: string | number;
        step: string | number;
        readonly: boolean;
        inputWidth: string | number;
        buttonSize: string | number;
        decimalPlaces: string | number;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            "left-icon"?(_: {}): any;
            "right-icon"?(_: {}): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutEcard: typeof _default;
    }
}