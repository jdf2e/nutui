export type SwipePosition = 'left' | 'right' | '';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    touchMoveStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMovePreventDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    leftRef: import("vue").Ref<HTMLElement | undefined>;
    rightRef: import("vue").Ref<HTMLElement | undefined>;
    refRandomId: string;
    open: (p?: SwipePosition) => void;
    close: () => void;
    onClick: (e: Event, position: string, lock: boolean) => void;
    lockClick: import("vue").Ref<boolean>;
    onTouchStart(event: TouchEvent): void;
    onTouchMove(event: TouchEvent): void;
    onTouchEnd(): void;
    touchStyle: import("vue").ComputedRef<{
        transform: string;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "click" | "open")[], "close" | "click" | "open", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    touchMoveStopPropagation: {
        type: BooleanConstructor;
        default: boolean;
    };
    touchMovePreventDefault: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onOpen?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    disabled: boolean;
    touchMoveStopPropagation: boolean;
    touchMovePreventDefault: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSwipe: typeof _default;
  }
}