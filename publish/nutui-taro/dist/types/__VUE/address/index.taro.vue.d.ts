import { PropType } from 'vue';
import { Location, Location2, Check, Close, Left } from '@nutui/icons-vue-taro';
import { AddressData, CustomRegionData, existRegionData } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    province: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    city: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    country: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    town: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    isShowCustomAddress: {
        type: BooleanConstructor;
        default: boolean;
    };
    existAddress: {
        type: PropType<existRegionData[]>;
        default: () => never[];
    };
    existAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    customAndExistTitle: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    columnsPlaceholder: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
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
    translate: (keyPath: string, ...args: unknown[]) => any;
    transformData: (data: AddressData[]) => CustomRegionData[];
    scrollTop: import("vue").Ref<number, number>;
    scrollChange: (e: any) => void;
    province: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    city: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    country: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    town: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    round: import("vue").Ref<boolean, boolean>;
    type: import("vue").Ref<string, string>;
    duration: import("vue").Ref<string | number, string | number>;
    transition: import("vue").Ref<string, string>;
    style: import("vue").Ref<Record<string, any>, Record<string, any>>;
    visible: import("vue").Ref<boolean, boolean>;
    zIndex: import("vue").Ref<string | number, string | number>;
    lockScroll: import("vue").Ref<boolean, boolean>;
    overlayClass: import("vue").Ref<string, string>;
    overlayStyle: import("vue").Ref<Record<string, any>, Record<string, any>>;
    closeOnClickOverlay: import("vue").Ref<boolean, boolean>;
    overlay: import("vue").Ref<boolean, boolean>;
    position: import("vue").Ref<import("../popup/types").PopupPosition, import("../popup/types").PopupPosition>;
    height: import("vue").Ref<string | number, string | number>;
    popClass: import("vue").Ref<string, string>;
    closeable: import("vue").Ref<boolean, boolean>;
    closeIconPosition: import("vue").Ref<import("../popup/types").PopupCloseIconPosition, import("../popup/types").PopupCloseIconPosition>;
    destroyOnClose: import("vue").Ref<boolean, boolean>;
    teleport: import("vue").Ref<string | Element, string | Element>;
    teleportDisable: import("vue").Ref<boolean, boolean>;
    safeAreaInsetBottom: import("vue").Ref<boolean, boolean>;
    modelValue: import("vue").Ref<unknown[], unknown[]>;
    customAddressTitle: import("vue").Ref<string, string>;
    isShowCustomAddress: import("vue").Ref<boolean, boolean>;
    existAddress: import("vue").Ref<existRegionData[], existRegionData[]>;
    existAddressTitle: import("vue").Ref<string, string>;
    customAndExistTitle: import("vue").Ref<string, string>;
    columnsPlaceholder: import("vue").Ref<string | unknown[], string | unknown[]>;
    onChange: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    "onUpdate:visible": import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onClose: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onSelected: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onType: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onCloseMask: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onSwitchModule: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    showPopup: import("vue").Ref<boolean, boolean>;
    privateType: import("vue").Ref<string, string>;
    tabIndex: import("vue").Ref<number, number>;
    tabName: import("vue").Ref<string[], string[]>;
    regionList: import("vue").ComputedRef<AddressData[]>;
    selectedRegion: import("vue").Ref<{
        [x: string]: any;
        name: string;
        id: string | number;
    }[], AddressData[] | {
        [x: string]: any;
        name: string;
        id: string | number;
    }[]>;
    selectedExistAddress: {};
    switchModule: () => void;
    closeWay: import("vue").Ref<string, string>;
    close: () => void;
    getTabName: (item: AddressData | null, index: number) => any;
    nextAreaList: (item: AddressData) => void;
    lineDistance: import("vue").Ref<number, number>;
    changeRegionTab: (item: AddressData, index: number) => void;
    selectedExist: (item: existRegionData) => void;
    clickOverlay: () => void;
    handClose: (type?: string) => void;
    handleElevatorItem: (key: string, item: AddressData) => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "type" | "update:visible" | "selected" | "update:modelValue" | "closeMask" | "switchModule")[], "change" | "close" | "type" | "update:visible" | "selected" | "update:modelValue" | "closeMask" | "switchModule", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    customAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    province: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    city: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    country: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    town: {
        type: PropType<AddressData[]>;
        default: () => never[];
    };
    isShowCustomAddress: {
        type: BooleanConstructor;
        default: boolean;
    };
    existAddress: {
        type: PropType<existRegionData[]>;
        default: () => never[];
    };
    existAddressTitle: {
        type: StringConstructor;
        default: string;
    };
    customAndExistTitle: {
        type: StringConstructor;
        default: string;
    };
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    columnsPlaceholder: {
        type: (ArrayConstructor | StringConstructor)[];
        default: string;
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
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onType?: ((...args: any[]) => any) | undefined;
    onCloseMask?: ((...args: any[]) => any) | undefined;
    onSwitchModule?: ((...args: any[]) => any) | undefined;
}>, {
    round: boolean;
    type: string;
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
    height: string | number;
    popClass: string;
    closeable: boolean;
    closeIconPosition: import("../popup/types").PopupCloseIconPosition;
    destroyOnClose: boolean;
    teleport: string | Element;
    teleportDisable: boolean;
    safeAreaInsetBottom: boolean;
    modelValue: unknown[];
    customAddressTitle: string;
    province: AddressData[];
    city: AddressData[];
    country: AddressData[];
    town: AddressData[];
    isShowCustomAddress: boolean;
    existAddress: existRegionData[];
    existAddressTitle: string;
    customAndExistTitle: string;
    columnsPlaceholder: string | unknown[];
}, {}, {
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
        Close: typeof Close;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    NutElevator: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        acceptKey: {
            type: StringConstructor[];
            default: string;
        };
        indexList: {
            type: PropType<any[]>;
            default: () => never[];
        };
        isSticky: {
            type: BooleanConstructor[];
            default: boolean;
        };
        spaceHeight: {
            type: NumberConstructor[];
            default: number;
        };
        titleHeight: {
            type: NumberConstructor[];
            default: number;
        };
    }>, {
        clientHeight: import("vue").ComputedRef<number>;
        fixedStyle: import("vue").ComputedRef<{
            height: string;
        }>;
        setListGroup: (el: any) => void;
        listview: import("vue").Ref<HTMLElement, HTMLElement>;
        touchStart: (e: TouchEvent) => void;
        touchMove: (e: TouchEvent) => void;
        touchEnd: () => void;
        handleClickItem: (key: string, item: import("../elevator/type").ElevatorData) => void;
        handleClickIndex: (key: string) => void;
        listViewScroll: (e: Event) => void;
        anchorIndex: import("vue").Ref<number, number>;
        codeIndex: import("vue").Ref<number, number>;
        listHeight: import("vue").Ref<number[], number[]>;
        listGroup: import("vue").Ref<HTMLLIElement[], HTMLLIElement[]>;
        touchState: import("vue").Ref<{
            y1: number;
            y2: number;
        }, {
            y1: number;
            y2: number;
        }>;
        scrollStart: import("vue").Ref<boolean, boolean>;
        currentIndex: import("vue").Ref<number, number>;
        query: import("vue").Ref<{
            exec: (callback?: ((...args: any[]) => any) | undefined) => import("@tarojs/taro").NodesRef;
            in: (component: TaroGeneral.IAnyObject) => import("@tarojs/taro").SelectorQuery;
            select: (selector: string) => import("@tarojs/taro").NodesRef;
            selectAll: (selector: string) => import("@tarojs/taro").NodesRef;
            selectViewport: () => import("@tarojs/taro").NodesRef;
        }, {
            exec: (callback?: ((...args: any[]) => any) | undefined) => import("@tarojs/taro").NodesRef;
            in: (component: TaroGeneral.IAnyObject) => import("@tarojs/taro").SelectorQuery;
            select: (selector: string) => import("@tarojs/taro").NodesRef;
            selectAll: (selector: string) => import("@tarojs/taro").NodesRef;
            selectViewport: () => import("@tarojs/taro").NodesRef;
        }>;
        scrollTop: import("vue").Ref<number, number>;
        currentData: import("vue").Ref<{
            [x: string]: string | number;
            name: string;
            id: string | number;
        }, {
            [x: string]: string | number;
            name: string;
            id: string | number;
        }>;
        currentKey: import("vue").Ref<string, string>;
        scrollY: import("vue").Ref<number, number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "clickItem" | "clickIndex")[], "change" | "clickItem" | "clickIndex", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        acceptKey: {
            type: StringConstructor[];
            default: string;
        };
        indexList: {
            type: PropType<any[]>;
            default: () => never[];
        };
        isSticky: {
            type: BooleanConstructor[];
            default: boolean;
        };
        spaceHeight: {
            type: NumberConstructor[];
            default: number;
        };
        titleHeight: {
            type: NumberConstructor[];
            default: number;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        onClickItem?: ((...args: any[]) => any) | undefined;
        onClickIndex?: ((...args: any[]) => any) | undefined;
    }>, {
        height: string | number;
        acceptKey: string;
        indexList: any[];
        isSticky: boolean;
        spaceHeight: number;
        titleHeight: number;
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
    Location: typeof Location;
    Location2: typeof Location2;
    Check: typeof Check;
    Close: typeof Close;
    Left: typeof Left;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAddress: typeof _default;
    }
}