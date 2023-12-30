import { Component, PropType } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    tabTitle: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
    };
    icon: {
        type: PropType<Component>;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
}, {
    state: {
        unactiveColor: any;
        activeColor: any;
        active: any;
        index: number;
    };
    active: import("vue").ComputedRef<boolean>;
    isHaveSlot: (slot: string) => import("vue").Slot<any> | undefined;
    renderIcon: (icon: Component, props?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | "";
    change: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    tabTitle: {
        type: StringConstructor;
        default: string;
    };
    name: {
        type: StringConstructor;
    };
    icon: {
        type: PropType<Component>;
    };
    href: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    tabTitle: string;
    href: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutTabbarItem: typeof _default;
  }
}