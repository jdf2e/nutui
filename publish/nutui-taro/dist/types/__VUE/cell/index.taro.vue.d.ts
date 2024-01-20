import type { PropType, CSSProperties } from 'vue';
import { CellSize } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    descTextAlign: {
        type: StringConstructor;
        default: string;
    };
    isLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    roundRadius: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<CellSize>;
        default: string;
    };
}, {
    handleClick: (event: Event) => void;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    baseStyle: import("vue").ComputedRef<{
        borderRadius: string | undefined;
    }>;
    descStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    subTitle: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    descTextAlign: {
        type: StringConstructor;
        default: string;
    };
    isLink: {
        type: BooleanConstructor;
        default: boolean;
    };
    roundRadius: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<CellSize>;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    size: CellSize;
    title: string;
    desc: string;
    center: boolean;
    subTitle: string;
    descTextAlign: string;
    isLink: boolean;
    roundRadius: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCell: typeof _default;
    }
}