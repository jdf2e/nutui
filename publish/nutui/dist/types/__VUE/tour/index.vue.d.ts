import { PropType } from 'vue';
import { PopoverLocation, PopoverTheme } from '../popover/type';
export interface StepOptions {
    target: Element | string;
    content?: string;
    location?: PopoverLocation;
    popoverOffset?: number[];
    arrowOffset?: number;
}
export type TourType = 'step' | 'tile';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<TourType>;
        default: string;
    };
    steps: {
        type: PropType<StepOptions[]>;
        default: () => never[];
    };
    location: {
        type: PropType<PopoverLocation>;
        default: string;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    nextStepTxt: {
        type: StringConstructor;
        default: string;
    };
    prevStepTxt: {
        type: StringConstructor;
        default: string;
    };
    completeTxt: {
        type: StringConstructor;
        default: string;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: {
        type: PropType<Number[]>;
        default: number[];
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    maskWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    maskHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrevStep: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitleBar: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    classes: import("vue").ComputedRef<string>;
    maskStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
        top: string;
        left: string;
    }>;
    changeStep: (type: string) => void;
    close: () => void;
    handleClickMask: () => void;
    showTour: import("vue").Ref<boolean, boolean>;
    showPopup: import("vue").Ref<boolean, boolean>;
    active: import("vue").Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "update:modelValue")[], "change" | "close" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<TourType>;
        default: string;
    };
    steps: {
        type: PropType<StepOptions[]>;
        default: () => never[];
    };
    location: {
        type: PropType<PopoverLocation>;
        default: string;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    nextStepTxt: {
        type: StringConstructor;
        default: string;
    };
    prevStepTxt: {
        type: StringConstructor;
        default: string;
    };
    completeTxt: {
        type: StringConstructor;
        default: string;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: {
        type: PropType<Number[]>;
        default: number[];
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    maskWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    maskHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrevStep: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitleBar: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    type: TourType;
    mask: boolean;
    closeOnClickOverlay: boolean;
    offset: Number[];
    theme: PopoverTheme;
    current: number;
    modelValue: boolean;
    completeTxt: string;
    bgColor: string;
    steps: StepOptions[];
    location: PopoverLocation;
    nextStepTxt: string;
    prevStepTxt: string;
    maskWidth: string | number;
    maskHeight: string | number;
    showPrevStep: boolean;
    showTitleBar: boolean;
}, {}, {
    NutPopover: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        list: {
            type: PropType<import("../popover/type").PopoverList[]>;
            default: never[];
        };
        theme: {
            type: PropType<PopoverTheme>;
            default: string;
        };
        location: {
            type: PropType<PopoverLocation>;
            default: string;
        };
        offset: {
            type: ArrayConstructor;
            default: number[];
        };
        arrowOffset: {
            type: NumberConstructor;
            default: number;
        };
        customClass: {
            type: StringConstructor;
            default: string;
        };
        showArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        overlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        overlayClass: {
            type: StringConstructor;
            default: string;
        };
        overlayStyle: {
            type: PropType<import("vue").CSSProperties>;
        };
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickAction: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickOutside: {
            type: BooleanConstructor;
            default: boolean;
        };
        targetId: {
            type: StringConstructor;
            default: string;
        };
        bgColor: {
            type: StringConstructor;
            default: string;
        };
    }>, {
        showPopup: import("vue").Ref<boolean, boolean>;
        openPopover: () => void;
        popoverArrow: import("vue").ComputedRef<string>;
        closePopover: () => void;
        chooseItem: (item: any, index: number) => void;
        popoverRef: import("vue").Ref<any, any>;
        popoverContentRef: import("vue").Ref<any, any>;
        getRootPosition: import("vue").ComputedRef<import("vue").CSSProperties>;
        popoverArrowStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        renderIcon: (icon: import("vue").Component, props?: any) => "" | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
            [key: string]: any;
        }>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "update:visible" | "open" | "choose" | "update")[], "close" | "update:visible" | "open" | "choose" | "update", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        visible: {
            type: BooleanConstructor;
            default: boolean;
        };
        list: {
            type: PropType<import("../popover/type").PopoverList[]>;
            default: never[];
        };
        theme: {
            type: PropType<PopoverTheme>;
            default: string;
        };
        location: {
            type: PropType<PopoverLocation>;
            default: string;
        };
        offset: {
            type: ArrayConstructor;
            default: number[];
        };
        arrowOffset: {
            type: NumberConstructor;
            default: number;
        };
        customClass: {
            type: StringConstructor;
            default: string;
        };
        showArrow: {
            type: BooleanConstructor;
            default: boolean;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        overlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        overlayClass: {
            type: StringConstructor;
            default: string;
        };
        overlayStyle: {
            type: PropType<import("vue").CSSProperties>;
        };
        closeOnClickOverlay: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickAction: {
            type: BooleanConstructor;
            default: boolean;
        };
        closeOnClickOutside: {
            type: BooleanConstructor;
            default: boolean;
        };
        targetId: {
            type: StringConstructor;
            default: string;
        };
        bgColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        onClose?: ((...args: any[]) => any) | undefined;
        onOpen?: ((...args: any[]) => any) | undefined;
        onChoose?: ((...args: any[]) => any) | undefined;
        onUpdate?: ((...args: any[]) => any) | undefined;
    }>, {
        duration: string | number;
        visible: boolean;
        overlayClass: string;
        closeOnClickOverlay: boolean;
        overlay: boolean;
        offset: unknown[];
        theme: PopoverTheme;
        list: import("../popover/type").PopoverList[];
        customClass: string;
        bgColor: string;
        location: PopoverLocation;
        arrowOffset: number;
        showArrow: boolean;
        closeOnClickAction: boolean;
        closeOnClickOutside: boolean;
        targetId: string;
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTour: typeof _default;
    }
}