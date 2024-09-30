/// <reference types="node" />
import type { PropType } from 'vue';
import { Interceptor } from '@/packages/utils/util';
import { ImageInterface } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    videos: {
        type: ArrayConstructor;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
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
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    teleportDisable: {
        ype: BooleanConstructor;
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
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    initNo: {
        type: NumberConstructor;
        default: number;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    minZoom: {
        type: NumberConstructor;
        default: number;
    };
    maxZoom: {
        type: NumberConstructor;
        default: number;
    };
}>, {
    onClose: () => void;
    mergeImages: import("vue").ComputedRef<any>;
    setActive: (active: number) => void;
    iconClasses: import("vue").ComputedRef<string>;
    showPop: import("vue").Ref<boolean, boolean>;
    active: import("vue").Ref<number, number>;
    rootWidth: import("vue").Ref<number, number>;
    rootHeight: import("vue").Ref<number, number>;
    swipeRef: import("vue").Ref<any, any>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close")[], "change" | "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    images: {
        type: PropType<ImageInterface[]>;
        default: () => never[];
    };
    videos: {
        type: ArrayConstructor;
        default: () => never[];
    };
    contentClose: {
        type: BooleanConstructor;
        default: boolean;
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
    teleport: {
        type: (StringConstructor | {
            new (): Element;
            prototype: Element;
        })[];
        default: string;
    };
    teleportDisable: {
        ype: BooleanConstructor;
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
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    initNo: {
        type: NumberConstructor;
        default: number;
    };
    showIndex: {
        type: BooleanConstructor;
        default: boolean;
    };
    minZoom: {
        type: NumberConstructor;
        default: number;
    };
    maxZoom: {
        type: NumberConstructor;
        default: number;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}>, {
    show: boolean;
    closeable: boolean;
    closeIconPosition: string;
    teleport: string | Element;
    teleportDisable: boolean;
    autoplay: string | number;
    paginationVisible: boolean;
    paginationColor: string;
    contentClose: boolean;
    initNo: number;
    showIndex: boolean;
    minZoom: number;
    maxZoom: number;
    images: ImageInterface[];
    videos: unknown[];
    isLoop: boolean;
}, {}, {
    ImagePreviewItem: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        image: {
            type: PropType<ImageInterface>;
            default: () => {};
        };
        video: {
            type: ObjectConstructor;
            default: () => {};
        };
        rootWidth: {
            type: NumberConstructor;
            default: number;
        };
        rootHeight: {
            type: NumberConstructor;
            default: number;
        };
        contentClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        show: {
            type: BooleanConstructor;
            default: boolean;
        };
        initNo: {
            type: NumberConstructor;
            default: number;
        };
        showIndex: {
            type: BooleanConstructor;
            default: boolean;
        };
        minZoom: {
            type: NumberConstructor;
            default: number;
        };
        maxZoom: {
            type: NumberConstructor;
            default: number;
        };
    }>, {
        onTouchStart: (event: TouchEvent) => void;
        onTouchMove: (event: TouchEvent) => void;
        onTouchEnd: (event: TouchEvent) => void;
        getDistance: (touches: TouchList) => number;
        imageStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        imageLoad: (event: Event) => void;
        closeSwiper: () => void;
        scale: import("vue").Ref<number, number>;
        moveX: import("vue").Ref<number, number>;
        moveY: import("vue").Ref<number, number>;
        moving: import("vue").Ref<boolean, boolean>;
        zooming: import("vue").Ref<boolean, boolean>;
        imageRatio: import("vue").Ref<number, number>;
        displayWidth: import("vue").Ref<number, number>;
        displayHeight: import("vue").Ref<number, number>;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "scale")[], "close" | "scale", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        image: {
            type: PropType<ImageInterface>;
            default: () => {};
        };
        video: {
            type: ObjectConstructor;
            default: () => {};
        };
        rootWidth: {
            type: NumberConstructor;
            default: number;
        };
        rootHeight: {
            type: NumberConstructor;
            default: number;
        };
        contentClose: {
            type: BooleanConstructor;
            default: boolean;
        };
        show: {
            type: BooleanConstructor;
            default: boolean;
        };
        initNo: {
            type: NumberConstructor;
            default: number;
        };
        showIndex: {
            type: BooleanConstructor;
            default: boolean;
        };
        minZoom: {
            type: NumberConstructor;
            default: number;
        };
        maxZoom: {
            type: NumberConstructor;
            default: number;
        };
    }>> & Readonly<{
        onClose?: ((...args: any[]) => any) | undefined;
        onScale?: ((...args: any[]) => any) | undefined;
    }>, {
        video: Record<string, any>;
        image: ImageInterface;
        show: boolean;
        rootWidth: number;
        rootHeight: number;
        contentClose: boolean;
        initNo: number;
        showIndex: boolean;
        minZoom: number;
        maxZoom: number;
    }, {}, {
        NutVideo: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
            source: {
                type: ObjectConstructor;
                default: {};
            };
            options: {
                type: ObjectConstructor;
                default: {
                    autoplay: boolean;
                    volume: number;
                    poster: string;
                    loop: boolean;
                    controls: boolean;
                    muted: boolean;
                    disabled: boolean;
                    playsinline: boolean;
                    touchPlay: boolean;
                    preload: string;
                };
                required: true;
            };
            model: {
                type: StringConstructor;
                default: string;
            };
        }>, {
            handleError: () => void;
            isDisabled: import("vue").ComputedRef<any>;
            play: () => false | undefined;
            handleMuted: () => void;
            touchSlidSrart: () => void;
            touchSlidMove: (e: any) => void;
            touchSlidEnd: (e: any) => void;
            retry: () => void;
            fullScreen: () => void;
            translate: (keyPath: string, ...args: unknown[]) => any;
            videoElm: import("vue").Ref<null, null>;
            initial: import("vue").Ref<boolean, boolean>;
            showToolbox: import("vue").Ref<boolean, boolean>;
            player: import("vue").Ref<{
                $player: null;
                pos: null;
            }, {
                $player: null;
                pos: null;
            }>;
            progressBar: import("vue").Ref<{
                progressElm: null;
                pos: null;
            }, {
                progressElm: null;
                pos: null;
            }>;
            videoSet: import("vue").Ref<{
                loaded: number;
                displayTime: string;
                totalTime: string;
                progress: {
                    width: number;
                    current: number;
                };
            }, {
                loaded: number;
                displayTime: string;
                totalTime: string;
                progress: {
                    width: number;
                    current: number;
                };
            }>;
            state: import("vue").Ref<{
                controlShow: boolean;
                vol: number;
                currentTime: number;
                fullScreen: boolean;
                playing: boolean;
                isLoading: boolean;
                isEnd: boolean;
                isError: boolean;
                isMuted: boolean;
            }, {
                controlShow: boolean;
                vol: number;
                currentTime: number;
                fullScreen: boolean;
                playing: boolean;
                isLoading: boolean;
                isEnd: boolean;
                isError: boolean;
                isMuted: boolean;
            }>;
            showTouchMask: import("vue").Ref<boolean, boolean>;
            source: import("vue").Ref<Record<string, any>, Record<string, any>>;
            options: import("vue").Ref<Record<string, any>, Record<string, any>>;
            model: import("vue").Ref<string, string>;
            onClick: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
            onPause: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
            onPlay: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
            onTime: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
            onPlayend: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
            root: import("vue").Ref<any, any>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "pause" | "play" | "time" | "playend")[], "click" | "pause" | "play" | "time" | "playend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
            source: {
                type: ObjectConstructor;
                default: {};
            };
            options: {
                type: ObjectConstructor;
                default: {
                    autoplay: boolean;
                    volume: number;
                    poster: string;
                    loop: boolean;
                    controls: boolean;
                    muted: boolean;
                    disabled: boolean;
                    playsinline: boolean;
                    touchPlay: boolean;
                    preload: string;
                };
                required: true;
            };
            model: {
                type: StringConstructor;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            onPause?: ((...args: any[]) => any) | undefined;
            onPlay?: ((...args: any[]) => any) | undefined;
            onTime?: ((...args: any[]) => any) | undefined;
            onPlayend?: ((...args: any[]) => any) | undefined;
        }>, {
            source: Record<string, any>;
            options: Record<string, any>;
            model: string;
        }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
        NutSwiperItem: import("vue").DefineComponent<{}, {
            style: import("vue").ComputedRef<any>;
        }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    CircleClose: import("vue").DefineComponent<{
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
        classesInner: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        classesPagination: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        container: import("vue").Ref<any, any>;
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
        touchable: boolean;
        loop: boolean;
        paginationVisible: boolean;
        paginationColor: string;
        autoPlay: string | number;
        initPage: string | number;
        isPreventDefault: boolean;
        isStopPropagation: boolean;
        paginationUnselectedColor: string;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutImagePreview: typeof _default;
    }
}