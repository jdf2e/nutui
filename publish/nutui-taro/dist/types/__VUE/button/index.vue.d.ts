import { PropType, CSSProperties } from 'vue';
import { ButtonShape, ButtonType, ButtonSize } from './type';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    color: StringConstructor;
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    handleClick: (event: MouseEvent) => void;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | ButtonType | ButtonSize | ButtonShape;
    }>;
    getStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    color: StringConstructor;
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    size: ButtonSize;
    type: ButtonType;
    block: boolean;
    disabled: boolean;
    loading: boolean;
    shape: ButtonShape;
    plain: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutButton: typeof _default;
  }
}