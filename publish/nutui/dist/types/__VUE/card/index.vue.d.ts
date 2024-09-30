
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    imgUrl: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    price: {
        type: StringConstructor;
        default: string;
    };
    vipPrice: {
        type: StringConstructor;
        default: string;
    };
    shopDesc: {
        type: StringConstructor;
        default: string;
    };
    delivery: {
        type: StringConstructor;
        default: string;
    };
    shopName: {
        type: StringConstructor;
        default: string;
    };
    isNeedPrice: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    imgUrl: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    price: {
        type: StringConstructor;
        default: string;
    };
    vipPrice: {
        type: StringConstructor;
        default: string;
    };
    shopDesc: {
        type: StringConstructor;
        default: string;
    };
    delivery: {
        type: StringConstructor;
        default: string;
    };
    shopName: {
        type: StringConstructor;
        default: string;
    };
    isNeedPrice: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{}>, {
    title: string;
    price: string;
    imgUrl: string;
    vipPrice: string;
    shopDesc: string;
    delivery: string;
    shopName: string;
    isNeedPrice: boolean;
}, {}, {
    NutPrice: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        symbol: {
            type: import("vue").PropType<string>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../price").PriceSize>;
            default: string;
        };
        position: {
            type: import("vue").PropType<import("../price").PricePosition>;
            default: string;
        };
        price: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        needSymbol: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        decimalDigits: {
            type: import("vue").PropType<number>;
            default: number;
        };
        thousands: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        strikeThrough: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        symbol: {
            type: import("vue").PropType<string>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../price").PriceSize>;
            default: string;
        };
        position: {
            type: import("vue").PropType<import("../price").PricePosition>;
            default: string;
        };
        price: {
            type: import("vue").PropType<string | number>;
            default: number;
        };
        needSymbol: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        decimalDigits: {
            type: import("vue").PropType<number>;
            default: number;
        };
        thousands: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        strikeThrough: {
            type: import("vue").PropType<boolean>;
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
    NutTag: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            round: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../tag").TagType>;
                default: string;
            };
            mark: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            closeable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            textColor: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
            close: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            round: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../tag").TagType>;
                default: string;
            };
            mark: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            closeable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            textColor: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        }>, {
            round: boolean;
            color: string;
            plain: boolean;
            type: import("../tag").TagType;
            mark: boolean;
            closeable: boolean;
            textColor: string;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            round: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            color: {
                type: import("vue").PropType<string>;
                default: string;
            };
            plain: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            type: {
                type: import("vue").PropType<import("../tag").TagType>;
                default: string;
            };
            mark: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            closeable: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            textColor: {
                type: import("vue").PropType<string>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onClose?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            round: boolean;
            color: string;
            plain: boolean;
            type: import("../tag").TagType;
            mark: boolean;
            closeable: boolean;
            textColor: string;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        round: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        color: {
            type: import("vue").PropType<string>;
            default: string;
        };
        plain: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        type: {
            type: import("vue").PropType<import("../tag").TagType>;
            default: string;
        };
        mark: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        closeable: {
            type: import("vue").PropType<boolean>;
            default: boolean;
        };
        textColor: {
            type: import("vue").PropType<string>;
            default: string;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
        close: (...args: any[]) => void;
    }, string, {
        round: boolean;
        color: string;
        plain: boolean;
        type: import("../tag").TagType;
        mark: boolean;
        closeable: boolean;
        textColor: string;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCard: typeof _default;
    }
}