import { PropType } from 'vue';
export type Direction = 'start' | 'end' | 'middle';
type EllipsisedValue = {
    leading?: string;
    tailing?: string;
};

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
    root: import("vue").Ref<null>;
    ellipsis: import("vue").Ref<EllipsisedValue | undefined>;
    clickHandle: (type: number) => void;
    handleClick: () => void;
    exceeded: import("vue").Ref<boolean>;
    expanded: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("click" | "change")[], "click" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    onClick?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
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