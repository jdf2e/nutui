import { PropType } from 'vue';
export type Direction = 'start' | 'end' | 'middle';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    content: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<Direction>;
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
}, {
    rootId: import("vue").Ref<string>;
    rootContain: import("vue").Ref<null>;
    symbolContain: import("vue").Ref<null>;
    ellipsis: {
        leading?: string | undefined;
        tailing?: string | undefined;
    };
    contantCopy: import("vue").Ref<string>;
    symbolText: import("vue").ComputedRef<string>;
    clickHandle: (type: number) => void;
    handleClick: () => void;
    refRandomId: string;
    widthRef: import("vue").Ref<string>;
    exceeded: import("vue").Ref<boolean>;
    expanded: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "click")[], "change" | "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    content: {
        type: StringConstructor;
        default: string;
    };
    direction: {
        type: PropType<Direction>;
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
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    symbol: string;
    content: string;
    rows: string | number;
    direction: Direction;
    lineHeight: string | number;
    expandText: string;
    collapseText: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutEllipsis: typeof _default;
  }
}