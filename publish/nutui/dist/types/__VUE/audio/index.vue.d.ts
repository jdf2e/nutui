import { type PropType } from 'vue';
import { type AudioType } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    url: {
        type: StringConstructor;
        default: string;
    };
    muted: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    preload: {
        type: StringConstructor;
        default: string;
    };
    second: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: PropType<AudioType>;
        default: string;
    };
}, {
    audioRef: import("vue").Ref<null>;
    fastBack: () => void;
    forward: () => void;
    changeStatus: () => void;
    progressChange: (val: number) => void;
    audioEnd: () => void;
    onTimeupdate: (e: any) => void;
    handleMute: () => void;
    onCanplay: (e: Event) => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    currentTime: import("vue").Ref<number>;
    currentDuration: import("vue").Ref<string>;
    percent: import("vue").Ref<number>;
    duration: import("vue").Ref<string>;
    second: import("vue").Ref<number>;
    hanMuted: import("vue").Ref<boolean>;
    playing: import("vue").Ref<boolean>;
    handPlaying: import("vue").Ref<boolean>;
    type: import("vue").Ref<AudioType>;
    url: import("vue").Ref<string>;
    muted: import("vue").Ref<boolean>;
    autoplay: import("vue").Ref<boolean>;
    loop: import("vue").Ref<boolean>;
    preload: import("vue").Ref<string>;
    onEnded: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onPlay: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onForward: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onMute: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onFastBack: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onChangeProgress: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onCanPlay: import("vue").Ref<((...args: any[]) => any) | undefined>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("ended" | "play" | "forward" | "mute" | "fastBack" | "changeProgress" | "canPlay")[], "ended" | "play" | "forward" | "mute" | "fastBack" | "changeProgress" | "canPlay", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    url: {
        type: StringConstructor;
        default: string;
    };
    muted: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoplay: {
        type: BooleanConstructor;
        default: boolean;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    preload: {
        type: StringConstructor;
        default: string;
    };
    second: {
        type: NumberConstructor;
        default: number;
    };
    type: {
        type: PropType<AudioType>;
        default: string;
    };
}>> & {
    onEnded?: ((...args: any[]) => any) | undefined;
    onPlay?: ((...args: any[]) => any) | undefined;
    onForward?: ((...args: any[]) => any) | undefined;
    onMute?: ((...args: any[]) => any) | undefined;
    onFastBack?: ((...args: any[]) => any) | undefined;
    onChangeProgress?: ((...args: any[]) => any) | undefined;
    onCanPlay?: ((...args: any[]) => any) | undefined;
}, {
    type: AudioType;
    url: string;
    muted: boolean;
    autoplay: boolean;
    loop: boolean;
    preload: string;
    second: number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAudio: typeof _default;
    }
}