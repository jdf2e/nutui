
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    elId: {
        type: StringConstructor[];
        default: string;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    isAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
}, {
    state: {
        backTop: boolean;
        scrollTop: number;
        scrollEl: Window | HTMLElement;
        startTime: number;
        keepAlive: boolean;
    };
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        show: boolean;
    }>;
    style: import("vue").ComputedRef<{
        right: string;
        bottom: string;
        zIndex: number;
    }>;
    click: (e: MouseEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    bottom: {
        type: NumberConstructor;
        default: number;
    };
    right: {
        type: NumberConstructor;
        default: number;
    };
    elId: {
        type: StringConstructor[];
        default: string;
    };
    distance: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    isAnimation: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    zIndex: number;
    duration: number;
    right: number;
    bottom: number;
    elId: string;
    distance: number;
    isAnimation: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutBacktop: typeof _default;
  }
}