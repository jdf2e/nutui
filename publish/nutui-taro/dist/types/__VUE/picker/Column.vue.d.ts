import { PropType } from 'vue';
import { PickerOption, PickerFieldNames } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    value: (NumberConstructor | StringConstructor)[];
    columnsType: StringConstructor;
    column: {
        type: PropType<PickerOption[]>;
        default: () => never[];
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fieldNames: {
        type: PropType<Required<PickerFieldNames>>;
        default: () => {};
    };
    taro: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    setRollerStyle: (index: number) => string;
    isHidden: (index: number) => boolean;
    isCurrPick: (index: number) => boolean;
    roller: import("vue").Ref<null>;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: () => void;
    touchRollerStyle: import("vue").ComputedRef<{
        transition: string;
        transform: string;
        top: string;
    }>;
    touchTileStyle: import("vue").ComputedRef<{
        transition: string;
        transform: string;
        top: string;
        height: string;
    }>;
    setMove: (move: number, type?: string, time?: number) => void;
    stopMomentum: () => void;
    pxCheck: (value?: string | number | undefined) => string | undefined;
    maskStyles: import("vue").ComputedRef<{
        backgroundSize: string;
    }>;
    column: import("vue").Ref<PickerOption[]>;
    threeDimensional: import("vue").Ref<boolean>;
    swipeDuration: import("vue").Ref<string | number>;
    visibleOptionNum: import("vue").Ref<string | number>;
    optionHeight: import("vue").Ref<string | number>;
    fieldNames: import("vue").Ref<Required<PickerFieldNames>>;
    taro: import("vue").Ref<boolean>;
    value: import("vue").Ref<string | number | undefined>;
    columnsType: import("vue").Ref<string | undefined>;
    onClick: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onChange: import("vue").Ref<((...args: any[]) => any) | undefined>;
    touchParams: import("vue").Ref<{
        startY: number;
        endY: number;
        startTime: number;
        endTime: number;
        lastY: number;
        lastTime: number;
    }>;
    currIndex: import("vue").Ref<number>;
    transformY: import("vue").Ref<number>;
    scrollDistance: import("vue").Ref<number>;
    rotation: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change")[], "click" | "change", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    value: (NumberConstructor | StringConstructor)[];
    columnsType: StringConstructor;
    column: {
        type: PropType<PickerOption[]>;
        default: () => never[];
    };
    threeDimensional: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeDuration: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    visibleOptionNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    optionHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fieldNames: {
        type: PropType<Required<PickerFieldNames>>;
        default: () => {};
    };
    taro: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    column: PickerOption[];
    threeDimensional: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    optionHeight: string | number;
    fieldNames: Required<PickerFieldNames>;
    taro: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutPicker: typeof _default;
    }
}