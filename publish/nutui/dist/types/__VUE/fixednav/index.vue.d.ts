import { PropType } from 'vue';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    navList: {
        default: () => never[];
        type: PropType<any[]>;
    };
    activeColor: {
        default: string;
        type: StringConstructor;
    };
    activeText: {
        default: string;
        type: StringConstructor;
    };
    unActiveText: {
        default: string;
        type: StringConstructor;
    };
    position: {
        default: () => {
            top: string;
            bottom: string;
        };
        type: ObjectConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
}>, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
        "nut-fixed-nav": boolean;
        active: boolean;
    }>;
    updateValue: (value?: boolean) => void;
    selected: (item: any, event: Event) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
    current: import("vue").Ref<number, number>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:visible" | "selected")[], "update:visible" | "selected", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    overlay: {
        type: BooleanConstructor;
        default: boolean;
    };
    navList: {
        default: () => never[];
        type: PropType<any[]>;
    };
    activeColor: {
        default: string;
        type: StringConstructor;
    };
    activeText: {
        default: string;
        type: StringConstructor;
    };
    unActiveText: {
        default: string;
        type: StringConstructor;
    };
    position: {
        default: () => {
            top: string;
            bottom: string;
        };
        type: ObjectConstructor;
    };
    type: {
        default: string;
        type: StringConstructor;
    };
}>> & Readonly<{
    "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    onSelected?: ((...args: any[]) => any) | undefined;
}>, {
    type: string;
    visible: boolean;
    overlay: boolean;
    position: Record<string, any>;
    navList: any[];
    activeColor: string;
    activeText: string;
    unActiveText: string;
}, {}, {
    NutOverlay: {
        new (...args: any[]): import("vue").CreateComponentPublicInstanceWithMixins<Readonly<import("vue").ExtractPropTypes<{
            duration: {
                type: PropType<string | number>;
                default: number;
            };
            visible: {
                type: PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
            click: (...args: any[]) => void;
            "update:visible": (...args: any[]) => void;
        }, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Readonly<import("vue").ExtractPropTypes<{
            duration: {
                type: PropType<string | number>;
                default: number;
            };
            visible: {
                type: PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }>, {
            duration: string | number;
            visible: boolean;
            zIndex: string | number;
            lockScroll: boolean;
            overlayClass: string;
            closeOnClickOverlay: boolean;
        }, true, {}, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, {}, any, import("vue").ComponentProvideOptions, {
            P: {};
            B: {};
            D: {};
            C: {};
            M: {};
            Defaults: {};
        }, Readonly<import("vue").ExtractPropTypes<{
            duration: {
                type: PropType<string | number>;
                default: number;
            };
            visible: {
                type: PropType<boolean>;
                default: boolean;
            };
            zIndex: {
                type: PropType<string | number>;
                default: number;
            };
            lockScroll: {
                type: PropType<boolean>;
                default: boolean;
            };
            overlayClass: {
                type: PropType<string>;
                default: string;
            };
            overlayStyle: {
                type: PropType<import("vue").CSSProperties>;
            };
            closeOnClickOverlay: {
                type: PropType<boolean>;
                default: boolean;
            };
        }>> & Readonly<{
            onClick?: ((...args: any[]) => any) | undefined;
            "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
        }>, {}, {}, {}, {}, {
            duration: string | number;
            visible: boolean;
            zIndex: string | number;
            lockScroll: boolean;
            overlayClass: string;
            closeOnClickOverlay: boolean;
        }>;
        __isFragment?: undefined;
        __isTeleport?: undefined;
        __isSuspense?: undefined;
    } & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
        duration: {
            type: PropType<string | number>;
            default: number;
        };
        visible: {
            type: PropType<boolean>;
            default: boolean;
        };
        zIndex: {
            type: PropType<string | number>;
            default: number;
        };
        lockScroll: {
            type: PropType<boolean>;
            default: boolean;
        };
        overlayClass: {
            type: PropType<string>;
            default: string;
        };
        overlayStyle: {
            type: PropType<import("vue").CSSProperties>;
        };
        closeOnClickOverlay: {
            type: PropType<boolean>;
            default: boolean;
        };
    }>> & Readonly<{
        onClick?: ((...args: any[]) => any) | undefined;
        "onUpdate:visible"?: ((...args: any[]) => any) | undefined;
    }>, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
        click: (...args: any[]) => void;
        "update:visible": (...args: any[]) => void;
    }, string, {
        duration: string | number;
        visible: boolean;
        zIndex: string | number;
        lockScroll: boolean;
        overlayClass: string;
        closeOnClickOverlay: boolean;
    }, {}, string, {}, import("vue").GlobalComponents, import("vue").GlobalDirectives, string, import("vue").ComponentProvideOptions> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & (new () => {
        $slots: {
            default?(_: {}): any;
        };
    });
    Left: import("vue").DefineComponent<{
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
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutFixedNav: typeof _default;
    }
}