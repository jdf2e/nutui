import { type PropType } from 'vue';
import { type AudioType } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {
    audioRef: import("vue").Ref<null, null>;
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
    currentTime: import("vue").Ref<number, number>;
    currentDuration: import("vue").Ref<string, string>;
    percent: import("vue").Ref<number, number>;
    duration: import("vue").Ref<string, string>;
    second: import("vue").Ref<number, number>;
    hanMuted: import("vue").Ref<boolean, boolean>;
    playing: import("vue").Ref<boolean, boolean>;
    handPlaying: import("vue").Ref<boolean, boolean>;
    type: import("vue").Ref<AudioType, AudioType>;
    url: import("vue").Ref<string, string>;
    muted: import("vue").Ref<boolean, boolean>;
    autoplay: import("vue").Ref<boolean, boolean>;
    loop: import("vue").Ref<boolean, boolean>;
    preload: import("vue").Ref<string, string>;
    onEnded: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onPlay: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onForward: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onMute: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onFastBack: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onChangeProgress: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onCanPlay: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("ended" | "play" | "forward" | "mute" | "fastBack" | "changeProgress" | "canPlay")[], "ended" | "play" | "forward" | "mute" | "fastBack" | "changeProgress" | "canPlay", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    onEnded?: ((...args: any[]) => any) | undefined;
    onPlay?: ((...args: any[]) => any) | undefined;
    onForward?: ((...args: any[]) => any) | undefined;
    onMute?: ((...args: any[]) => any) | undefined;
    onFastBack?: ((...args: any[]) => any) | undefined;
    onChangeProgress?: ((...args: any[]) => any) | undefined;
    onCanPlay?: ((...args: any[]) => any) | undefined;
}>, {
    type: AudioType;
    url: string;
    muted: boolean;
    autoplay: boolean;
    loop: boolean;
    preload: string;
    second: number;
}, {}, {
    Service: import("vue").DefineComponent<{
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
    NutRange: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: BooleanConstructor;
        activeColor: StringConstructor;
        inactiveColor: StringConstructor;
        buttonColor: StringConstructor;
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        marks: {
            type: ObjectConstructor;
            default: {};
        };
        hiddenRange: {
            type: BooleanConstructor;
            default: boolean;
        };
        hiddenTag: {
            type: BooleanConstructor;
            default: boolean;
        };
        min: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        max: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        step: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        modelValue: {
            type: PropType<import("../range/type").SliderValue>;
            default: number;
        };
    }>, {
        barStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
        curValue: (idx?: number | undefined) => number;
        buttonIndex: import("vue").Ref<number, number>;
        containerClasses: import("vue").ComputedRef<{
            "nut-range-container": boolean;
            "nut-range-container-vertical": boolean;
        }>;
        markClassName: (mark: number) => {
            "nut-range-mark-text": boolean;
            "nut-range-mark-text-active": boolean;
        };
        marksStyle: (mark: number) => import("vue").CSSProperties;
        marksList: import("vue").ComputedRef<number[]>;
        tickStyle: (mark: number) => import("vue").CSSProperties;
        disabled: import("vue").ComputedRef<boolean>;
        max: import("vue").Ref<string | number, string | number>;
        vertical: import("vue").Ref<boolean, boolean>;
        range: import("vue").Ref<boolean, boolean>;
        modelValue: import("vue").Ref<import("../range/type").SliderValue, import("../range/type").SliderValue>;
        marks: import("vue").Ref<Record<string, any>, Record<string, any>>;
        hiddenRange: import("vue").Ref<boolean, boolean>;
        hiddenTag: import("vue").Ref<boolean, boolean>;
        min: import("vue").Ref<string | number, string | number>;
        step: import("vue").Ref<string | number, string | number>;
        activeColor: import("vue").Ref<string | undefined, string | undefined>;
        inactiveColor: import("vue").Ref<string | undefined, string | undefined>;
        buttonColor: import("vue").Ref<string | undefined, string | undefined>;
        onChange: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
        "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
        onDragEnd: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
        onDragStart: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
        root: import("vue").Ref<HTMLElement | undefined, HTMLElement | undefined>;
        classes: import("vue").ComputedRef<{
            [x: string]: boolean;
        }>;
        wrapperStyle: import("vue").ComputedRef<{
            background: string | undefined;
        }>;
        buttonStyle: import("vue").ComputedRef<{
            borderColor: string | undefined;
        }>;
        onClick: (event: MouseEvent) => void;
        onTouchStart: (event: TouchEvent) => void;
        onTouchMove: (event: TouchEvent) => void;
        onTouchEnd: () => void;
    }, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "dragEnd" | "dragStart")[], "change" | "update:modelValue" | "dragEnd" | "dragStart", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        range: {
            type: BooleanConstructor;
            default: boolean;
        };
        disabled: BooleanConstructor;
        activeColor: StringConstructor;
        inactiveColor: StringConstructor;
        buttonColor: StringConstructor;
        vertical: {
            type: BooleanConstructor;
            default: boolean;
        };
        marks: {
            type: ObjectConstructor;
            default: {};
        };
        hiddenRange: {
            type: BooleanConstructor;
            default: boolean;
        };
        hiddenTag: {
            type: BooleanConstructor;
            default: boolean;
        };
        min: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        max: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        step: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        modelValue: {
            type: PropType<import("../range/type").SliderValue>;
            default: number;
        };
    }>> & Readonly<{
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
        onDragEnd?: ((...args: any[]) => any) | undefined;
        onDragStart?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
        max: string | number;
        vertical: boolean;
        range: boolean;
        modelValue: import("../range/type").SliderValue;
        marks: Record<string, any>;
        hiddenRange: boolean;
        hiddenTag: boolean;
        min: string | number;
        step: string | number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutAudio: typeof _default;
    }
}