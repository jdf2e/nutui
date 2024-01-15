import { PropType } from 'vue';
import type { ProgressSize, ProgressStatus } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        required: true;
    };
    size: {
        type: PropType<ProgressSize>;
        default: string;
    };
    status: {
        type: PropType<ProgressStatus>;
        default: string;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    textBackground: {
        type: StringConstructor;
        default: string;
    };
    isShowPercentage: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    height: import("vue").ComputedRef<string | undefined>;
    percentage: import("vue").ComputedRef<number>;
    bgStyle: import("vue").ComputedRef<{
        width: string;
        background: string;
    }>;
    textStyle: import("vue").ComputedRef<{
        color: string;
    }>;
    slotDefault: boolean;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    percentage: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        required: true;
    };
    size: {
        type: PropType<ProgressSize>;
        default: string;
    };
    status: {
        type: PropType<ProgressStatus>;
        default: string;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    textInside: {
        type: BooleanConstructor;
        default: boolean;
    };
    showText: {
        type: BooleanConstructor;
        default: boolean;
    };
    strokeColor: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    textBackground: {
        type: StringConstructor;
        default: string;
    };
    isShowPercentage: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    size: ProgressSize;
    percentage: string | number;
    status: ProgressStatus;
    strokeWidth: string | number;
    textInside: boolean;
    showText: boolean;
    strokeColor: string;
    textColor: string;
    textBackground: string;
    isShowPercentage: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutProgress: typeof _default;
    }
}