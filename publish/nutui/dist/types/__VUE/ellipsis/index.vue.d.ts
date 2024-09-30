import { PropType } from 'vue';
import { EllipsisDirection } from './types';
type EllipsisedValue = {
    leading?: string;
    tailing?: string;
};

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<EllipsisDirection>;
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    expandText: {
        type: StringConstructor;
        default: string;
    };
    collapseText: {
        type: StringConstructor;
        default: string;
    };
    symbol: {
        type: StringConstructor;
        default: string;
    };
    lineHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>, {
    root: import("vue").Ref<null, null>;
    ellipsis: import("vue").Ref<EllipsisedValue | undefined, EllipsisedValue | undefined>;
    clickHandle: (type: number) => void;
    handleClick: () => void;
    exceeded: import("vue").Ref<boolean, boolean>;
    expanded: import("vue").Ref<boolean, boolean>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click")[], "change" | "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<EllipsisDirection>;
        default: string;
    };
    rows: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    expandText: {
        type: StringConstructor;
        default: string;
    };
    collapseText: {
        type: StringConstructor;
        default: string;
    };
    symbol: {
        type: StringConstructor;
        default: string;
    };
    lineHeight: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
}>> & Readonly<{
    onClick?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
}>, {
    symbol: string;
    content: string;
    direction: EllipsisDirection;
    lineHeight: string | number;
    rows: string | number;
    expandText: string;
    collapseText: string;
}, {}, {}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutEllipsis: typeof _default;
    }
}