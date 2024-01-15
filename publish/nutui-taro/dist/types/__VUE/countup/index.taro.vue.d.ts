
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    initNum: {
        type: NumberConstructor;
        default: number;
    };
    endNum: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    toFixed: {
        type: NumberConstructor;
        default: number;
    };
    during: {
        type: NumberConstructor;
        default: number;
    };
    startFlag: {
        type: BooleanConstructor;
        default: boolean;
    };
    numWidth: {
        type: NumberConstructor;
        default: number;
    };
    numHeight: {
        type: NumberConstructor;
        default: number;
    };
    scrolling: {
        type: BooleanConstructor;
        default: boolean;
    };
    customBgImg: {
        type: StringConstructor;
        default: string;
    };
    customSpacNum: {
        type: NumberConstructor;
        default: number;
    };
    customChangeNum: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    machineNum: {
        type: NumberConstructor;
        default: number;
    };
    machinePrizeNum: {
        type: NumberConstructor;
        default: number;
    };
    machinePrizeLevel: {
        type: NumberConstructor;
        default: number;
    };
    machineTrunMore: {
        type: NumberConstructor;
        default: number;
    };
}, {
    topNumber: (index: number) => string | number;
    turnNumber: (index: number) => string | number;
    type: import("vue").Ref<string>;
    toFixed: import("vue").Ref<number>;
    speed: import("vue").Ref<number>;
    initNum: import("vue").Ref<number>;
    endNum: import("vue").Ref<number>;
    during: import("vue").Ref<number>;
    startFlag: import("vue").Ref<boolean>;
    numWidth: import("vue").Ref<number>;
    numHeight: import("vue").Ref<number>;
    scrolling: import("vue").Ref<boolean>;
    customBgImg: import("vue").Ref<string>;
    customSpacNum: import("vue").Ref<number>;
    customChangeNum: import("vue").Ref<number>;
    machineNum: import("vue").Ref<number>;
    machinePrizeNum: import("vue").Ref<number>;
    machinePrizeLevel: import("vue").Ref<number>;
    machineTrunMore: import("vue").Ref<number>;
    onClick: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onScrollEnd: import("vue").Ref<((...args: any[]) => any) | undefined>;
    valFlag: import("vue").Ref<boolean>;
    current: import("vue").Ref<number>;
    sortFlag: import("vue").Ref<string>;
    initDigit1: import("vue").Ref<number>;
    initDigit2: import("vue").Ref<number>;
    to0_10: import("vue").Ref<number[]>;
    to10_0: import("vue").Ref<number[]>;
    timer: import("vue").Ref<any>;
    totalCount: import("vue").Ref<number>;
    pointNum: import("vue").Ref<number>;
    numberVal: import("vue").Ref<number>;
    num_total_len: import("vue").Ref<number>;
    relNum: import("vue").Ref<number>;
    customNumber: import("vue").Ref<number>;
    prizeLevelTrun: import("vue").Ref<number>;
    prizeY: import("vue").Ref<any[]>;
    prizeYPrev: import("vue").Ref<any[]>;
    finshMachine: import("vue").Ref<number>;
    notPrize: import("vue").Ref<any[]>;
    typeMachine: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "scrollEnd")[], "click" | "scrollEnd", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    initNum: {
        type: NumberConstructor;
        default: number;
    };
    endNum: {
        type: NumberConstructor;
        default: number;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
    toFixed: {
        type: NumberConstructor;
        default: number;
    };
    during: {
        type: NumberConstructor;
        default: number;
    };
    startFlag: {
        type: BooleanConstructor;
        default: boolean;
    };
    numWidth: {
        type: NumberConstructor;
        default: number;
    };
    numHeight: {
        type: NumberConstructor;
        default: number;
    };
    scrolling: {
        type: BooleanConstructor;
        default: boolean;
    };
    customBgImg: {
        type: StringConstructor;
        default: string;
    };
    customSpacNum: {
        type: NumberConstructor;
        default: number;
    };
    customChangeNum: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    machineNum: {
        type: NumberConstructor;
        default: number;
    };
    machinePrizeNum: {
        type: NumberConstructor;
        default: number;
    };
    machinePrizeLevel: {
        type: NumberConstructor;
        default: number;
    };
    machineTrunMore: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onScrollEnd?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    toFixed: number;
    speed: number;
    initNum: number;
    endNum: number;
    during: number;
    startFlag: boolean;
    numWidth: number;
    numHeight: number;
    scrolling: boolean;
    customBgImg: string;
    customSpacNum: number;
    customChangeNum: number;
    machineNum: number;
    machinePrizeNum: number;
    machinePrizeLevel: number;
    machineTrunMore: number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCountup: typeof _default;
    }
}