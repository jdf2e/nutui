import { PropType } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    sku: {
        type: ArrayConstructor;
        default: never[];
    };
    goods: {
        type: ObjectConstructor;
        default: {};
    };
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    btnOptions: {
        type: PropType<string[]>;
        default: () => string[];
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    btnExtraText: {
        type: StringConstructor;
        default: string;
    };
    buyText: {
        type: StringConstructor;
        default: string;
    };
    addCartText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    showPopup: import("vue").Ref<any>;
    closePopup: (type: string) => void;
    selectSku: (skus: any) => void;
    changeStepper: (value: number) => void;
    stepperOverLimit: (count: any) => void;
    clickBtnOperate: (btn: string) => void;
    add: (value: number) => void;
    reduce: (value: number) => void;
    getSlots: (name: string) => import("vue").Slot<any> | undefined;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("reduce" | "close" | "update:visible" | "add" | "clickCloseIcon" | "clickOverlay" | "selectSku" | "changeStepper" | "overLimit" | "clickBtnOperate")[], "reduce" | "close" | "update:visible" | "add" | "clickCloseIcon" | "clickOverlay" | "selectSku" | "changeStepper" | "overLimit" | "clickBtnOperate", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    sku: {
        type: ArrayConstructor;
        default: never[];
    };
    goods: {
        type: ObjectConstructor;
        default: {};
    };
    stepperMax: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    stepperMin: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    btnOptions: {
        type: PropType<string[]>;
        default: () => string[];
    };
    stepperTitle: {
        type: StringConstructor;
        default: string;
    };
    stepperExtraText: {
        type: (BooleanConstructor | FunctionConstructor)[];
        default: boolean;
    };
    btnExtraText: {
        type: StringConstructor;
        default: string;
    };
    buyText: {
        type: StringConstructor;
        default: string;
    };
    addCartText: {
        type: StringConstructor;
        default: string;
    };
    confirmText: {
        type: StringConstructor;
        default: string;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onClickCloseIcon?: ((...args: any[]) => any) | undefined;
    onClickOverlay?: ((...args: any[]) => any) | undefined;
    onAdd?: ((...args: any[]) => any) | undefined;
    onReduce?: ((...args: any[]) => any) | undefined;
    onSelectSku?: ((...args: any[]) => any) | undefined;
    onChangeStepper?: ((...args: any[]) => any) | undefined;
    onOverLimit?: ((...args: any[]) => any) | undefined;
    onClickBtnOperate?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    lockScroll: boolean;
    confirmText: string;
    sku: unknown[];
    goods: Record<string, any>;
    stepperMax: string | number;
    stepperMin: string | number;
    stepperExtraText: boolean | Function;
    stepperTitle: string;
    btnOptions: string[];
    btnExtraText: string;
    buyText: string;
    addCartText: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSku: typeof _default;
  }
}