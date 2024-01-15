import { PropType } from 'vue';
import { CircleProgressStrokeLinecap } from './types';
export interface stopArr {
    key: string;
    value: string;
}

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    progress: {
        type: (NumberConstructor | StringConstructor)[];
        defualt: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    radius: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeLinecap: {
        type: PropType<CircleProgressStrokeLinecap>;
        default: string;
    };
    color: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    pathColor: {
        type: StringConstructor;
        default: string;
    };
    clockwise: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    hoverStyle: import("vue").ComputedRef<{
        stroke: string;
        strokeDasharray: string;
    }>;
    pathStyle: import("vue").ComputedRef<{
        stroke: string;
    }>;
    path: import("vue").ComputedRef<string>;
    hoverColor: import("vue").ComputedRef<string>;
    stop: import("vue").ComputedRef<stopArr[] | undefined>;
    refRandomId: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    progress: {
        type: (NumberConstructor | StringConstructor)[];
        defualt: number;
    };
    strokeWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    radius: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    strokeLinecap: {
        type: PropType<CircleProgressStrokeLinecap>;
        default: string;
    };
    color: {
        type: (ObjectConstructor | StringConstructor)[];
        default: string;
    };
    pathColor: {
        type: StringConstructor;
        default: string;
    };
    clockwise: {
        type: BooleanConstructor;
        default: boolean;
    };
}>>, {
    color: string | Record<string, any>;
    radius: string | number;
    strokeWidth: string | number;
    strokeLinecap: CircleProgressStrokeLinecap;
    pathColor: string;
    clockwise: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCircleProgress: typeof _default;
    }
}