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
    to: (ObjectConstructor | StringConstructor)[];
}, {
    state: {
        unactiveColor: any;
        activeColor: any;
        index: number;
    };
    active: import("vue").ComputedRef<boolean>;
    renderIcon: (icon: Component, props?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | "";
    isHaveSlot: (slot: string) => import("vue").Slot<any> | undefined;
    change: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
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
    to: (ObjectConstructor | StringConstructor)[];
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