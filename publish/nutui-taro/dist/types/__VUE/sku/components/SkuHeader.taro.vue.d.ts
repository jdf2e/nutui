declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
            type: import("vue").PropType<string>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../../price/types").PriceSize>;
            default: string;
        };
        position: {
            type: import("vue").PropType<import("../../price/types").PricePosition>;
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
            type: import("vue").PropType<import("../../price/types").PriceSize>;
            default: string;
        };
        position: {
            type: import("vue").PropType<import("../../price/types").PricePosition>;
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
        size: import("../../price/types").PriceSize;
        position: import("../../price/types").PricePosition;
        price: string | number;
        needSymbol: boolean;
        decimalDigits: number;
        thousands: boolean;
        strikeThrough: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
