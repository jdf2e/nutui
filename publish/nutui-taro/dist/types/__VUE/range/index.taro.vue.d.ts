import { PropType, CSSProperties } from 'vue';
import { SliderValue } from './type';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
        type: PropType<SliderValue>;
        default: number;
    };
}, {
    barStyle: import("vue").ComputedRef<CSSProperties>;
    curValue: (idx?: number) => number;
    buttonIndex: import("vue").Ref<number>;
    containerClasses: import("vue").ComputedRef<{
        "nut-range-container": boolean;
        "nut-range-container-vertical": boolean;
    }>;
    markClassName: (mark: number) => {
        "nut-range-mark-text": boolean;
        "nut-range-mark-text-active": boolean;
    };
    marksStyle: (mark: number) => CSSProperties;
    marksList: import("vue").ComputedRef<number[]>;
    tickStyle: (mark: number) => CSSProperties;
    refRandomId: string;
    disabled: import("vue").ComputedRef<boolean>;
    vertical: import("vue").Ref<boolean>;
    range: import("vue").Ref<boolean>;
    modelValue: import("vue").Ref<SliderValue>;
    max: import("vue").Ref<string | number>;
    marks: import("vue").Ref<Record<string, any>>;
    hiddenRange: import("vue").Ref<boolean>;
    hiddenTag: import("vue").Ref<boolean>;
    min: import("vue").Ref<string | number>;
    step: import("vue").Ref<string | number>;
    activeColor: import("vue").Ref<string | undefined>;
    inactiveColor: import("vue").Ref<string | undefined>;
    buttonColor: import("vue").Ref<string | undefined>;
    onChange: import("vue").Ref<((...args: any[]) => any) | undefined>;
    "onUpdate:modelValue": import("vue").Ref<((...args: any[]) => any) | undefined>;
    onDragEnd: import("vue").Ref<((...args: any[]) => any) | undefined>;
    onDragStart: import("vue").Ref<((...args: any[]) => any) | undefined>;
    root: import("vue").Ref<HTMLElement | undefined>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    wrapperStyle: import("vue").ComputedRef<{
        background: string | undefined;
    }>;
    buttonStyle: import("vue").ComputedRef<{
        borderColor: string | undefined;
    }>;
    onClick: (event: any) => Promise<void>;
    onTouchStart: (event: TouchEvent) => void;
    onTouchMove: (event: TouchEvent) => void;
    onTouchEnd: (event: TouchEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "dragEnd" | "dragStart")[], "change" | "update:modelValue" | "dragEnd" | "dragStart", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
        type: PropType<SliderValue>;
        default: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onDragEnd?: ((...args: any[]) => any) | undefined;
    onDragStart?: ((...args: any[]) => any) | undefined;
}, {
    disabled: boolean;
    vertical: boolean;
    range: boolean;
    modelValue: SliderValue;
    max: string | number;
    marks: Record<string, any>;
    hiddenRange: boolean;
    hiddenTag: boolean;
    min: string | number;
    step: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutRange: typeof _default;
    }
}