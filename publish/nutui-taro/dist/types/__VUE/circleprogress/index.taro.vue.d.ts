import { PropType } from 'vue';
import { CircleProgressStrokeLinecap } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    progress: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
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
    style: import("vue").ComputedRef<{
        background: string;
        width: string;
        height: string;
        transition: string;
    }>;
    currentRate: import("vue").Ref<string | number>;
    refRandomId: string;
    stop: () => object[];
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    progress: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
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
    progress: string | number;
    strokeWidth: string | number;
    radius: string | number;
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