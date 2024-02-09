import { Ref, CSSProperties, PropType } from 'vue';
import { SearchbarInputAlign, SearchbarShape } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: PropType<SearchbarShape>;
        default: string;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
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
            style: import("vue").ComputedRef<CSSProperties>;
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
    background: {
        type: StringConstructor;
        default: string;
    };
    inputBackground: {
        type: StringConstructor;
        default: string;
    };
    focusStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputAlign: {
        type: PropType<SearchbarInputAlign>;
        default: string;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    valueChange: (event: Event) => void;
    valueFocus: (event: Event) => void;
    valueBlur: (event: Event) => void;
    handleClear: (event: Event) => void;
    handleSubmit: () => void;
    searchbarStyle: import("vue").ComputedRef<{
        background: string;
    }>;
    inputSearchbarStyle: import("vue").ComputedRef<{
        background: string;
    }>;
    focusCss: Ref<{}>;
    translate: (keyPath: string, ...args: unknown[]) => any;
    clickInput: (event: Event) => void;
    leftIconClick: (event: Event) => void;
    rightIconClick: (event: Event) => void;
    styleSearchbar: import("vue").ComputedRef<CSSProperties>;
    disabled: import("vue").ComputedRef<boolean>;
    active: Ref<boolean>;
    renderIcon: (icon: import("vue").Component, props?: any) => "" | import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    inputsearch: Ref<HTMLElement | null>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("search" | "clear" | "blur" | "change" | "focus" | "update:modelValue" | "clickInput" | "clickLeftIcon" | "clickRightIcon")[], "search" | "clear" | "blur" | "change" | "focus" | "update:modelValue" | "clickInput" | "clickLeftIcon" | "clickRightIcon", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    inputType: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: PropType<SearchbarShape>;
        default: string;
    };
    maxLength: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
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
            style: import("vue").ComputedRef<CSSProperties>;
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
    background: {
        type: StringConstructor;
        default: string;
    };
    inputBackground: {
        type: StringConstructor;
        default: string;
    };
    focusStyle: {
        type: ObjectConstructor;
        default: () => {};
    };
    autofocus: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    inputAlign: {
        type: PropType<SearchbarInputAlign>;
        default: string;
    };
    safeAreaInsetBottom: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onFocus?: ((...args: any[]) => any) | undefined;
    onBlur?: ((...args: any[]) => any) | undefined;
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
    onClear?: ((...args: any[]) => any) | undefined;
    onClickInput?: ((...args: any[]) => any) | undefined;
    onClickLeftIcon?: ((...args: any[]) => any) | undefined;
    onClickRightIcon?: ((...args: any[]) => any) | undefined;
}, {
    shape: SearchbarShape;
    disabled: boolean;
    label: string;
    background: string;
    safeAreaInsetBottom: boolean;
    placeholder: string;
    modelValue: string | number;
    inputType: string;
    maxLength: string | number;
    clearable: boolean;
    clearIcon: Record<string, any>;
    inputBackground: string;
    focusStyle: Record<string, any>;
    autofocus: boolean;
    readonly: boolean;
    inputAlign: SearchbarInputAlign;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSearchbar: typeof _default;
    }
}