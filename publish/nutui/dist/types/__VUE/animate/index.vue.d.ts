import { PropType } from 'vue';
import { AnimateType, AnimateAction } from './type';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    type: {
        type: PropType<AnimateType>;
        default: string;
    };
    show: {
        type: BooleanConstructor;
        defualt: boolean;
    };
    action: {
        type: PropType<AnimateAction>;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        defualt: number;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        'nut-animate__container': boolean;
        loop: boolean;
    }>;
    handleClick: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("animate" | "click")[], "animate" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: PropType<AnimateType>;
        default: string;
    };
    show: {
        type: BooleanConstructor;
        defualt: boolean;
    };
    action: {
        type: PropType<AnimateAction>;
        default: string;
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: (NumberConstructor | StringConstructor)[];
        defualt: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onAnimate?: ((...args: any[]) => any) | undefined;
}, {
    type: AnimateType;
    show: boolean;
    action: AnimateAction;
    loop: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutAnimate: typeof _default;
  }
}