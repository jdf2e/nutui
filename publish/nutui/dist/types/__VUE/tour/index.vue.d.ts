import { PropType } from 'vue';
import { PopoverLocation, PopoverTheme } from '../popover/type';
export interface StepOptions {
    target: Element | string;
    content?: string;
    location?: PopoverLocation;
    popoverOffset?: number[];
    arrowOffset?: number;
}
export type TourType = 'step' | 'tile';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<TourType>;
        default: string;
    };
    steps: {
        type: PropType<StepOptions[]>;
        default: () => never[];
    };
    location: {
        type: PropType<PopoverLocation>;
        default: string;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    nextStepTxt: {
        type: StringConstructor;
        default: string;
    };
    prevStepTxt: {
        type: StringConstructor;
        default: string;
    };
    completeTxt: {
        type: StringConstructor;
        default: string;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: {
        type: PropType<Number[]>;
        default: number[];
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    maskWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    maskHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrevStep: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitleBar: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<string>;
    maskStyle: import("vue").ComputedRef<{
        width: string;
        height: string;
        top: string;
        left: string;
    }>;
    changeStep: (type: string) => void;
    close: () => void;
    handleClickMask: () => void;
    showTour: import("vue").Ref<boolean>;
    showPopup: import("vue").Ref<boolean>;
    active: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "close" | "update:modelValue")[], "change" | "close" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<TourType>;
        default: string;
    };
    steps: {
        type: PropType<StepOptions[]>;
        default: () => never[];
    };
    location: {
        type: PropType<PopoverLocation>;
        default: string;
    };
    current: {
        type: NumberConstructor;
        default: number;
    };
    nextStepTxt: {
        type: StringConstructor;
        default: string;
    };
    prevStepTxt: {
        type: StringConstructor;
        default: string;
    };
    completeTxt: {
        type: StringConstructor;
        default: string;
    };
    mask: {
        type: BooleanConstructor;
        default: boolean;
    };
    offset: {
        type: PropType<Number[]>;
        default: number[];
    };
    bgColor: {
        type: StringConstructor;
        default: string;
    };
    theme: {
        type: PropType<PopoverTheme>;
        default: string;
    };
    maskWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    maskHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    closeOnClickOverlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPrevStep: {
        type: BooleanConstructor;
        default: boolean;
    };
    showTitleBar: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    type: TourType;
    mask: boolean;
    closeOnClickOverlay: boolean;
    offset: Number[];
    theme: PopoverTheme;
    current: number;
    modelValue: boolean;
    completeTxt: string;
    bgColor: string;
    steps: StepOptions[];
    location: PopoverLocation;
    nextStepTxt: string;
    prevStepTxt: string;
    maskWidth: string | number;
    maskHeight: string | number;
    showPrevStep: boolean;
    showTitleBar: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutTour: typeof _default;
    }
}