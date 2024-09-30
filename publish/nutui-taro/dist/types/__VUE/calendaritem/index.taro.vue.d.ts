import { MonthInfo, Day } from './type';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    isAutoBackFill: {
        type: BooleanConstructor;
        default: boolean;
    };
    toDateAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    startText: {
        type: StringConstructor;
        default: string;
    };
    endText: {
        type: StringConstructor;
        default: string;
    };
    defaultValue: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    startDate: {
        type: StringConstructor;
        default: string;
    };
    endDate: {
        type: StringConstructor;
        default: string;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
    disabledDate: FunctionConstructor;
}>, {
    translate: (keyPath: string, ...args: unknown[]) => any;
    scrollWithAnimation: import("vue").Ref<boolean, boolean>;
    type: import("vue").Ref<string, string>;
    title: import("vue").Ref<string, string>;
    poppable: import("vue").Ref<boolean, boolean>;
    isAutoBackFill: import("vue").Ref<boolean, boolean>;
    toDateAnimation: import("vue").Ref<boolean, boolean>;
    showTitle: import("vue").Ref<boolean, boolean>;
    showSubTitle: import("vue").Ref<boolean, boolean>;
    showToday: import("vue").Ref<boolean, boolean>;
    confirmText: import("vue").Ref<string, string>;
    startText: import("vue").Ref<string, string>;
    endText: import("vue").Ref<string, string>;
    defaultValue: import("vue").Ref<string | unknown[], string | unknown[]>;
    startDate: import("vue").Ref<string, string>;
    endDate: import("vue").Ref<string, string>;
    firstDayOfWeek: import("vue").Ref<number, number>;
    disabledDate: import("vue").Ref<Function | undefined, Function | undefined>;
    onSelect: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onClose: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onChoose: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onUpdate: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    scrollTop: import("vue").Ref<number, number>;
    containerHeight: import("vue").Ref<string, string>;
    yearMonthTitle: import("vue").Ref<string, string>;
    currDate: import("vue").Ref<string | string[], string | string[]>;
    propStartDate: import("vue").Ref<string, string>;
    propEndDate: import("vue").Ref<string, string>;
    currentIndex: import("vue").Ref<number, number>;
    unLoadPrev: import("vue").Ref<boolean, boolean>;
    touchParams: import("vue").Ref<import("./type").TouchParam, import("./type").TouchParam>;
    transformY: import("vue").Ref<number, number>;
    translateY: import("vue").Ref<number, number>;
    scrollDistance: import("vue").Ref<number, number>;
    defaultData: import("vue").Ref<import("./type").InputDate, import("./type").InputDate>;
    chooseData: import("vue").Ref<(string | string[])[], (string | string[])[]>;
    monthsData: import("vue").Ref<MonthInfo[], MonthInfo[]>;
    dayPrefix: import("vue").Ref<string, string>;
    startData: import("vue").Ref<import("./type").InputDate, import("./type").InputDate>;
    endData: import("vue").Ref<import("./type").InputDate, import("./type").InputDate>;
    isRange: import("vue").Ref<boolean, boolean>;
    timer: import("vue").Ref<number, number>;
    avgHeight: import("vue").Ref<number, number>;
    monthsNum: import("vue").Ref<number, number>;
    defaultRange: import("vue").Ref<number[], number[]>;
    weeks: import("vue").Ref<any[], any[]>;
    compConthsData: import("vue").ComputedRef<MonthInfo[]>;
    showTopBtn: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    topInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    bottomInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    rangeTip: () => boolean | undefined;
    mothsViewScroll: (e: Event) => void;
    getClass: (day: Day, month: MonthInfo, index?: number) => string[];
    isStartTip: (day: Day, month: MonthInfo) => boolean;
    isEndTip: (day: Day, month: MonthInfo) => boolean;
    chooseDay: (day: Day, month: MonthInfo, isFirst?: boolean) => void;
    isCurrDay: (dateInfo: Day) => boolean;
    confirm: () => void;
    months: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "select" | "choose" | "update")[], "close" | "select" | "choose" | "update", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    isAutoBackFill: {
        type: BooleanConstructor;
        default: boolean;
    };
    toDateAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showSubTitle: {
        type: BooleanConstructor;
        default: boolean;
    };
    showToday: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    startText: {
        type: StringConstructor;
        default: string;
    };
    endText: {
        type: StringConstructor;
        default: string;
    };
    defaultValue: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
    };
    startDate: {
        type: StringConstructor;
        default: string;
    };
    endDate: {
        type: StringConstructor;
        default: string;
    };
    firstDayOfWeek: {
        type: NumberConstructor;
        default: number;
    };
    disabledDate: FunctionConstructor;
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onChoose?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}>, {
    type: string;
    title: string;
    poppable: boolean;
    isAutoBackFill: boolean;
    toDateAnimation: boolean;
    showTitle: boolean;
    showSubTitle: boolean;
    showToday: boolean;
    confirmText: string;
    startText: string;
    endText: string;
    defaultValue: string | unknown[];
    startDate: string;
    endDate: string;
    firstDayOfWeek: number;
}, {}, {
    NutScrollView: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{}>, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
