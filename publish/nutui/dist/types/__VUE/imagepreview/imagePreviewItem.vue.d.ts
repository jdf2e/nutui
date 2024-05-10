import { CSSProperties, PropType } from 'vue';
import { ImageInterface } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
    getDistance: (touches: TouchList) => number;
    imageStyle: import("vue").ComputedRef<CSSProperties>;
    imageLoad: (event: Event) => void;
    closeSwiper: () => void;
    scale: import("vue").Ref<number>;
    moveX: import("vue").Ref<number>;
    moveY: import("vue").Ref<number>;
    moving: import("vue").Ref<boolean>;
    zooming: import("vue").Ref<boolean>;
    imageRatio: import("vue").Ref<number>;
    displayWidth: import("vue").Ref<number>;
    displayHeight: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("scale" | "close")[], "scale" | "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onClose?: ((...args: any[]) => any) | undefined;
    onScale?: ((...args: any[]) => any) | undefined;
}, {
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
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutImagePreview: typeof _default;
    }
}