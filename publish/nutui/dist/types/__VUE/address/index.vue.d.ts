import { Ref, PropType } from 'vue';
import { AddressData, CustomRegionData, existRegionData } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
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
    translate: (keyPath: string, ...args: unknown[]) => any;
    regionList: import("vue").ComputedRef<AddressData[]>;
    transformData: (data: AddressData[]) => CustomRegionData[];
    scrollDom: Ref<HTMLElement | null, HTMLElement | null>;
    round: Ref<boolean, boolean>;
    type: Ref<string, string>;
    height: Ref<string | number, string | number>;
    style: Ref<Record<string, any>, Record<string, any>>;
    duration: Ref<string | number, string | number>;
    transition: Ref<string, string>;
    visible: Ref<boolean, boolean>;
    zIndex: Ref<string | number, string | number>;
    lockScroll: Ref<boolean, boolean>;
    overlayClass: Ref<string, string>;
    overlayStyle: Ref<Record<string, any>, Record<string, any>>;
    closeOnClickOverlay: Ref<boolean, boolean>;
    overlay: Ref<boolean, boolean>;
    position: Ref<import("../popup/types").PopupPosition, import("../popup/types").PopupPosition>;
    popClass: Ref<string, string>;
    closeable: Ref<boolean, boolean>;
    closeIconPosition: Ref<import("../popup/types").PopupCloseIconPosition, import("../popup/types").PopupCloseIconPosition>;
    destroyOnClose: Ref<boolean, boolean>;
    teleport: Ref<string | Element, string | Element>;
    teleportDisable: Ref<boolean, boolean>;
    safeAreaInsetBottom: Ref<boolean, boolean>;
    modelValue: Ref<unknown[], unknown[]>;
    customAddressTitle: Ref<string, string>;
    province: Ref<AddressData[], AddressData[]>;
    city: Ref<AddressData[], AddressData[]>;
    country: Ref<AddressData[], AddressData[]>;
    town: Ref<AddressData[], AddressData[]>;
    isShowCustomAddress: Ref<boolean, boolean>;
    existAddress: Ref<existRegionData[], existRegionData[]>;
    existAddressTitle: Ref<string, string>;
    customAndExistTitle: Ref<string, string>;
    columnsPlaceholder: Ref<string | unknown[], string | unknown[]>;
    onChange: Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    "onUpdate:visible": Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onClose: Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onSelected: Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onType: Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onCloseMask: Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onSwitchModule: Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    showPopup: Ref<boolean, boolean>;
    privateType: Ref<string, string>;
    tabIndex: Ref<number, number>;
    tabName: Ref<string[], string[]>;
    selectedRegion: Ref<{
        [x: string]: any;
        name: string;
        id: string | number;
    }[], AddressData[] | {
        [x: string]: any;
        name: string;
        id: string | number;
    }[]>;
    switchModule: () => void;
    closeWay: Ref<string, string>;
    close: () => void;
    getTabName: (item: AddressData | null, index: number) => any;
    nextAreaList: (item: AddressData) => void;
    regionLine: Ref<HTMLElement | null, HTMLElement | null>;
    tabRegion: Ref<any, any>;
    lineDistance: Ref<number, number>;
    changeRegionTab: (item: AddressData, index: number) => void;
    selectedExist: (item: existRegionData) => void;
    clickOverlay: () => void;
    handClose: (type?: string) => void;
    handleElevatorItem: (key: string, item: AddressData) => void;
    initCustomSelected: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "type" | "update:visible" | "selected" | "update:modelValue" | "closeMask" | "switchModule")[], "change" | "close" | "type" | "update:visible" | "selected" | "update:modelValue" | "closeMask" | "switchModule", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: ArrayConstructor;
        default: () => never[];
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
    height: string | number;
    style: Record<string, any>;
    duration: string | number;
    transition: string;
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
        style: Record<string, any>;
        duration: string | number;
        transition: string;
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
        Close: import("vue").DefineComponent<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }, {
            classes: import("vue").ComputedRef<{
                [x: string]: string | boolean;
                "nut-icon": boolean;
            }>;
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }>>, {
            name: string;
            width: string | number;
            height: string | number;
            color: string;
            class: string;
        }>;
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
        clientHeight: import("vue").ComputedRef<any>;
        setListGroup: (el: any) => void;
        listview: Ref<any, any>;
        touchStart: (e: TouchEvent) => void;
        touchMove: (e: TouchEvent) => void;
        touchEnd: () => void;
        handleClickItem: (key: string, item: import("../elevator/type").ElevatorData) => void;
        handleClickIndex: (key: string) => void;
        anchorIndex: Ref<number, number>;
        codeIndex: Ref<number, number>;
        listHeight: Ref<number[], number[]>;
        listGroup: Ref<HTMLLIElement[], HTMLLIElement[]>;
        touchState: Ref<{
            y1: number;
            y2: number;
        }, {
            y1: number;
            y2: number;
        }>;
        scrollStart: Ref<boolean, boolean>;
        currentIndex: Ref<number, number>;
        currentData: Ref<{
            [x: string]: string | number;
            name: string;
            id: string | number;
        }, {
            [x: string]: string | number;
            name: string;
            id: string | number;
        }>;
        currentKey: Ref<string, string>;
        scrollY: Ref<number, number>;
        diff: Ref<number, number>;
        fixedTop: Ref<number, number>;
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
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    Location: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
    Location2: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
    Check: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
    Close: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
    Left: import("vue").DefineComponent<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }, {
        classes: import("vue").ComputedRef<{
            [x: string]: string | boolean;
            "nut-icon": boolean;
        }>;
        style: import("vue").ComputedRef<import("vue").CSSProperties>;
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        class: {
            type: StringConstructor;
            default: string;
        };
        name: {
            type: StringConstructor;
            default: string;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        width: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
    }>>, {
        name: string;
        width: string | number;
        height: string | number;
        color: string;
        class: string;
    }>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAddress: typeof _default;
    }
}