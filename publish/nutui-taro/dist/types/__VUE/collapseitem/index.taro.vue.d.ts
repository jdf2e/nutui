import { DownArrow } from '@nutui/icons-vue-taro';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        required: true;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: ObjectConstructor;
        default: () => typeof DownArrow;
    };
    rotate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, {
    refRandomId: string;
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        "nut-collapse-item": boolean;
    }>;
    renderIcon: (icon: import("vue").Component, props?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | "";
    wrapperRef: any;
    handleClick: () => void;
    wrapperHeight: import("vue").Ref<string>;
    expanded: import("vue").ComputedRef<any>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    value: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
        required: true;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    icon: {
        type: ObjectConstructor;
        default: () => typeof DownArrow;
    };
    rotate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}>>, {
    name: string | number;
    label: string;
    title: string;
    icon: Record<string, any>;
    border: boolean;
    disabled: boolean;
    value: string;
    rotate: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutCollapseItem: typeof _default;
  }
}