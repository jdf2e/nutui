
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {
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
    canvasHeight: import("vue").Ref<number, number>;
    canvasWidth: import("vue").Ref<number, number>;
    ctx: import("vue").Ref<any, any>;
    isSupportTouch: import("vue").Ref<boolean, boolean>;
    events: import("vue").Ref<string[], string[]>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clear" | "end" | "start" | "confirm" | "signing")[], "clear" | "end" | "start" | "confirm" | "signing", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    onClear?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onEnd?: ((...args: any[]) => any) | undefined;
    onSigning?: ((...args: any[]) => any) | undefined;
}>, {
    type: string;
    customClass: string;
    lineWidth: number;
    strokeStyle: string;
    unSupportTpl: string;
}, {}, {
    NutButton: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            shape: {
                type: import("vue").PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: import("vue").PropType<string>;
            default: string;
        };
        shape: {
            type: import("vue").PropType<import("../button").ButtonShape>;
            default: string;
        };
        plain: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<import("../button").ButtonType>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../button").ButtonSize>;
            default: string;
        };
        block: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
    }, string, {
        color: string;
        shape: import("../button").ButtonShape;
        plain: boolean;
        loading: boolean;
        disabled: boolean;
        type: import("../button").ButtonType;
        size: import("../button").ButtonSize;
        block: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSignature: typeof _default;
    }
}