import type { CSSProperties } from 'vue';

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
    to: (ObjectConstructor | StringConstructor)[];
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    roundRadius: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    handleClick: (event: Event) => void;
    classes: import("vue").ComputedRef<{
        [x: string]: string | boolean | Record<string, any> | undefined;
    }>;
    baseStyle: import("vue").ComputedRef<{
        borderRadius: string | undefined;
    }>;
    descStyle: import("vue").ComputedRef<CSSProperties>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    to: (ObjectConstructor | StringConstructor)[];
    replace: {
        type: BooleanConstructor;
        default: boolean;
    };
    roundRadius: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    url: {
        type: StringConstructor;
        default: string;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    center: boolean;
    desc: string;
    replace: boolean;
    size: string;
    url: string;
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