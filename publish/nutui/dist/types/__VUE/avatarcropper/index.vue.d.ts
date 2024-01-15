import { Ref, PropType } from 'vue';
import type { AvatarCropperToolbarPosition, AvatarCropperShape } from './types';

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
}, {
    cropperPopupRef: Ref<HTMLElement>;
    canvasRef: Ref<HTMLCanvasElement>;
    inputImageRef: Ref<HTMLInputElement>;
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
    visible: Ref<boolean>;
    defScale: Ref<number>;
    scale: Ref<number>;
    angle: Ref<number>;
    moveX: Ref<number>;
    moveY: Ref<number>;
    moving: Ref<boolean>;
    zooming: Ref<boolean>;
    displayWidth: Ref<number>;
    displayHeight: Ref<number>;
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
}>> & {
    onCancel?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {
    shape: AvatarCropperShape;
    space: number;
    confirmText: string;
    cancelText: string;
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