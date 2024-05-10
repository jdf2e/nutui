import type { WithInstall } from '../../utils';
import { type SwipePosition } from './types';
export type SwipeProps = Partial<{
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>>, {
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>, {
    open: (p?: SwipePosition) => void;
    close: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
    open: (...args: any[]) => void;
    close: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Partial<{
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>>, {
    name: string;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
    disabled: boolean;
}>>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
}, {}>, {
    left?(_: {}): any;
    default?(_: {}): any;
    right?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutSwipe: typeof _default;
    }
}
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
