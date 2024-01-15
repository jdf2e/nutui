import { Ref, PropType } from 'vue';
import { ElevatorData } from './type';
import Taro from '@tarojs/taro';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    acceptKey: {
        type: StringConstructor[];
        default: string;
    };
    indexList: {
        type: PropType<any[]>;
        default: () => never[];
    };
    isSticky: {
        type: BooleanConstructor[];
        default: boolean;
    };
    spaceHeight: {
        type: NumberConstructor[];
        default: number;
    };
    titleHeight: {
        type: NumberConstructor[];
        default: number;
    };
}, {
    clientHeight: import("vue").ComputedRef<number>;
    fixedStyle: import("vue").ComputedRef<{
        height: string;
    }>;
    setListGroup: (el: any) => void;
    listview: Ref<HTMLElement>;
    touchStart: (e: TouchEvent) => void;
    touchMove: (e: TouchEvent) => void;
    touchEnd: () => void;
    handleClickItem: (key: string, item: ElevatorData) => void;
    handleClickIndex: (key: string) => void;
    listViewScroll: (e: Event) => void;
    anchorIndex: Ref<number>;
    codeIndex: Ref<number>;
    listHeight: Ref<number[]>;
    listGroup: Ref<HTMLLIElement[]>;
    touchState: Ref<{
        y1: number;
        y2: number;
    }>;
    scrollStart: Ref<boolean>;
    currentIndex: Ref<number>;
    query: Ref<{
        exec: (callback?: ((...args: any[]) => any) | undefined) => Taro.NodesRef;
        in: (component: TaroGeneral.IAnyObject) => Taro.SelectorQuery;
        select: (selector: string) => Taro.NodesRef;
        selectAll: (selector: string) => Taro.NodesRef;
        selectViewport: () => Taro.NodesRef;
    }>;
    scrollTop: Ref<number>;
    currentData: Ref<{
        [x: string]: string | number;
        name: string;
        id: string | number;
    }>;
    currentKey: Ref<string>;
    scrollY: Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "clickItem" | "clickIndex")[], "change" | "clickItem" | "clickIndex", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    acceptKey: {
        type: StringConstructor[];
        default: string;
    };
    indexList: {
        type: PropType<any[]>;
        default: () => never[];
    };
    isSticky: {
        type: BooleanConstructor[];
        default: boolean;
    };
    spaceHeight: {
        type: NumberConstructor[];
        default: number;
    };
    titleHeight: {
        type: NumberConstructor[];
        default: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClickItem?: ((...args: any[]) => any) | undefined;
    onClickIndex?: ((...args: any[]) => any) | undefined;
}, {
    height: string | number;
    acceptKey: string;
    indexList: any[];
    isSticky: boolean;
    spaceHeight: number;
    titleHeight: number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutElevator: typeof _default;
    }
}