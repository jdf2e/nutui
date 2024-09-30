declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
}>, {
    goodsCount: import("vue").Ref<string | number, string | number>;
    add: (value: number) => void;
    reduce: (value: number) => void;
    overlimit: (e: Event, action: string) => void;
    getExtraText: () => any;
    changeStepper: (value: number) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "reduce" | "add" | "changeSku" | "changeStepper" | "clickBtnOptions" | "overLimit")[], "click" | "reduce" | "add" | "changeSku" | "changeStepper" | "clickBtnOptions" | "overLimit", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onReduce?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onChangeSku?: ((...args: any[]) => any) | undefined;
    onChangeStepper?: ((...args: any[]) => any) | undefined;
    onClickBtnOptions?: ((...args: any[]) => any) | undefined;
    onOverLimit?: ((...args: any[]) => any) | undefined;
}>, {
    stepperMax: string | number;
    stepperMin: string | number;
    stepperExtraText: boolean | Function;
    stepperTitle: string;
}, {}, {
    NutInputNumber: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            max: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            modelValue: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            min: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            step: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            readonly: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            inputWidth: {
                type: import("vue").PropType<string | number>;
                default: string;
            };
            buttonSize: {
                type: import("vue").PropType<string | number>;
                default: string;
            };
            decimalPlaces: {
                type: import("vue").PropType<string | number>;
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
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            max: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            modelValue: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            min: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            step: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            readonly: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            inputWidth: {
                type: import("vue").PropType<string | number>;
                default: string;
            };
            buttonSize: {
                type: import("vue").PropType<string | number>;
                default: string;
            };
            decimalPlaces: {
                type: import("vue").PropType<string | number>;
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
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            max: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            modelValue: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            min: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            step: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            readonly: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            inputWidth: {
                type: import("vue").PropType<string | number>;
                default: string;
            };
            buttonSize: {
                type: import("vue").PropType<string | number>;
                default: string;
            };
            decimalPlaces: {
                type: import("vue").PropType<string | number>;
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
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        max: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        modelValue: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        min: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        step: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        readonly: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        inputWidth: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        buttonSize: {
            type: import("vue").PropType<string | number>;
            default: string;
        };
        decimalPlaces: {
            type: import("vue").PropType<string | number>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
