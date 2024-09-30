import { PropType } from 'vue';
import { PickerOption, PickerFieldNames } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
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
}>, {
    setRollerStyle: (index: number) => string;
    isHidden: (index: number) => boolean;
    isCurrPick: (index: number) => boolean;
    roller: import("vue").Ref<null, null>;
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
    column: import("vue").Ref<PickerOption[], PickerOption[]>;
    threeDimensional: import("vue").Ref<boolean, boolean>;
    swipeDuration: import("vue").Ref<string | number, string | number>;
    visibleOptionNum: import("vue").Ref<string | number, string | number>;
    optionHeight: import("vue").Ref<string | number, string | number>;
    fieldNames: import("vue").Ref<Required<PickerFieldNames>, Required<PickerFieldNames>>;
    taro: import("vue").Ref<boolean, boolean>;
    value: import("vue").Ref<string | number | undefined, string | number | undefined>;
    columnsType: import("vue").Ref<string | undefined, string | undefined>;
    onClick: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    onChange: import("vue").Ref<((...args: any[]) => any) | undefined, ((...args: any[]) => any) | undefined>;
    touchParams: import("vue").Ref<{
        startY: number;
        endY: number;
        startTime: number;
        endTime: number;
        lastY: number;
        lastTime: number;
    }, {
        startY: number;
        endY: number;
        startTime: number;
        endTime: number;
        lastY: number;
        lastTime: number;
    }>;
    currIndex: import("vue").Ref<number, number>;
    transformY: import("vue").Ref<number, number>;
    scrollDistance: import("vue").Ref<number, number>;
    rotation: import("vue").Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click")[], "change" | "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    column: PickerOption[];
    threeDimensional: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    optionHeight: string | number;
    fieldNames: Required<PickerFieldNames>;
    taro: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutPicker: typeof _default;
    }
}