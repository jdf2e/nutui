import { Ref } from 'vue';
import { CascaderValue, CascaderOption } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: ArrayConstructor;
    visible: BooleanConstructor;
    title: StringConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    convertConfig: ObjectConstructor;
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
        type: import("vue").PropType<import("../popup/types").PopupPosition>;
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
        type: import("vue").PropType<import("../popup/types").PopupCloseIconPosition>;
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
    onChange: (value: CascaderValue, pathNodes: CascaderOption[]) => void;
    onPathChange: (pathNodes: CascaderOption[]) => void;
    innerValue: Ref<CascaderValue, CascaderValue>;
    innerVisible: import("vue").WritableComputedRef<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:visible" | "update:modelValue" | "pathChange")[], "change" | "update:visible" | "update:modelValue" | "pathChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: ArrayConstructor;
    visible: BooleanConstructor;
    title: StringConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    poppable: {
        type: BooleanConstructor;
        default: boolean;
    };
    convertConfig: ObjectConstructor;
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
        type: import("vue").PropType<import("../popup/types").PopupPosition>;
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
        type: import("vue").PropType<import("../popup/types").PopupCloseIconPosition>;
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
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPathChange?: ((...args: any[]) => any) | undefined;
}>, {
    round: boolean;
    lazy: boolean;
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
    options: unknown[];
    valueKey: string;
    textKey: string;
    childrenKey: string;
    poppable: boolean;
}, {}, {
    NutCascaderItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        modelValue: ArrayConstructor;
        options: {
            type: ArrayConstructor;
            default: () => never[];
        };
        lazy: BooleanConstructor;
        lazyLoad: FunctionConstructor;
        valueKey: {
            type: StringConstructor;
            default: string;
        };
        textKey: {
            type: StringConstructor;
            default: string;
        };
        childrenKey: {
            type: StringConstructor;
            default: string;
        };
        convertConfig: ObjectConstructor;
    }>, {
        handleNode(node: CascaderOption, silent?: boolean | undefined): Promise<void>;
        handleTabClick(tab: import("./types").CascaderTabs): void;
        formatTabTitle(pane: import("./types").CascaderPane): any;
        isSelected(pane: import("./types").CascaderPane, node: CascaderOption): boolean;
        panes: Ref<import("./types").CascaderPane[], import("./types").CascaderPane[]>;
        initLoading: Ref<boolean, boolean>;
        tabsCursor: Ref<number, number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "pathChange")[], "change" | "update:modelValue" | "pathChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        visible: BooleanConstructor;
        modelValue: ArrayConstructor;
        options: {
            type: ArrayConstructor;
            default: () => never[];
        };
        lazy: BooleanConstructor;
        lazyLoad: FunctionConstructor;
        valueKey: {
            type: StringConstructor;
            default: string;
        };
        textKey: {
            type: StringConstructor;
            default: string;
        };
        childrenKey: {
            type: StringConstructor;
            default: string;
        };
        convertConfig: ObjectConstructor;
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onPathChange?: ((...args: any[]) => any) | undefined;
    }>, {
        lazy: boolean;
        visible: boolean;
        options: unknown[];
        valueKey: string;
        textKey: string;
        childrenKey: string;
    }, {}, {
        Loading: typeof import("@nutui/icons-vue-taro").Loading;
        Checklist: typeof import("@nutui/icons-vue-taro").Checklist;
        NutTabs: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            direction: {
                type: import("vue").PropType<import("../tabs/types").TabsDirection>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../tabs/types").TabsSize>;
                default: string;
            };
            type: {
                type: import("vue").PropType<import("../tabs/types").TabsType>;
                default: string;
            };
            titleScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            ellipsis: {
                type: BooleanConstructor;
                default: boolean;
            };
            swipeable: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoHeight: {
                type: BooleanConstructor;
                default: boolean;
            };
            background: {
                type: StringConstructor;
                default: string;
            };
            animatedTime: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            titleGutter: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            sticky: {
                type: BooleanConstructor;
                default: boolean;
            };
            top: {
                type: NumberConstructor;
                default: number;
            };
            align: {
                type: import("vue").PropType<import("../tabs/types").TabsAlign>;
                default: string;
            };
        }>, {
            onTouchStart(event: TouchEvent): void;
            onTouchMove(event: TouchEvent): void;
            onTouchEnd(): void;
            isBegin: () => boolean;
            isEnd: () => boolean;
            next: () => void;
            prev: () => void;
            updateValue: (item: import("../tabs/index.taro.vue").Title) => void;
            tabChange: (item: import("../tabs/index.taro.vue").Title, index: number) => void;
            setTabItemRef: (el: HTMLElement, index: number) => void;
            titles: Ref<import("../tabs/index.taro.vue").Title[], import("../tabs/index.taro.vue").Title[]>;
            tabsContentRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
            contentStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
            tabsNavStyle: import("vue").ComputedRef<{
                background: string;
            }>;
            titleStyle: import("vue").ComputedRef<{
                paddingTop?: undefined;
                paddingBottom?: undefined;
                paddingLeft?: undefined;
                paddingRight?: undefined;
            } | {
                paddingTop: string | undefined;
                paddingBottom: string | undefined;
                paddingLeft?: undefined;
                paddingRight?: undefined;
            } | {
                paddingLeft: string | undefined;
                paddingRight: string | undefined;
                paddingTop?: undefined;
                paddingBottom?: undefined;
            }>;
            tabsActiveStyle: import("vue").ComputedRef<{
                color: string;
                background: string;
            }>;
            container: Ref<null, null>;
            scrollLeft: Ref<number, number>;
            scrollTop: Ref<number, number>;
            getScrollX: import("vue").ComputedRef<boolean>;
            getScrollY: import("vue").ComputedRef<boolean>;
            scrollWithAnimation: Ref<boolean, boolean>;
            canShowLabel: Ref<boolean, boolean>;
            refRandomId: string;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "update:modelValue")[], "change" | "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            modelValue: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            direction: {
                type: import("vue").PropType<import("../tabs/types").TabsDirection>;
                default: string;
            };
            size: {
                type: import("vue").PropType<import("../tabs/types").TabsSize>;
                default: string;
            };
            type: {
                type: import("vue").PropType<import("../tabs/types").TabsType>;
                default: string;
            };
            titleScroll: {
                type: BooleanConstructor;
                default: boolean;
            };
            ellipsis: {
                type: BooleanConstructor;
                default: boolean;
            };
            swipeable: {
                type: BooleanConstructor;
                default: boolean;
            };
            autoHeight: {
                type: BooleanConstructor;
                default: boolean;
            };
            background: {
                type: StringConstructor;
                default: string;
            };
            animatedTime: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            titleGutter: {
                type: (NumberConstructor | StringConstructor)[];
                default: number;
            };
            sticky: {
                type: BooleanConstructor;
                default: boolean;
            };
            top: {
                type: NumberConstructor;
                default: number;
            };
            align: {
                type: import("vue").PropType<import("../tabs/types").TabsAlign>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        }>, {
            color: string;
            type: import("../tabs/types").TabsType;
            size: import("../tabs/types").TabsSize;
            top: number;
            background: string;
            ellipsis: boolean;
            sticky: boolean;
            direction: import("../tabs/types").TabsDirection;
            align: import("../tabs/types").TabsAlign;
            modelValue: string | number;
            titleScroll: boolean;
            swipeable: boolean;
            autoHeight: boolean;
            animatedTime: string | number;
            titleGutter: string | number;
        }, {}, {
            JoySmile: typeof import("@nutui/icons-vue-taro").JoySmile;
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
        NutTabPane: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            title: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            paneKey: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>, any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            title: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            paneKey: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            disabled: {
                type: BooleanConstructor;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            disabled: boolean;
            title: string | number;
            paneKey: string | number;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
            type: import("vue").PropType<import("../popup/types").PopupPosition>;
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
            type: import("vue").PropType<import("../popup/types").PopupCloseIconPosition>;
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
        zIndex: Ref<string | number, string | number>;
        showSlot: Ref<boolean, boolean>;
        closed: Ref<boolean, boolean>;
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
            type: import("vue").PropType<import("../popup/types").PopupPosition>;
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
            type: import("vue").PropType<import("../popup/types").PopupCloseIconPosition>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: import("vue").PropType<boolean>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: import("vue").PropType<boolean>;
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
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                visible: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                zIndex: {
                    type: import("vue").PropType<string | number>;
                    default: number;
                };
                lockScroll: {
                    type: import("vue").PropType<boolean>;
                    default: boolean;
                };
                overlayClass: {
                    type: import("vue").PropType<string>;
                    default: string;
                };
                overlayStyle: {
                    type: import("vue").PropType<import("vue").CSSProperties>;
                };
                closeOnClickOverlay: {
                    type: import("vue").PropType<boolean>;
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
                type: import("vue").PropType<string | number>;
                default: number;
            };
            visible: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: import("vue").PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: import("vue").PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: import("vue").PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: import("vue").PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: import("vue").PropType<boolean>;
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
        NutCascader: typeof _default;
    }
}