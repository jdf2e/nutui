import { Ref, PropType } from 'vue';
import type { AvatarCropperToolbarPosition, AvatarCropperShape } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    maxZoom: {
        type: NumberConstructor;
        default: number;
    };
    space: {
        type: NumberConstructor;
        default: number;
    };
    toolbarPosition: {
        type: PropType<AvatarCropperToolbarPosition>;
        default: string;
    };
    editText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: PropType<AvatarCropperShape>;
        default: string;
    };
}>, {
    cropperPopupRef: Ref<HTMLElement, HTMLElement>;
    canvasRef: Ref<HTMLCanvasElement, HTMLCanvasElement>;
    inputImageRef: Ref<HTMLInputElement, HTMLInputElement>;
    highlightStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    inputImageChange: (event: Event) => Promise<void>;
    reset: () => void;
    rotate: () => void;
    cancel: (isEmit?: Boolean) => void;
    confirm: () => void;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    visible: Ref<boolean, boolean>;
    defScale: Ref<number, number>;
    scale: Ref<number, number>;
    angle: Ref<number, number>;
    moveX: Ref<number, number>;
    moveY: Ref<number, number>;
    moving: Ref<boolean, boolean>;
    zooming: Ref<boolean, boolean>;
    displayWidth: Ref<number, number>;
    displayHeight: Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "confirm")[], "cancel" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    maxZoom: {
        type: NumberConstructor;
        default: number;
    };
    space: {
        type: NumberConstructor;
        default: number;
    };
    toolbarPosition: {
        type: PropType<AvatarCropperToolbarPosition>;
        default: string;
    };
    editText: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: PropType<AvatarCropperShape>;
        default: string;
    };
}>> & Readonly<{
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    shape: AvatarCropperShape;
    space: number;
    confirmText: string;
    cancelText: string;
    maxZoom: number;
    toolbarPosition: AvatarCropperToolbarPosition;
    editText: string;
}, {}, {
    NutButton: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: PropType<string>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            type: {
                type: PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: PropType<string>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            type: {
                type: PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            color: {
                type: PropType<string>;
                default: string;
            };
            shape: {
                type: PropType<import("../button").ButtonShape>;
                default: string;
            };
            plain: {
                type: PropType<boolean>;
                default: boolean;
            };
            loading: {
                type: PropType<boolean>;
                default: boolean;
            };
            disabled: {
                type: PropType<boolean>;
                default: boolean;
            };
            type: {
                type: PropType<import("../button").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            color: string;
            shape: import("../button").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button").ButtonType;
            size: import("../button").ButtonSize;
            block: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        color: {
            type: PropType<string>;
            default: string;
        };
        shape: {
            type: PropType<import("../button").ButtonShape>;
            default: string;
        };
        plain: {
            type: PropType<boolean>;
            default: boolean;
        };
        loading: {
            type: PropType<boolean>;
            default: boolean;
        };
        disabled: {
            type: PropType<boolean>;
            default: boolean;
        };
        type: {
            type: PropType<import("../button").ButtonType>;
            default: string;
        };
        size: {
            type: PropType<import("../button").ButtonSize>;
            default: string;
        };
        block: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
    }, string, {
        color: string;
        shape: import("../button").ButtonShape;
        plain: boolean;
        loading: boolean;
        disabled: boolean;
        type: import("../button").ButtonType;
        size: import("../button").ButtonSize;
        block: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
        };
    });
    Refresh2: import("vue").DefineComponent<{
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
    Retweet: import("vue").DefineComponent<{
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
        NutAvatarCropper: typeof _default;
    }
}