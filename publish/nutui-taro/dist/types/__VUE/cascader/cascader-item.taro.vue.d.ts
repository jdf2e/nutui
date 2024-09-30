import { Ref } from 'vue';
import { CascaderPane, CascaderOption, CascaderTabs } from './types';
import { Loading, Checklist } from '@nutui/icons-vue-taro';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    visible: BooleanConstructor;
    modelValue: ArrayConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    convertConfig: ObjectConstructor;
}>, {
    handleNode(node: CascaderOption, silent?: boolean): Promise<void>;
    handleTabClick(tab: CascaderTabs): void;
    formatTabTitle(pane: CascaderPane): any;
    isSelected(pane: CascaderPane, node: CascaderOption): boolean;
    panes: Ref<CascaderPane[], CascaderPane[]>;
    initLoading: Ref<boolean, boolean>;
    tabsCursor: Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "pathChange")[], "change" | "update:modelValue" | "pathChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: BooleanConstructor;
    modelValue: ArrayConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    convertConfig: ObjectConstructor;
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPathChange?: ((...args: any[]) => any) | undefined;
}>, {
    lazy: boolean;
    visible: boolean;
    options: unknown[];
    valueKey: string;
    textKey: string;
    childrenKey: string;
}, {}, {
    Loading: typeof Loading;
    Checklist: typeof Checklist;
    NutTabs: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        modelValue: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        color: {
            type: StringConstructor;
            default: string;
        };
        direction: {
            type: import("vue").PropType<import("../tabs/types").TabsDirection>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../tabs/types").TabsSize>;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../tabs/types").TabsType>;
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
            type: import("vue").PropType<import("../tabs/types").TabsAlign>;
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
        updateValue: (item: import("../tabs/index.taro.vue").Title) => void;
        tabChange: (item: import("../tabs/index.taro.vue").Title, index: number) => void;
        setTabItemRef: (el: HTMLElement, index: number) => void;
        titles: Ref<import("../tabs/index.taro.vue").Title[], import("../tabs/index.taro.vue").Title[]>;
        tabsContentRef: Ref<HTMLElement | undefined, HTMLElement | undefined>;
        contentStyle: import("vue").ComputedRef<import("vue").CSSProperties>;
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
            type: import("vue").PropType<import("../tabs/types").TabsDirection>;
            default: string;
        };
        size: {
            type: import("vue").PropType<import("../tabs/types").TabsSize>;
            default: string;
        };
        type: {
            type: import("vue").PropType<import("../tabs/types").TabsType>;
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
            type: import("vue").PropType<import("../tabs/types").TabsAlign>;
            default: string;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        onChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    }>, {
        color: string;
        type: import("../tabs/types").TabsType;
        size: import("../tabs/types").TabsSize;
        top: number;
        background: string;
        ellipsis: boolean;
        sticky: boolean;
        direction: import("../tabs/types").TabsDirection;
        align: import("../tabs/types").TabsAlign;
        modelValue: string | number;
        titleScroll: boolean;
        swipeable: boolean;
        autoHeight: boolean;
        animatedTime: string | number;
        titleGutter: string | number;
    }, {}, {
        JoySmile: typeof import("@nutui/icons-vue-taro").JoySmile;
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
    }, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
    NutTabPane: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        title: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        paneKey: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>, any, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
        title: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        paneKey: {
            type: (NumberConstructor | StringConstructor)[];
            default: string;
        };
        disabled: {
            type: BooleanConstructor;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
    }>, {
        disabled: boolean;
        title: string | number;
        paneKey: string | number;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
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
        NutCascader: typeof _default;
    }
}