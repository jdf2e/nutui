import { PropType } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    sku: {
        type: ArrayConstructor;
        default: never[];
    };
    goods: {
        type: ObjectConstructor;
        default: {};
    };
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    btnOptions: {
        type: PropType<string[]>;
        default: () => string[];
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    btnExtraText: {
        type: StringConstructor;
        default: string;
    };
    buyText: {
        type: StringConstructor;
        default: string;
    };
    addCartText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    showPopup: import("vue").Ref<boolean, boolean>;
    closePopup: (type: string) => void;
    selectSku: (skus: any) => void;
    changeStepper: (value: number) => void;
    stepperOverLimit: (count: any) => void;
    clickBtnOperate: (btn: string) => void;
    add: (value: number) => void;
    reduce: (value: number) => void;
    getSlots: (name: string) => import("vue").Slot<any> | undefined;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "reduce" | "add" | "update:visible" | "clickCloseIcon" | "clickOverlay" | "selectSku" | "changeStepper" | "overLimit" | "clickBtnOperate")[], "close" | "reduce" | "add" | "update:visible" | "clickCloseIcon" | "clickOverlay" | "selectSku" | "changeStepper" | "overLimit" | "clickBtnOperate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    sku: {
        type: ArrayConstructor;
        default: never[];
    };
    goods: {
        type: ObjectConstructor;
        default: {};
    };
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    btnOptions: {
        type: PropType<string[]>;
        default: () => string[];
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    btnExtraText: {
        type: StringConstructor;
        default: string;
    };
    buyText: {
        type: StringConstructor;
        default: string;
    };
    addCartText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onClickCloseIcon?: ((...args: any[]) => any) | undefined;
    onClickOverlay?: ((...args: any[]) => any) | undefined;
    onReduce?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onSelectSku?: ((...args: any[]) => any) | undefined;
    onChangeStepper?: ((...args: any[]) => any) | undefined;
    onOverLimit?: ((...args: any[]) => any) | undefined;
    onClickBtnOperate?: ((...args: any[]) => any) | undefined;
}>, {
    visible: boolean;
    lockScroll: boolean;
    confirmText: string;
    goods: Record<string, any>;
    sku: unknown[];
    stepperMax: string | number;
    stepperMin: string | number;
    stepperExtraText: boolean | Function;
    stepperTitle: string;
    btnOptions: string[];
    btnExtraText: string;
    buyText: string;
    addCartText: string;
}, {}, {
    SkuHeader: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        goods: {
            type: ObjectConstructor;
            default: {};
        };
    }>, {
        getSlots: (name: string) => import("vue").Slot<any> | undefined;
        translate: (keyPath: string, ...args: unknown[]) => any;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        goods: {
            type: ObjectConstructor;
            default: {};
        };
    }>> & Readonly<{}>, {
        goods: Record<string, any>;
    }, {}, {
        NutPrice: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            symbol: {
                type: PropType<string>;
                default: string;
            };
            size: {
                type: PropType<import("../price").PriceSize>;
                default: string;
            };
            position: {
                type: PropType<import("../price").PricePosition>;
                default: string;
            };
            price: {
                type: PropType<string | number>;
                default: number;
            };
            needSymbol: {
                type: PropType<boolean>;
                default: boolean;
            };
            decimalDigits: {
                type: PropType<number>;
                default: number;
            };
            thousands: {
                type: PropType<boolean>;
                default: boolean;
            };
            strikeThrough: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            symbol: {
                type: PropType<string>;
                default: string;
            };
            size: {
                type: PropType<import("../price").PriceSize>;
                default: string;
            };
            position: {
                type: PropType<import("../price").PricePosition>;
                default: string;
            };
            price: {
                type: PropType<string | number>;
                default: number;
            };
            needSymbol: {
                type: PropType<boolean>;
                default: boolean;
            };
            decimalDigits: {
                type: PropType<number>;
                default: number;
            };
            thousands: {
                type: PropType<boolean>;
                default: boolean;
            };
            strikeThrough: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{}>, {
            symbol: string;
            size: import("../price").PriceSize;
            position: import("../price").PricePosition;
            price: string | number;
            needSymbol: boolean;
            decimalDigits: number;
            thousands: boolean;
            strikeThrough: boolean;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SkuSelect: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        sku: {
            type: ArrayConstructor;
            default: () => never[];
        };
    }>, {
        skuInfo: import("vue").Ref<{
            [x: string]: any;
            name: string;
            id: number;
            active: boolean;
            disable: boolean;
        }[], import("./type").SkuInfo[] | {
            [x: string]: any;
            name: string;
            id: number;
            active: boolean;
            disable: boolean;
        }[]>;
        changeSaleChild: (attrItem: any, index: any, parentItem: any, parentIndex: any) => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "selectSku"[], "selectSku", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        sku: {
            type: ArrayConstructor;
            default: () => never[];
        };
    }>> & Readonly<{
        onSelectSku?: ((...args: any[]) => any) | undefined;
    }>, {
        sku: unknown[];
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SkuStepper: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    SkuOperate: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        btnOptions: {
            type: PropType<string[]>;
            default: () => string[];
        };
        btnExtraText: {
            type: StringConstructor;
            default: string;
        };
        buyText: {
            type: StringConstructor;
            default: string;
        };
        addCartText: {
            type: StringConstructor;
            default: string;
        };
        confirmText: {
            type: StringConstructor;
            default: string;
        };
    }>, {
        getBtnDesc: (type: string) => string;
        clickBtnOperate: (btn: string) => void;
        getSlots: (name: string) => import("vue").Slot<any> | undefined;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "changeSku" | "changeBuyCount" | "clickBtnOperate")[], "click" | "changeSku" | "changeBuyCount" | "clickBtnOperate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        btnOptions: {
            type: PropType<string[]>;
            default: () => string[];
        };
        btnExtraText: {
            type: StringConstructor;
            default: string;
        };
        buyText: {
            type: StringConstructor;
            default: string;
        };
        addCartText: {
            type: StringConstructor;
            default: string;
        };
        confirmText: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onChangeSku?: ((...args: any[]) => any) | undefined;
        onChangeBuyCount?: ((...args: any[]) => any) | undefined;
        onClickBtnOperate?: ((...args: any[]) => any) | undefined;
    }>, {
        confirmText: string;
        btnOptions: string[];
        btnExtraText: string;
        buyText: string;
        addCartText: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    NutPopup: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        zIndex: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        lockScroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: PropType<import("../popup/types").PopupPosition>;
            default: string;
        };
        transition: {
            type: StringConstructor;
            default: string;
        };
        style: {
            type: ObjectConstructor;
            default: () => {};
        };
        popClass: {
            type: StringConstructor;
            default: string;
        };
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeIconPosition: {
            type: PropType<import("../popup/types").PopupCloseIconPosition>;
            default: string;
        };
        destroyOnClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        teleport: {
            type: (StringConstructor | {
                new (): Element;
                prototype: Element;
            })[];
            default: string;
        };
        overlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        teleportDisable: {
            type: BooleanConstructor;
            default: boolean;
        };
        safeAreaInsetBottom: {
            type: BooleanConstructor;
            default: boolean;
        };
        overlayClass: {
            type: StringConstructor;
            default: string;
        };
        overlayStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>, {
        popStyle: import("vue").ComputedRef<{
            zIndex: string | number;
            transitionDuration: string;
        }>;
        transitionName: import("vue").ComputedRef<string>;
        classes: import("vue").ComputedRef<{
            [x: string]: boolean;
            round: boolean;
        }>;
        onClick: (e: Event) => void;
        onClickCloseIcon: (e: Event) => void;
        onClickOverlay: (e: Event) => void;
        onOpened: (el: Element) => void;
        onClosed: (el: Element) => void;
        zIndex: import("vue").Ref<string | number, string | number>;
        showSlot: import("vue").Ref<boolean, boolean>;
        closed: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible" | "open" | "clickPop" | "clickCloseIcon" | "opened" | "closed" | "clickOverlay")[], "close" | "update:visible" | "open" | "clickPop" | "clickCloseIcon" | "opened" | "closed" | "clickOverlay", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        zIndex: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        lockScroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: PropType<import("../popup/types").PopupPosition>;
            default: string;
        };
        transition: {
            type: StringConstructor;
            default: string;
        };
        style: {
            type: ObjectConstructor;
            default: () => {};
        };
        popClass: {
            type: StringConstructor;
            default: string;
        };
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeIconPosition: {
            type: PropType<import("../popup/types").PopupCloseIconPosition>;
            default: string;
        };
        destroyOnClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        teleport: {
            type: (StringConstructor | {
                new (): Element;
                prototype: Element;
            })[];
            default: string;
        };
        overlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        teleportDisable: {
            type: BooleanConstructor;
            default: boolean;
        };
        safeAreaInsetBottom: {
            type: BooleanConstructor;
            default: boolean;
        };
        overlayClass: {
            type: StringConstructor;
            default: string;
        };
        overlayStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        onOpen?: ((...args: any[]) => any) | undefined;
        onClickPop?: ((...args: any[]) => any) | undefined;
        onClickCloseIcon?: ((...args: any[]) => any) | undefined;
        onOpened?: ((...args: any[]) => any) | undefined;
        onClosed?: ((...args: any[]) => any) | undefined;
        onClickOverlay?: ((...args: any[]) => any) | undefined;
    }>, {
        round: boolean;
        style: Record<string, any>;
        duration: string | number;
        transition: string;
        visible: boolean;
        zIndex: string | number;
        lockScroll: boolean;
        overlayClass: string;
        overlayStyle: Record<string, any>;
        closeOnClickOverlay: boolean;
        overlay: boolean;
        position: import("../popup/types").PopupPosition;
        popClass: string;
        closeable: boolean;
        closeIconPosition: import("../popup/types").PopupCloseIconPosition;
        destroyOnClose: boolean;
        teleport: string | Element;
        teleportDisable: boolean;
        safeAreaInsetBottom: boolean;
    }, {}, {
        NutOverlay: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                duration: {
                    type: PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                "update:visible": (...args: any[]) => void;
            }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                duration: {
                    type: PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            }>, {
                duration: string | number;
                visible: boolean;
                zIndex: string | number;
                lockScroll: boolean;
                overlayClass: string;
                closeOnClickOverlay: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                duration: {
                    type: PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, {
                duration: string | number;
                visible: boolean;
                zIndex: string | number;
                lockScroll: boolean;
                overlayClass: string;
                closeOnClickOverlay: boolean;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            duration: {
                type: PropType<string | number>;
                default: number;
            };
            visible: {
                type: PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
            "update:visible": (...args: any[]) => void;
        }, string, {
            duration: string | number;
            visible: boolean;
            zIndex: string | number;
            lockScroll: boolean;
            overlayClass: string;
            closeOnClickOverlay: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        });
        Close: import("vue").DefineComponent<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }, {
            classes: import("vue").ComputedRef<{
                [x: string]: string | boolean;
                "nut-icon": boolean;
            }>;
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }>>, {
            name: string;
            width: string | number;
            height: string | number;
            color: string;
            class: string;
        }>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSku: typeof _default;
    }
}