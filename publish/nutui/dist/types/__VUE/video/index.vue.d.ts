import { Ref } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
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
    videoElm: Ref<null>;
    initial: Ref<boolean>;
    showToolbox: Ref<boolean>;
    player: Ref<{
        $player: null;
        pos: null;
    }>;
    progressBar: Ref<{
        progressElm: null;
        pos: null;
    }>;
    videoSet: Ref<{
        loaded: number;
        displayTime: string;
        totalTime: string;
        progress: {
            width: number;
            current: number;
        };
    }>;
    state: Ref<{
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
    showTouchMask: Ref<boolean>;
    source: Ref<Record<string, any>>;
    options: Ref<Record<string, any>>;
    model: Ref<string>;
    onClick: Ref<((...args: any[]) => any) | undefined>;
    onPause: Ref<((...args: any[]) => any) | undefined>;
    onPlay: Ref<((...args: any[]) => any) | undefined>;
    onTime: Ref<((...args: any[]) => any) | undefined>;
    onPlayend: Ref<((...args: any[]) => any) | undefined>;
    root: Ref<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "time" | "pause" | "play" | "playend")[], "click" | "time" | "pause" | "play" | "playend", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onPause?: ((...args: any[]) => any) | undefined;
    onPlay?: ((...args: any[]) => any) | undefined;
    onTime?: ((...args: any[]) => any) | undefined;
    onPlayend?: ((...args: any[]) => any) | undefined;
}, {
    source: Record<string, any>;
    options: Record<string, any>;
    model: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutVideo: typeof _default;
    }
}