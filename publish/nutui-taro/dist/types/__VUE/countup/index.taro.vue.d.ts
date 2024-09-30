
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {
    topNumber: (index: number) => string | number;
    turnNumber: (index: number) => string | number;
    type: import("vue").Ref<string, string>;
    toFixed: import("vue").Ref<number, number>;
    speed: import("vue").Ref<number, number>;
    initNum: import("vue").Ref<number, number>;
    endNum: import("vue").Ref<number, number>;
    during: import("vue").Ref<number, number>;
    startFlag: import("vue").Ref<boolean, boolean>;
    numWidth: import("vue").Ref<number, number>;
    numHeight: import("vue").Ref<number, number>;
    scrolling: import("vue").Ref<boolean, boolean>;
    customBgImg: import("vue").Ref<string, string>;
    customSpacNum: import("vue").Ref<number, number>;
    customChangeNum: import("vue").Ref<number, number>;
    machineNum: import("vue").Ref<number, number>;
    machinePrizeNum: import("vue").Ref<number, number>;
    machinePrizeLevel: import("vue").Ref<number, number>;
    machineTrunMore: import("vue").Ref<number, number>;
    onClick: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onScrollEnd: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    valFlag: import("vue").Ref<boolean, boolean>;
    current: import("vue").Ref<number, number>;
    sortFlag: import("vue").Ref<string, string>;
    initDigit1: import("vue").Ref<number, number>;
    initDigit2: import("vue").Ref<number, number>;
    to0_10: import("vue").Ref<number[], number[]>;
    to10_0: import("vue").Ref<number[], number[]>;
    timer: import("vue").Ref<any, any>;
    totalCount: import("vue").Ref<number, number>;
    pointNum: import("vue").Ref<number, number>;
    numberVal: import("vue").Ref<number, number>;
    num_total_len: import("vue").Ref<number, number>;
    relNum: import("vue").Ref<number, number>;
    customNumber: import("vue").Ref<number, number>;
    prizeLevelTrun: import("vue").Ref<number, number>;
    prizeY: import("vue").Ref<any[], any[]>;
    prizeYPrev: import("vue").Ref<any[], any[]>;
    finshMachine: import("vue").Ref<number, number>;
    notPrize: import("vue").Ref<any[], any[]>;
    typeMachine: import("vue").Ref<string, string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "scrollEnd")[], "click" | "scrollEnd", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onScrollEnd?: ((...args: any[]) => any) | undefined;
}>, {
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
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCountup: typeof _default;
    }
}