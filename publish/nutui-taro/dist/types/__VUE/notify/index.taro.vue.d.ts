
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    id: StringConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    msg: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    onClose: FunctionConstructor;
    onClick: FunctionConstructor;
    unmount: FunctionConstructor;
}, {
    clickCover: () => void;
    isShowPopup: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:visible"[], "update:visible", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    id: StringConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    msg: {
        type: StringConstructor;
        default: string;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    className: {
        type: StringConstructor;
        default: string;
    };
    background: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    position: {
        type: StringConstructor;
        default: string;
    };
    onClose: FunctionConstructor;
    onClick: FunctionConstructor;
    unmount: FunctionConstructor;
}>> & {
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    duration: number;
    type: string;
    color: string;
    position: string;
    background: string;
    className: string;
    msg: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutNotify: typeof _default;
  }
}