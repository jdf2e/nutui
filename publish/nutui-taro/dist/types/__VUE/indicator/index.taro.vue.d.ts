import { PropType } from 'vue';
import { IndicatorAlign } from './types';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: {
        type: PropType<IndicatorAlign>;
        default: string;
    };
    fillZero: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | IndicatorAlign;
        "nut-indicator": boolean;
        "nut-indicator--block": boolean;
    }>;
    padZero: (num: string | number, length?: number) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    size: {
        type: NumberConstructor;
        default: number;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
    align: {
        type: PropType<IndicatorAlign>;
        default: string;
    };
    fillZero: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    size: number;
    block: boolean;
    current: number;
    align: IndicatorAlign;
    fillZero: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutIndicator: typeof _default;
  }
}