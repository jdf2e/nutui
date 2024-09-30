import { CSSProperties } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<(string | number)[]>;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    columns: {
        type: import("vue").PropType<(import("./types").PickerOption | import("./types").PickerOption[])[]>;
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
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
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
        type: import("vue").PropType<import("./types").PickerFieldNames>;
        default: () => {};
    };
}>, {
    columnsType: import("vue").ComputedRef<"multiple" | "single" | "cascade">;
    columnsList: import("vue").ComputedRef<import("./types").PickerOption[][]>;
    columnFieldNames: import("vue").ComputedRef<{
        text: string;
        value: string;
        children: string;
        className: string;
    }>;
    cancel: () => void;
    changeHandler: (columnIndex: number, option: import("./types").PickerOption) => void;
    confirmHandler: () => void;
    defaultValues: import("vue").Ref<(string | number)[], (string | number)[]>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    pickerColumn: import("vue").Ref<any[], any[]>;
    swipeRef: (el: any) => void;
    columnStyle: import("vue").ComputedRef<CSSProperties>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("cancel" | "change" | "update:modelValue" | "confirm")[], "cancel" | "change" | "update:modelValue" | "confirm", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: import("vue").PropType<(string | number)[]>;
        default: () => never[];
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    cancelText: {
        type: StringConstructor;
        default: string;
    };
    okText: {
        type: StringConstructor;
        default: string;
    };
    columns: {
        type: import("vue").PropType<(import("./types").PickerOption | import("./types").PickerOption[])[]>;
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
    showToolbar: {
        type: BooleanConstructor;
        default: boolean;
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
        type: import("vue").PropType<import("./types").PickerFieldNames>;
        default: () => {};
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    onCancel?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    columns: (import("./types").PickerOption | import("./types").PickerOption[])[];
    modelValue: (string | number)[];
    threeDimensional: boolean;
    swipeDuration: string | number;
    visibleOptionNum: string | number;
    optionHeight: string | number;
    fieldNames: import("./types").PickerFieldNames;
    cancelText: string;
    okText: string;
    showToolbar: boolean;
}, {}, {
    NutPickerColumn: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
        value: (NumberConstructor | StringConstructor)[];
        columnsType: StringConstructor;
        column: {
            type: import("vue").PropType<import("./types").PickerOption[]>;
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
            type: import("vue").PropType<Required<import("./types").PickerFieldNames>>;
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
        setMove: (move: number, type?: string | undefined, time?: number | undefined) => void;
        stopMomentum: () => void;
        pxCheck: (value?: string | number | undefined) => string | undefined;
        maskStyles: import("vue").ComputedRef<{
            backgroundSize: string;
        }>;
        column: import("vue").Ref<import("./types").PickerOption[], import("./types").PickerOption[]>;
        threeDimensional: import("vue").Ref<boolean, boolean>;
        swipeDuration: import("vue").Ref<string | number, string | number>;
        visibleOptionNum: import("vue").Ref<string | number, string | number>;
        optionHeight: import("vue").Ref<string | number, string | number>;
        fieldNames: import("vue").Ref<Required<import("./types").PickerFieldNames>, Required<import("./types").PickerFieldNames>>;
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
            type: import("vue").PropType<import("./types").PickerOption[]>;
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
            type: import("vue").PropType<Required<import("./types").PickerFieldNames>>;
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
        column: import("./types").PickerOption[];
        threeDimensional: boolean;
        swipeDuration: string | number;
        visibleOptionNum: string | number;
        optionHeight: string | number;
        fieldNames: Required<import("./types").PickerFieldNames>;
        taro: boolean;
    }, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutPicker: typeof _default;
    }
}