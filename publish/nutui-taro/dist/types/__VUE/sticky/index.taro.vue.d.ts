import { CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    top: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollTop: {
        type: (NumberConstructor | StringConstructor)[];
        defualt: number;
    };
}, {
    rootRef: import("vue").Ref<HTMLElement | undefined>;
    rootStyle: import("vue").ComputedRef<CSSProperties | undefined>;
    stickyStyle: import("vue").ComputedRef<CSSProperties>;
    refRandomId: string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "change"[], "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    top: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    scrollTop: {
        type: (NumberConstructor | StringConstructor)[];
        defualt: number;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
}, {
    zIndex: string | number;
    top: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSticky: typeof _default;
  }
}