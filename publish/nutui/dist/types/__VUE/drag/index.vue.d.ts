import { PropType } from 'vue';
import { DragDirection } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    attract: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<DragDirection>;
        default: string;
    };
    boundary: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            left: number;
            right: number;
            bottom: number;
        };
    };
}, {
    myDrag: import("vue").Ref<any>;
    touchStart: (e: TouchEvent) => void;
    touchMove: (e: TouchEvent) => void;
    touchEnd: (e: TouchEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    attract: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<DragDirection>;
        default: string;
    };
    boundary: {
        type: ObjectConstructor;
        default: () => {
            top: number;
            left: number;
            right: number;
            bottom: number;
        };
    };
}>>, {
    direction: DragDirection;
    attract: boolean;
    boundary: Record<string, any>;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutDrag: typeof _default;
    }
}