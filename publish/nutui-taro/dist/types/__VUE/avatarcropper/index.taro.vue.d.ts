import { PropType } from 'vue';
import type { AvatarCropperToolbarPosition, AvatarCropperSizeType, AvatarCropperSourceType, AvatarCropperShape } from './types';
import Taro from '@tarojs/taro';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
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
    canvasId: import("vue").Ref<string>;
    cropperCanvas: import("vue").Ref<any>;
    cropperCanvasContext: import("vue").Ref<Taro.CanvasContext | null>;
    visible: import("vue").Ref<boolean>;
    defScale: import("vue").Ref<number>;
    scale: import("vue").Ref<number>;
    angle: import("vue").Ref<number>;
    moveX: import("vue").Ref<number>;
    moveY: import("vue").Ref<number>;
    moving: import("vue").Ref<boolean>;
    zooming: import("vue").Ref<boolean>;
    displayWidth: import("vue").Ref<number>;
    displayHeight: import("vue").Ref<number>;
    cropperWidth: import("vue").Ref<number>;
    cropperHeight: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "confirm")[], "cancel" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    shape: AvatarCropperShape;
    space: number;
    confirmText: string;
    cancelText: string;
    sizeType: AvatarCropperSizeType[];
    sourceType: AvatarCropperSourceType[];
    maxZoom: number;
    toolbarPosition: AvatarCropperToolbarPosition;
    editText: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAvatarCropper: typeof _default;
    }
}