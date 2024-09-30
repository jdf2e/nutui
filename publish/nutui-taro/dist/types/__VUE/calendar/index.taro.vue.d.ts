import { PropType } from 'vue';
import { CalendarRef } from '../calendaritem/type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    visible: {
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
        type: PropType<string | string[]>;
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
        validator: (val: number) => boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledDate: FunctionConstructor;
}>, {
    visible: import("vue").WritableComputedRef<boolean, boolean>;
    closePopup: () => void;
    opened: () => void;
    update: () => void;
    close: () => void;
    select: (param: any) => void;
    choose: (param: any) => void;
    calendarRef: import("vue").Ref<CalendarRef | null, CalendarRef | null>;
    showTopBtn: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    topInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    dayInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    bottomInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
    footerInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "select" | "update:visible" | "choose")[], "close" | "select" | "update:visible" | "choose", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    visible: {
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
        type: PropType<string | string[]>;
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
        validator: (val: number) => boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabledDate: FunctionConstructor;
}>> & Readonly<{
    onSelect?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onChoose?: ((...args: any[]) => any) | undefined;
}>, {
    type: string;
    title: string;
    visible: boolean;
    lockScroll: boolean;
    poppable: boolean;
    isAutoBackFill: boolean;
    toDateAnimation: boolean;
    showTitle: boolean;
    showSubTitle: boolean;
    showToday: boolean;
    confirmText: string;
    startText: string;
    endText: string;
    startDate: string;
    endDate: string;
    firstDayOfWeek: number;
}, {}, {
    NutCalendarItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
        touchParams: import("vue").Ref<import("../calendaritem/type").TouchParam, import("../calendaritem/type").TouchParam>;
        transformY: import("vue").Ref<number, number>;
        translateY: import("vue").Ref<number, number>;
        scrollDistance: import("vue").Ref<number, number>;
        defaultData: import("vue").Ref<import("../calendaritem/type").InputDate, import("../calendaritem/type").InputDate>;
        chooseData: import("vue").Ref<(string | string[])[], (string | string[])[]>;
        monthsData: import("vue").Ref<import("../calendaritem/type").MonthInfo[], import("../calendaritem/type").MonthInfo[]>;
        dayPrefix: import("vue").Ref<string, string>;
        startData: import("vue").Ref<import("../calendaritem/type").InputDate, import("../calendaritem/type").InputDate>;
        endData: import("vue").Ref<import("../calendaritem/type").InputDate, import("../calendaritem/type").InputDate>;
        isRange: import("vue").Ref<boolean, boolean>;
        timer: import("vue").Ref<number, number>;
        avgHeight: import("vue").Ref<number, number>;
        monthsNum: import("vue").Ref<number, number>;
        defaultRange: import("vue").Ref<number[], number[]>;
        weeks: import("vue").Ref<any[], any[]>;
        compConthsData: import("vue").ComputedRef<import("../calendaritem/type").MonthInfo[]>;
        showTopBtn: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
        topInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
        bottomInfo: import("vue").ComputedRef<import("vue").Slot<any> | undefined>;
        rangeTip: () => boolean | undefined;
        mothsViewScroll: (e: Event) => void;
        getClass: (day: import("../calendaritem/type").Day, month: import("../calendaritem/type").MonthInfo, index?: number | undefined) => string[];
        isStartTip: (day: import("../calendaritem/type").Day, month: import("../calendaritem/type").MonthInfo) => boolean;
        isEndTip: (day: import("../calendaritem/type").Day, month: import("../calendaritem/type").MonthInfo) => boolean;
        chooseDay: (day: import("../calendaritem/type").Day, month: import("../calendaritem/type").MonthInfo, isFirst?: boolean) => void;
        isCurrDay: (dateInfo: import("../calendaritem/type").Day) => boolean;
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
    NutPopup: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        zIndex: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        lockScroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: PropType<import("../popup/types").PopupPosition>;
            default: string;
        };
        transition: {
            type: StringConstructor;
            default: string;
        };
        style: {
            type: ObjectConstructor;
            default: () => {};
        };
        popClass: {
            type: StringConstructor;
            default: string;
        };
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeIconPosition: {
            type: PropType<import("../popup/types").PopupCloseIconPosition>;
            default: string;
        };
        destroyOnClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        teleport: {
            type: (StringConstructor | {
                new (): Element;
                prototype: Element;
            })[];
            default: string;
        };
        overlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        teleportDisable: {
            type: BooleanConstructor;
            default: boolean;
        };
        safeAreaInsetBottom: {
            type: BooleanConstructor;
            default: boolean;
        };
        overlayClass: {
            type: StringConstructor;
            default: string;
        };
        overlayStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>, {
        popStyle: import("vue").ComputedRef<{
            zIndex: string | number;
            transitionDuration: string;
        }>;
        transitionName: import("vue").ComputedRef<string>;
        classes: import("vue").ComputedRef<{
            [x: string]: boolean;
            round: boolean;
        }>;
        onClick: (e: Event) => void;
        onClickCloseIcon: (e: Event) => void;
        onClickOverlay: (e: Event) => void;
        onOpened: (el: Element) => void;
        onClosed: (el: Element) => void;
        zIndex: import("vue").Ref<string | number, string | number>;
        showSlot: import("vue").Ref<boolean, boolean>;
        closed: import("vue").Ref<boolean, boolean>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible" | "open" | "clickPop" | "clickCloseIcon" | "opened" | "closed" | "clickOverlay")[], "close" | "update:visible" | "open" | "clickPop" | "clickCloseIcon" | "opened" | "closed" | "clickOverlay", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        zIndex: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        lockScroll: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        position: {
            type: PropType<import("../popup/types").PopupPosition>;
            default: string;
        };
        transition: {
            type: StringConstructor;
            default: string;
        };
        style: {
            type: ObjectConstructor;
            default: () => {};
        };
        popClass: {
            type: StringConstructor;
            default: string;
        };
        closeable: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeIconPosition: {
            type: PropType<import("../popup/types").PopupCloseIconPosition>;
            default: string;
        };
        destroyOnClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        teleport: {
            type: (StringConstructor | {
                new (): Element;
                prototype: Element;
            })[];
            default: string;
        };
        overlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        round: {
            type: BooleanConstructor;
            default: boolean;
        };
        teleportDisable: {
            type: BooleanConstructor;
            default: boolean;
        };
        safeAreaInsetBottom: {
            type: BooleanConstructor;
            default: boolean;
        };
        overlayClass: {
            type: StringConstructor;
            default: string;
        };
        overlayStyle: {
            type: ObjectConstructor;
            default: () => {};
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        onOpen?: ((...args: any[]) => any) | undefined;
        onClickPop?: ((...args: any[]) => any) | undefined;
        onClickCloseIcon?: ((...args: any[]) => any) | undefined;
        onOpened?: ((...args: any[]) => any) | undefined;
        onClosed?: ((...args: any[]) => any) | undefined;
        onClickOverlay?: ((...args: any[]) => any) | undefined;
    }>, {
        round: boolean;
        duration: string | number;
        transition: string;
        style: Record<string, any>;
        visible: boolean;
        zIndex: string | number;
        lockScroll: boolean;
        overlayClass: string;
        overlayStyle: Record<string, any>;
        closeOnClickOverlay: boolean;
        overlay: boolean;
        position: import("../popup/types").PopupPosition;
        popClass: string;
        closeable: boolean;
        closeIconPosition: import("../popup/types").PopupCloseIconPosition;
        destroyOnClose: boolean;
        teleport: string | Element;
        teleportDisable: boolean;
        safeAreaInsetBottom: boolean;
    }, {}, {
        NutOverlay: {
            new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
                duration: {
                    type: PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
                click: (...args: any[]) => void;
                "update:visible": (...args: any[]) => void;
            }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
                duration: {
                    type: PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            }>, {
                duration: string | number;
                visible: boolean;
                zIndex: string | number;
                lockScroll: boolean;
                overlayClass: string;
                closeOnClickOverlay: boolean;
            }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
                P: {};
                B: {};
                D: {};
                C: {};
                M: {};
                Defaults: {};
            }, Readonly<import("vue").ExtractPropTypes<{
                duration: {
                    type: PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: PropType<boolean>;
                    default: boolean;
                };
            }>> & Readonly<{
                onClick?: ((...args: any[]) => any) | undefined;
                "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
            }>, {}, {}, {}, {}, {
                duration: string | number;
                visible: boolean;
                zIndex: string | number;
                lockScroll: boolean;
                overlayClass: string;
                closeOnClickOverlay: boolean;
            }>;
            __isFragment?: undefined;
            __isTeleport?: undefined;
            __isSuspense?: undefined;
        } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            duration: {
                type: PropType<string | number>;
                default: number;
            };
            visible: {
                type: PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
            "update:visible": (...args: any[]) => void;
        }, string, {
            duration: string | number;
            visible: boolean;
            zIndex: string | number;
            lockScroll: boolean;
            overlayClass: string;
            closeOnClickOverlay: boolean;
        }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
            $slots: {
                default?(_: {}): any;
            };
        });
        Close: typeof import("@nutui/icons-vue-taro").Close;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCalendar: typeof _default;
    }
}