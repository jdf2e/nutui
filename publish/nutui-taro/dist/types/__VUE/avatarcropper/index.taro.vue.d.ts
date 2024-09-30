import { PropType } from 'vue';
import type { AvatarCropperToolbarPosition, AvatarCropperSizeType, AvatarCropperSourceType, AvatarCropperShape } from './types';
import { IconFont } from '@nutui/icons-vue-taro';
import Taro from '@tarojs/taro';

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
    sizeType: {
        type: PropType<AvatarCropperSizeType[]>;
        default: () => string[];
    };
    sourceType: {
        type: PropType<AvatarCropperSourceType[]>;
        default: () => string[];
    };
}>, {
    showCanvas2D: import("vue").ComputedRef<boolean | "" | undefined>;
    highlightStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    canvasStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
    }>;
    cutCanvasStyle: import("vue").ComputedRef<{
        top: string;
        left: string;
        width: string;
        height: string;
    }>;
    chooseImage: () => void;
    reset: () => void;
    rotate: () => void;
    cancel: (isEmit?: Boolean) => void;
    confirm: () => void;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    canvasId: import("vue").Ref<string, string>;
    cropperCanvas: import("vue").Ref<any, any>;
    cropperCanvasContext: import("vue").Ref<Taro.CanvasContext | null, Taro.CanvasContext | null>;
    visible: import("vue").Ref<boolean, boolean>;
    defScale: import("vue").Ref<number, number>;
    scale: import("vue").Ref<number, number>;
    angle: import("vue").Ref<number, number>;
    moveX: import("vue").Ref<number, number>;
    moveY: import("vue").Ref<number, number>;
    moving: import("vue").Ref<boolean, boolean>;
    zooming: import("vue").Ref<boolean, boolean>;
    displayWidth: import("vue").Ref<number, number>;
    displayHeight: import("vue").Ref<number, number>;
    cropperWidth: import("vue").Ref<number, number>;
    cropperHeight: import("vue").Ref<number, number>;
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
    sizeType: {
        type: PropType<AvatarCropperSizeType[]>;
        default: () => string[];
    };
    sourceType: {
        type: PropType<AvatarCropperSourceType[]>;
        default: () => string[];
    };
}>> & Readonly<{
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    shape: AvatarCropperShape;
    space: number;
    confirmText: string;
    cancelText: string;
    sizeType: AvatarCropperSizeType[];
    sourceType: AvatarCropperSourceType[];
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
                type: PropType<import("../button/types").ButtonShape>;
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
                type: PropType<import("../button/types").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button/types").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
            formType: {
                type: PropType<import("../button/types").ButtonFormType>;
                default: string;
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
                type: PropType<import("../button/types").ButtonShape>;
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
                type: PropType<import("../button/types").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button/types").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
            formType: {
                type: PropType<import("../button/types").ButtonFormType>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {
            color: string;
            shape: import("../button/types").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button/types").ButtonType;
            size: import("../button/types").ButtonSize;
            block: boolean;
            formType: import("../button/types").ButtonFormType;
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
                type: PropType<import("../button/types").ButtonShape>;
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
                type: PropType<import("../button/types").ButtonType>;
                default: string;
            };
            size: {
                type: PropType<import("../button/types").ButtonSize>;
                default: string;
            };
            block: {
                type: PropType<boolean>;
                default: boolean;
            };
            formType: {
                type: PropType<import("../button/types").ButtonFormType>;
                default: string;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            color: string;
            shape: import("../button/types").ButtonShape;
            plain: boolean;
            loading: boolean;
            disabled: boolean;
            type: import("../button/types").ButtonType;
            size: import("../button/types").ButtonSize;
            block: boolean;
            formType: import("../button/types").ButtonFormType;
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
            type: PropType<import("../button/types").ButtonShape>;
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
            type: PropType<import("../button/types").ButtonType>;
            default: string;
        };
        size: {
            type: PropType<import("../button/types").ButtonSize>;
            default: string;
        };
        block: {
            type: PropType<boolean>;
            default: boolean;
        };
        formType: {
            type: PropType<import("../button/types").ButtonFormType>;
            default: string;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
    }, string, {
        color: string;
        shape: import("../button/types").ButtonShape;
        plain: boolean;
        loading: boolean;
        disabled: boolean;
        type: import("../button/types").ButtonType;
        size: import("../button/types").ButtonSize;
        block: boolean;
        formType: import("../button/types").ButtonFormType;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            icon?(_: {}): any;
            default?(_: {}): any;
        };
    });
    IconFont: typeof IconFont;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAvatarCropper: typeof _default;
    }
}