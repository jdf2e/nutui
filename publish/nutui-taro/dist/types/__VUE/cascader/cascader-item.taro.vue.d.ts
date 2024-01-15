import { Ref } from 'vue';
import { CascaderPane, CascaderOption, CascaderTabs } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    visible: BooleanConstructor;
    modelValue: ArrayConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    convertConfig: ObjectConstructor;
}, {
    handleNode(node: CascaderOption, silent?: boolean): Promise<void>;
    handleTabClick(tab: CascaderTabs): void;
    formatTabTitle(pane: CascaderPane): any;
    isSelected(pane: CascaderPane, node: CascaderOption): boolean;
    panes: Ref<CascaderPane[]>;
    initLoading: Ref<boolean>;
    tabsCursor: Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue" | "pathChange")[], "change" | "update:modelValue" | "pathChange", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    visible: BooleanConstructor;
    modelValue: ArrayConstructor;
    options: {
        type: ArrayConstructor;
        default: () => never[];
    };
    lazy: BooleanConstructor;
    lazyLoad: FunctionConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    textKey: {
        type: StringConstructor;
        default: string;
    };
    childrenKey: {
        type: StringConstructor;
        default: string;
    };
    convertConfig: ObjectConstructor;
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onPathChange?: ((...args: any[]) => any) | undefined;
}, {
    visible: boolean;
    options: unknown[];
    lazy: boolean;
    valueKey: string;
    textKey: string;
    childrenKey: string;
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutCascader: typeof _default;
    }
}