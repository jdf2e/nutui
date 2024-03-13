import { MonthInfo, Day } from './type';
declare const _default: import("vue").DefineComponent<{
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
}, {
    translate: (keyPath: string, ...args: unknown[]) => any;
    scrollWithAnimation: import("vue").Ref<boolean>;
    type: import("vue").Ref<string>;
    title: import("vue").Ref<string>;
    poppable: import("vue").Ref<boolean>;
    isAutoBackFill: import("vue").Ref<boolean>;
    toDateAnimation: import("vue").Ref<boolean>;
    showTitle: import("vue").Ref<boolean>;
    showSubTitle: import("vue").Ref<boolean>;
    showToday: import("vue").Ref<boolean>;
    confirmText: import("vue").Ref<string>;
    startText: import("vue").Ref<string>;
    endText: import("vue").Ref<string>;
    defaultValue: import("vue").Ref<string | unknown[]>;
    startDate: import("vue").Ref<string>;
    endDate: import("vue").Ref<string>;
    firstDayOfWeek: import("vue").Ref<number>;
    disabledDate: import("vue").Ref<Function | undefined>;
    onSelect: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onClose: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onChoose: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onUpdate: import("vue").Ref<((...args: any[]) => any) | undefined>;
    scrollTop: import("vue").Ref<number>;
    containerHeight: import("vue").Ref<string>;
    yearMonthTitle: import("vue").Ref<string>;
    currDate: import("vue").Ref<string | string[]>;
    propStartDate: import("vue").Ref<string>;
    propEndDate: import("vue").Ref<string>;
    currentIndex: import("vue").Ref<number>;
    unLoadPrev: import("vue").Ref<boolean>;
    touchParams: import("vue").Ref<import("./type").TouchParam>;
    transformY: import("vue").Ref<number>;
    translateY: import("vue").Ref<number>;
    scrollDistance: import("vue").Ref<number>;
    defaultData: import("vue").Ref<import("./type").InputDate>;
    chooseData: import("vue").Ref<(string | string[])[]>;
    monthsData: import("vue").Ref<MonthInfo[]>;
    dayPrefix: import("vue").Ref<string>;
    startData: import("vue").Ref<import("./type").InputDate>;
    endData: import("vue").Ref<import("./type").InputDate>;
    isRange: import("vue").Ref<boolean>;
    timer: import("vue").Ref<number>;
    avgHeight: import("vue").Ref<number>;
    monthsNum: import("vue").Ref<number>;
    defaultRange: import("vue").Ref<number[]>;
    weeks: import("vue").Ref<any[]>;
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
    months: import("vue").Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("select" | "close" | "choose" | "update")[], "select" | "close" | "choose" | "update", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onSelect?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onChoose?: ((...args: any[]) => any) | undefined;
    onUpdate?: ((...args: any[]) => any) | undefined;
}, {
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
}, {}>;
export default _default;
