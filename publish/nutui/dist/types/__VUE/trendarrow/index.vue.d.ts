
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    rate: {
        type: NumberConstructor;
        default: number;
    };
    digits: {
        type: NumberConstructor;
        default: number;
    };
    showSign: {
        type: BooleanConstructor;
        default: boolean;
    };
    showZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    syncTextColor: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    riseColor: {
        type: StringConstructor;
        default: string;
    };
    dropColor: {
        type: StringConstructor;
        default: string;
    };
}, {
    calcRate: import("vue").ComputedRef<string>;
    calcStyle: import("vue").ComputedRef<{
        color: string;
    }>;
    rateTrend: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    rate: {
        type: NumberConstructor;
        default: number;
    };
    digits: {
        type: NumberConstructor;
        default: number;
    };
    showSign: {
        type: BooleanConstructor;
        default: boolean;
    };
    showZero: {
        type: BooleanConstructor;
        default: boolean;
    };
    arrowLeft: {
        type: BooleanConstructor;
        default: boolean;
    };
    syncTextColor: {
        type: BooleanConstructor;
        default: boolean;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    riseColor: {
        type: StringConstructor;
        default: string;
    };
    dropColor: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    textColor: string;
    rate: number;
    digits: number;
    showSign: boolean;
    showZero: boolean;
    arrowLeft: boolean;
    syncTextColor: boolean;
    riseColor: string;
    dropColor: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutTrendArrow: typeof _default;
  }
}