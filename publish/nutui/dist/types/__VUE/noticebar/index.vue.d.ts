import { PropType } from 'vue';
import { NoticebarDirection } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    direction: {
        type: PropType<NoticebarDirection>;
        default: string;
    };
    list: {
        type: PropType<any[]>;
        default: () => never[];
    };
    standTime: {
        type: NumberConstructor;
        default: number;
    };
    complexAm: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    closeMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollable: {
        type: BooleanConstructor;
        default: null;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
}, {
    isEllipsis: import("vue").ComputedRef<boolean>;
    barStyle: import("vue").ComputedRef<{
        [props: string]: any;
    }>;
    contentStyle: import("vue").ComputedRef<{
        animationDelay: string;
        animationDuration: string;
        transform: string;
    }>;
    horseLampStyle: import("vue").ComputedRef<{}>;
    wrap: import("vue").Ref<HTMLElement | null>;
    content: import("vue").Ref<HTMLElement | null>;
    handleClick: (event: Event) => void;
    onClickIcon: (event: Event) => void;
    onAnimationEnd: (event: Event) => void;
    go: (item: any) => void;
    handleClickIcon: () => void;
    slots: Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>;
    pxCheck: (value?: string | number | undefined) => string | undefined;
    wrapContentClass: import("vue").ComputedRef<{
        [x: string]: boolean;
        'nut-noticebar__page-wrap-content': boolean;
        'nut-ellipsis': boolean;
    }>;
    wrapWidth: import("vue").Ref<number>;
    firstRound: import("vue").Ref<boolean>;
    duration: import("vue").Ref<number>;
    offsetWidth: import("vue").Ref<number>;
    showNoticebar: import("vue").Ref<boolean>;
    animationClass: import("vue").Ref<string>;
    animate: import("vue").Ref<boolean>;
    scrollList: import("vue").Ref<Readonly<{
        [name: string]: import("vue").Slot<any> | undefined;
    }>[]>;
    distance: import("vue").Ref<number>;
    timer: import("vue").Ref<null>;
    keepAlive: import("vue").Ref<boolean>;
    isCanScroll: import("vue").Ref<boolean | null>;
    showNotica: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close" | "acrossEnd")[], "click" | "close" | "acrossEnd", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: PropType<NoticebarDirection>;
        default: string;
    };
    list: {
        type: PropType<any[]>;
        default: () => never[];
    };
    standTime: {
        type: NumberConstructor;
        default: number;
    };
    complexAm: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    text: {
        type: StringConstructor;
        default: string;
    };
    closeMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapable: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    delay: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollable: {
        type: BooleanConstructor;
        default: null;
    };
    speed: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onAcrossEnd?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    height: number;
    text: string;
    background: string;
    direction: NoticebarDirection;
    list: any[];
    standTime: number;
    complexAm: boolean;
    closeMode: boolean;
    wrapable: boolean;
    leftIcon: boolean;
    delay: string | number;
    scrollable: boolean;
    speed: number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutNoticebar: typeof _default;
    }
}