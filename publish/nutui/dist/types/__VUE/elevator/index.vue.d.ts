import { Ref, PropType } from 'vue';
import { ElevatorData } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {
    clientHeight: import("vue").ComputedRef<any>;
    setListGroup: (el: any) => void;
    listview: Ref<any, any>;
    touchStart: (e: TouchEvent) => void;
    touchMove: (e: TouchEvent) => void;
    touchEnd: () => void;
    handleClickItem: (key: string, item: ElevatorData) => void;
    handleClickIndex: (key: string) => void;
    anchorIndex: Ref<number, number>;
    codeIndex: Ref<number, number>;
    listHeight: Ref<number[], number[]>;
    listGroup: Ref<HTMLLIElement[], HTMLLIElement[]>;
    touchState: Ref<{
        y1: number;
        y2: number;
    }, {
        y1: number;
        y2: number;
    }>;
    scrollStart: Ref<boolean, boolean>;
    currentIndex: Ref<number, number>;
    currentData: Ref<{
        [x: string]: string | number;
        name: string;
        id: string | number;
    }, {
        [x: string]: string | number;
        name: string;
        id: string | number;
    }>;
    currentKey: Ref<string, string>;
    scrollY: Ref<number, number>;
    diff: Ref<number, number>;
    fixedTop: Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "clickItem" | "clickIndex")[], "change" | "clickItem" | "clickIndex", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onClickItem?: ((...args: any[]) => any) | undefined;
    onClickIndex?: ((...args: any[]) => any) | undefined;
}>, {
    height: string | number;
    acceptKey: string;
    indexList: any[];
    isSticky: boolean;
    spaceHeight: number;
    titleHeight: number;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutElevator: typeof _default;
    }
}