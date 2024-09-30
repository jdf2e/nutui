import { VNode, Ref, CSSProperties, PropType } from 'vue';
import { JoySmile } from '@nutui/icons-vue-taro';
import { type TabsDirection, type TabsSize, type TabsType, type TabsAlign } from './types';
export declare class Title {
    title: string;
    titleSlot?: VNode[];
    paneKey: string;
    disabled: boolean;
    constructor();
}

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<TabsDirection>;
        default: string;
    };
    size: {
        type: PropType<TabsSize>;
        default: string;
    };
    type: {
        type: PropType<TabsType>;
        default: string;
    };
    titleScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    animatedTime: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleGutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    align: {
        type: PropType<TabsAlign>;
        default: string;
    };
}>, {
    onTouchStart(event: TouchEvent): void;
    onTouchMove(event: TouchEvent): void;
    onTouchEnd(): void;
    isBegin: () => boolean;
    isEnd: () => boolean;
    next: () => void;
    prev: () => void;
    updateValue: (item: Title) => void;
    tabChange: (item: Title, index: number) => void;
    setTabItemRef: (el: HTMLElement, index: number) => void;
    titles: Ref<Title[], Title[]>;
    tabsContentRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
    contentStyle: import("vue").ComputedRef<CSSProperties>;
    tabsNavStyle: import("vue").ComputedRef<{
        background: string;
    }>;
    titleStyle: import("vue").ComputedRef<{
        paddingTop?: undefined;
        paddingBottom?: undefined;
        paddingLeft?: undefined;
        paddingRight?: undefined;
    } | {
        paddingTop: string | undefined;
        paddingBottom: string | undefined;
        paddingLeft?: undefined;
        paddingRight?: undefined;
    } | {
        paddingLeft: string | undefined;
        paddingRight: string | undefined;
        paddingTop?: undefined;
        paddingBottom?: undefined;
    }>;
    tabsActiveStyle: import("vue").ComputedRef<{
        color: string;
        background: string;
    }>;
    container: Ref<null, null>;
    scrollLeft: Ref<number, number>;
    scrollTop: Ref<number, number>;
    getScrollX: import("vue").ComputedRef<boolean>;
    getScrollY: import("vue").ComputedRef<boolean>;
    scrollWithAnimation: Ref<boolean, boolean>;
    canShowLabel: Ref<boolean, boolean>;
    refRandomId: string;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click" | "update:modelValue")[], "change" | "click" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    color: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<TabsDirection>;
        default: string;
    };
    size: {
        type: PropType<TabsSize>;
        default: string;
    };
    type: {
        type: PropType<TabsType>;
        default: string;
    };
    titleScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    ellipsis: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeable: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoHeight: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    animatedTime: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    titleGutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    sticky: {
        type: BooleanConstructor;
        default: boolean;
    };
    top: {
        type: NumberConstructor;
        default: number;
    };
    align: {
        type: PropType<TabsAlign>;
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    color: string;
    type: TabsType;
    size: TabsSize;
    top: number;
    background: string;
    ellipsis: boolean;
    sticky: boolean;
    direction: TabsDirection;
    align: TabsAlign;
    modelValue: string | number;
    titleScroll: boolean;
    swipeable: boolean;
    autoHeight: boolean;
    animatedTime: string | number;
    titleGutter: string | number;
}, {}, {
    JoySmile: typeof JoySmile;
    NutScrollView: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<{}> & Readonly<{}>, {}, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, {}>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<{}> & Readonly<{}>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, {}, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTabs: typeof _default;
    }
}