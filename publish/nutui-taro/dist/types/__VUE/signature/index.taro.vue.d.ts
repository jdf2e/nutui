
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    customClass: {
        type: StringConstructor;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeStyle: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    unSupportTpl: {
        type: StringConstructor;
        default: string;
    };
}, {
    taroEnv: TaroGeneral.ENV_TYPE;
    canvasSetId: any;
    spcanvas: any;
    confirm: () => void;
    clear: () => void;
    classes: import("vue").ComputedRef<{
        [x: string]: string | boolean;
        "nut-signature": boolean;
    }>;
    startEventHandler: (event: TouchEvent) => false | undefined;
    moveEventHandler: (event: TouchEvent) => false | undefined;
    endEventHandler: (event: {
        preventDefault: () => void;
    }) => void;
    leaveEventHandler: (event: {
        preventDefault: () => void;
    }) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("end" | "start" | "clear" | "confirm" | "signing")[], "end" | "start" | "clear" | "confirm" | "signing", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    customClass: {
        type: StringConstructor;
        default: string;
    };
    lineWidth: {
        type: NumberConstructor;
        default: number;
    };
    strokeStyle: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    unSupportTpl: {
        type: StringConstructor;
        default: string;
    };
}>> & {
    onConfirm?: ((...args: any[]) => any) | undefined;
    onEnd?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onStart?: ((...args: any[]) => any) | undefined;
    onSigning?: ((...args: any[]) => any) | undefined;
}, {
    type: string;
    strokeStyle: string;
    lineWidth: number;
    customClass: string;
    unSupportTpl: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSignature: typeof _default;
  }
}