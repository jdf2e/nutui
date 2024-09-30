import { PropType } from 'vue';
import { PaginationMode } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    mode: {
        type: PropType<PaginationMode>;
        default: string;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    forceEllipses: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    modelValue: import("vue").Ref<number, number>;
    select: (curPage: number, isSelect: boolean) => void;
    countRef: import("vue").ComputedRef<number>;
    mode: import("vue").Ref<PaginationMode, PaginationMode>;
    pages: import("vue").ComputedRef<{
        number: number;
        text: string | number;
        active: boolean;
    }[] | undefined>;
    forceEllipses: import("vue").Ref<boolean, boolean>;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: NumberConstructor;
        default: number;
    };
    mode: {
        type: PropType<PaginationMode>;
        default: string;
    };
    prevText: {
        type: StringConstructor;
        default: string;
    };
    nextText: {
        type: StringConstructor;
        default: string;
    };
    pageCount: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    totalItems: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    itemsPerPage: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    showPageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    forceEllipses: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}>, {
    mode: PaginationMode;
    modelValue: number;
    prevText: string;
    nextText: string;
    pageCount: string | number;
    totalItems: string | number;
    itemsPerPage: string | number;
    showPageSize: string | number;
    forceEllipses: boolean;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutPagination: typeof _default;
    }
}