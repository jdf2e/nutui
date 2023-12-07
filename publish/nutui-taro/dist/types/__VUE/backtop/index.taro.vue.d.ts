
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    height: {
        type: StringConstructor;
        default: string;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        show: boolean;
    }>;
    style: import("vue").ComputedRef<{
        right: string;
        bottom: string;
        zIndex: number;
    }>;
    scroll: (e: any) => void;
    click: (e: MouseEvent) => void;
    backTop: import("vue").Ref<boolean>;
    scrollTop: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    height: {
        type: StringConstructor;
        default: string;
    };
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    zIndex: number;
    right: number;
    bottom: number;
    height: string;
    distance: number;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutBacktop: typeof _default;
  }
}