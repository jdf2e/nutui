import { PropType } from 'vue';
import { PricePosition, PriceSize } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    price: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    needSymbol: {
        type: BooleanConstructor;
        default: boolean;
    };
    symbol: {
        type: StringConstructor;
        default: string;
    };
    decimalDigits: {
        type: NumberConstructor;
        default: number;
    };
    thousands: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<PricePosition>;
        default: string;
    };
    size: {
        type: PropType<PriceSize>;
        default: string;
    };
    strikeThrough: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    showSymbol: import("vue").ComputedRef<string>;
    checkPoint: (price: string | number) => boolean;
    formatThousands: (num: any) => any;
    formatDecimal: (decimalNum: any) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    price: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    needSymbol: {
        type: BooleanConstructor;
        default: boolean;
    };
    symbol: {
        type: StringConstructor;
        default: string;
    };
    decimalDigits: {
        type: NumberConstructor;
        default: number;
    };
    thousands: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: PropType<PricePosition>;
        default: string;
    };
    size: {
        type: PropType<PriceSize>;
        default: string;
    };
    strikeThrough: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    symbol: string;
    size: PriceSize;
    position: PricePosition;
    price: string | number;
    needSymbol: boolean;
    decimalDigits: number;
    thousands: boolean;
    strikeThrough: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutPrice: typeof _default;
    }
}