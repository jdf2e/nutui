import { CSSProperties, PropType } from 'vue';
import { ImageInterface } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
    imageStyle: import("vue").ComputedRef<CSSProperties>;
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutImagePreview: typeof _default;
    }
}