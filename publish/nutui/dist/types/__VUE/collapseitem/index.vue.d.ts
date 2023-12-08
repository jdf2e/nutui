
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    collapseRef: {
        type: ObjectConstructor;
    };
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
        default: () => import("vue").DefineComponent<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }, {
            classes: import("vue").ComputedRef<{
                [x: string]: string | boolean;
                "nut-icon": boolean;
            }>;
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }>>, {
            name: string;
            width: string | number;
            height: string | number;
            color: string;
            class: string;
        }>;
    };
    rotate: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        "nut-collapse-item": boolean;
    }>;
    renderIcon: (icon: import("vue").Component, props?: any) => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }> | "";
    wrapperRef: any;
    contentRef: any;
    open: () => void;
    toggle: () => void;
    wrapperHeight: import("vue").Ref<string>;
    expanded: import("vue").ComputedRef<any>;
    onTransitionEnd: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    collapseRef: {
        type: ObjectConstructor;
    };
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
        default: () => import("vue").DefineComponent<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }, {
            classes: import("vue").ComputedRef<{
                [x: string]: string | boolean;
                "nut-icon": boolean;
            }>;
            style: import("vue").ComputedRef<import("vue").CSSProperties>;
        }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
            class: {
                type: StringConstructor;
                default: string;
            };
            name: {
                type: StringConstructor;
                default: string;
            };
            color: {
                type: StringConstructor;
                default: string;
            };
            width: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
            height: {
                type: (NumberConstructor | StringConstructor)[];
                default: string;
            };
        }>>, {
            name: string;
            width: string | number;
            height: string | number;
            color: string;
            class: string;
        }>;
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