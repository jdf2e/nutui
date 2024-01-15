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
    showAlipayCanvas2D: import("vue").ComputedRef<boolean>;
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
    cropperCanvasContext: import("vue").Ref<{
        fillStyle: string;
        strokeStyle: string;
        shadowOffsetX: number;
        shadowOffsetY: number;
        shadowBlur: number;
        shadowColor: string;
        lineWidth: number;
        lineCap: keyof Taro.CanvasContext.LineCap;
        lineJoin: keyof Taro.CanvasContext.LineJoin;
        miterLimit: number;
        lineDashOffset: number;
        font: string;
        globalAlpha: number;
        globalCompositeOperation: string;
        arc: (x: number, y: number, r: number, sAngle: number, eAngle: number, counterclockwise?: boolean | undefined) => void;
        arcTo: (x1: number, y1: number, x2: number, y2: number, radius: number) => void;
        beginPath: () => void;
        bezierCurveTo: (cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number) => void;
        clearRect: (x: number, y: number, width: number, height: number) => void;
        clip: () => void;
        closePath: () => void;
        createCircularGradient: (x: number, y: number, r: number) => Taro.CanvasGradient;
        createLinearGradient: (x0: number, y0: number, x1: number, y1: number) => Taro.CanvasGradient;
        createPattern: (image: string, repetition: keyof Taro.CanvasContext.Repetition) => CanvasPattern | Promise<CanvasPattern | null> | null;
        draw: (reserve?: boolean | undefined, callback?: ((...args: any[]) => any) | undefined) => void | Promise<void>;
        drawImage: {
            (imageResource: string, dx: number, dy: number): void;
            (imageResource: string, dx: number, dy: number, dWidth: number, dHeight: number): void;
            (imageResource: string, sx: number, sy: number, sWidth: number, sHeight: number, dx: number, dy: number, dWidth: number, dHeight: number): void;
        };
        fill: () => void;
        fillRect: (x: number, y: number, width: number, height: number) => void;
        fillText: (text: string, x: number, y: number, maxWidth?: number | undefined) => void;
        lineTo: (x: number, y: number) => void;
        measureText: (text: string) => TextMetrics;
        moveTo: (x: number, y: number) => void;
        quadraticCurveTo: (cpx: number, cpy: number, x: number, y: number) => void;
        rect: (x: number, y: number, width: number, height: number) => void;
        reset: () => void;
        restore: () => void;
        rotate: (rotate: number) => void;
        save: () => void;
        scale: (scaleWidth: number, scaleHeight: number) => void;
        setFillStyle: (color: string | Taro.CanvasGradient) => void;
        setFontSize: (fontSize: number) => void;
        setGlobalAlpha: (alpha: number) => void;
        setLineCap: (lineCap: keyof Taro.CanvasContext.LineCap) => void;
        setLineDash: (pattern: number[], offset: number) => void;
        setLineJoin: (lineJoin: keyof Taro.CanvasContext.LineJoin) => void;
        setLineWidth: (lineWidth: number) => void;
        setMiterLimit: (miterLimit: number) => void;
        setShadow: (offsetX: number, offsetY: number, blur: number, color: string) => void;
        setStrokeStyle: (color: string | Taro.CanvasGradient) => void;
        setTextAlign: (align: keyof Taro.CanvasContext.Align) => void;
        setTextBaseline: (textBaseline: keyof Taro.CanvasContext.TextBaseline) => void;
        setTransform: (scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: number) => void;
        stroke: () => void;
        strokeRect: (x: number, y: number, width: number, height: number) => void;
        strokeText: (text: string, x: number, y: number, maxWidth?: number | undefined) => void;
        transform: (scaleX: number, scaleY: number, skewX: number, skewY: number, translateX: number, translateY: number) => void;
        translate: (x: number, y: number) => void;
    } | null>;
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
    space: number;
    shape: AvatarCropperShape;
    maxZoom: number;
    toolbarPosition: AvatarCropperToolbarPosition;
    editText: string;
    cancelText: string;
    confirmText: string;
    sizeType: AvatarCropperSizeType[];
    sourceType: AvatarCropperSourceType[];
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutAvatarCropper: typeof _default;
  }
}