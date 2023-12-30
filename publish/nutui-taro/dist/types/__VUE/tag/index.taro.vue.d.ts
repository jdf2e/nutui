import { PropType, CSSProperties } from 'vue';
import { TagType } from './types';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<TagType>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    mark: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean | TagType;
        "nut-tag": boolean;
        "nut-tag--plain": boolean;
        "nut-tag--round": boolean;
        "nut-tag--mark": boolean;
    }>;
    style: import("vue").ComputedRef<CSSProperties>;
    onClose: (event: Event) => void;
    onClick: (event: Event) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "close")[], "click" | "close", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    textColor: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: PropType<TagType>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    round: {
        type: BooleanConstructor;
        default: boolean;
    };
    mark: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeable: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    mark: boolean;
    type: TagType;
    color: string;
    round: boolean;
    closeable: boolean;
    plain: boolean;
    textColor: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutTag: typeof _default;
  }
}