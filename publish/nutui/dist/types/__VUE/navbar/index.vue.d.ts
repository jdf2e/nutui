
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    leftShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    titleIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftText: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, {
    navbarRef: import("vue").Ref<HTMLElement | undefined>;
    rootStyle: import("vue").ComputedRef<{
        height: string;
    } | {
        height?: undefined;
    }>;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    navHeight: import("vue").Ref<string>;
    handleLeft: () => void;
    handleCenter: () => void;
    handleCenterIcon: () => void;
    handleRight: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickBack" | "clickTitle" | "clickIcon" | "clickRight" | "onClickBack" | "onClickTitle" | "onClickIcon" | "onClickRight")[], "clickBack" | "clickTitle" | "clickIcon" | "clickRight" | "onClickBack" | "onClickTitle" | "onClickIcon" | "onClickRight", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    leftShow: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    titleIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    leftText: {
        type: StringConstructor;
        default: string;
    };
    desc: {
        type: StringConstructor;
        default: string;
    };
    fixed: {
        type: BooleanConstructor;
        default: boolean;
    };
    safeAreaInsetTop: {
        type: BooleanConstructor;
        default: boolean;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    placeholder: {
        type: BooleanConstructor;
        default: boolean;
    };
    zIndex: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>> & {
    onClickBack?: ((...args: any[]) => any) | undefined;
    onClickTitle?: ((...args: any[]) => any) | undefined;
    onClickIcon?: ((...args: any[]) => any) | undefined;
    onClickRight?: ((...args: any[]) => any) | undefined;
    onOnClickBack?: ((...args: any[]) => any) | undefined;
    onOnClickTitle?: ((...args: any[]) => any) | undefined;
    onOnClickIcon?: ((...args: any[]) => any) | undefined;
    onOnClickRight?: ((...args: any[]) => any) | undefined;
}, {
    title: string;
    fixed: boolean;
    desc: string;
    zIndex: string | number;
    border: boolean;
    placeholder: boolean;
    leftShow: boolean;
    titleIcon: boolean;
    leftText: string;
    safeAreaInsetTop: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutNavbar: typeof _default;
  }
}