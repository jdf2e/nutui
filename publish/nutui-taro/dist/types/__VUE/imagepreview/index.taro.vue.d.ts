/// <reference types="node" />
import { CSSProperties, PropType } from 'vue';
import { CircleClose } from '@nutui/icons-vue-taro';
import { Interceptor } from '@/packages/utils/util';
import { ImageInterface } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    initNo: {
        type: NumberConstructor;
        default: number;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationColor: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    beforeClose: PropType<Interceptor>;
    isLoop: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    setActive: (active: number) => void;
    onClose: () => void;
    closeOnImg: () => void;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: () => void;
    getDistance: (first: {
        x: number;
        y: number;
    }, second: {
        x: number;
        y: number;
    }) => number;
    scaleNow: () => void;
    longPress: (image: ImageInterface) => void;
    styles: import("vue").ComputedRef<CSSProperties>;
    showPop: import("vue").Ref<boolean, boolean>;
    active: import("vue").Ref<number, number>;
    options: import("vue").Ref<{
        muted: boolean;
        controls: boolean;
    }, {
        muted: boolean;
        controls: boolean;
    }>;
    eleImg: import("vue").Ref<HTMLElement | null, HTMLElement | null>;
    store: import("vue").Ref<{
        scale: number;
        moveable: boolean;
        originScale: number;
        oriDistance: number;
    }, {
        scale: number;
        moveable: boolean;
        originScale: number;
        oriDistance: number;
    }>;
    lastTouchEndTime: import("vue").Ref<number, number>;
    ENV: import("vue").Ref<TaroGeneral.ENV_TYPE, TaroGeneral.ENV_TYPE>;
    ENV_TYPE: import("vue").Ref<{
        WEAPP: TaroGeneral.ENV_TYPE.WEAPP;
        WEB: TaroGeneral.ENV_TYPE.WEB;
        RN: TaroGeneral.ENV_TYPE.RN;
        SWAN: TaroGeneral.ENV_TYPE.SWAN;
        ALIPAY: TaroGeneral.ENV_TYPE.ALIPAY;
        TT: TaroGeneral.ENV_TYPE.TT;
        QQ: TaroGeneral.ENV_TYPE.QQ;
        JD: TaroGeneral.ENV_TYPE.JD;
        HARMONYHYBRID: TaroGeneral.ENV_TYPE.HARMONYHYBRID;
    }, {
        WEAPP: TaroGeneral.ENV_TYPE.WEAPP;
        WEB: TaroGeneral.ENV_TYPE.WEB;
        RN: TaroGeneral.ENV_TYPE.RN;
        SWAN: TaroGeneral.ENV_TYPE.SWAN;
        ALIPAY: TaroGeneral.ENV_TYPE.ALIPAY;
        TT: TaroGeneral.ENV_TYPE.TT;
        QQ: TaroGeneral.ENV_TYPE.QQ;
        JD: TaroGeneral.ENV_TYPE.JD;
        HARMONYHYBRID: TaroGeneral.ENV_TYPE.HARMONYHYBRID;
    }>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "longPress")[], "change" | "close" | "longPress", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    initNo: {
        type: NumberConstructor;
        default: number;
    };
    paginationVisible: {
        type: BooleanConstructor;
        default: boolean;
    };
    paginationColor: {
        type: StringConstructor;
        default: string;
    };
    autoplay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeIconPosition: {
        type: StringConstructor;
        default: string;
    };
    beforeClose: PropType<Interceptor>;
    isLoop: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onLongPress?: ((...args: any[]) => any) | undefined;
}>, {
    show: boolean;
    closeable: boolean;
    closeIconPosition: string;
    paginationVisible: boolean;
    paginationColor: string;
    images: ImageInterface[];
    contentClose: boolean;
    initNo: number;
    autoplay: string | number;
    showIndex: boolean;
    isLoop: boolean;
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
                    type: PropType<CSSProperties>;
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
                    type: PropType<CSSProperties>;
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
                    type: PropType<CSSProperties>;
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
                type: PropType<CSSProperties>;
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
    NutSwiper: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        width: {
            type: (NumberConstructor | StringConstructor)[];
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
        };
        direction: {
            type: StringConstructor;
            default: string;
        };
        paginationVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationColor: {
            type: StringConstructor;
            default: string;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        autoPlay: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        initPage: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        isPreventDefault: {
            type: BooleanConstructor;
            default: boolean;
        };
        isStopPropagation: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationUnselectedColor: {
            type: StringConstructor;
            default: string;
        };
    }>, {
        state: {
            active: number;
            num: number;
            rect: {
                height: number;
                width: number;
                x: number;
                y: number;
                readonly bottom: number;
                readonly left: number;
                readonly right: number;
                readonly top: number;
                toJSON: () => any;
            } | null;
            width: number;
            height: number;
            moving: boolean;
            offset: number;
            touchTime: number;
            autoplayTimer: {
                ref: () => NodeJS.Timeout;
                unref: () => NodeJS.Timeout;
                hasRef: () => boolean;
                refresh: () => NodeJS.Timeout;
                [Symbol.toPrimitive]: () => number;
                [Symbol.dispose]: () => void;
            } | null | undefined;
            children: import("vue").ComponentPublicInstance[];
            childrenVNode: import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
                [key: string]: any;
            }>[];
            style: {};
        };
        refRandomId: string;
        classesPagination: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        classesInner: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        container: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        activePagination: import("vue").ComputedRef<number>;
        onTouchStart: (e: TouchEvent) => void;
        onTouchMove: (e: TouchEvent) => void;
        onTouchEnd: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        width: {
            type: (NumberConstructor | StringConstructor)[];
        };
        height: {
            type: (NumberConstructor | StringConstructor)[];
        };
        direction: {
            type: StringConstructor;
            default: string;
        };
        paginationVisible: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationColor: {
            type: StringConstructor;
            default: string;
        };
        loop: {
            type: BooleanConstructor;
            default: boolean;
        };
        duration: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        autoPlay: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        initPage: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        touchable: {
            type: BooleanConstructor;
            default: boolean;
        };
        isPreventDefault: {
            type: BooleanConstructor;
            default: boolean;
        };
        isStopPropagation: {
            type: BooleanConstructor;
            default: boolean;
        };
        paginationUnselectedColor: {
            type: StringConstructor;
            default: string;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
    }>, {
        duration: string | number;
        direction: string;
        paginationVisible: boolean;
        paginationColor: string;
        loop: boolean;
        autoPlay: string | number;
        initPage: string | number;
        touchable: boolean;
        isPreventDefault: boolean;
        isStopPropagation: boolean;
        paginationUnselectedColor: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    NutSwiperItem: import("vue").DefineComponent<{}, {
        style: import("vue").ComputedRef<any>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CircleClose: typeof CircleClose;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutImagePreview: typeof _default;
    }
}