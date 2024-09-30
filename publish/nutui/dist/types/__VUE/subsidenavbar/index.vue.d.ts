
declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>, {
    style: import("vue").ComputedRef<{
        height: string;
    }>;
    handleClick: () => void;
    direction: import("vue").Ref<string, string>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "titleClick"[], "titleClick", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    title: {
        type: StringConstructor;
        default: string;
    };
    open: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & Readonly<{
    onTitleClick?: ((...args: any[]) => any) | undefined;
}>, {
    title: string;
    open: boolean;
}, {}, {
    ArrowDown2: import("vue").DefineComponent<{
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
    ArrowUp2: import("vue").DefineComponent<{
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
        NutSubSideNavbar: typeof _default;
    }
}