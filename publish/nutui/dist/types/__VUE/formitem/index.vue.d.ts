import type { FormItemRule, FormItemLabelPosition, FormItemStarPosition } from './types';
import { PropType, CSSProperties } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    prop: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<FormItemRule[]>;
        default: () => never[];
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    errorMessageAlign: {
        type: StringConstructor;
        default: string;
    };
    bodyAlign: {
        type: StringConstructor;
        default: string;
    };
    labelPosition: {
        type: PropType<FormItemLabelPosition>;
        default: string;
    };
    starPosition: {
        type: PropType<FormItemStarPosition>;
        default: string;
    };
}, {
    parent: any;
    labelStyle: import("vue").ComputedRef<CSSProperties>;
    bodyStyle: import("vue").ComputedRef<CSSProperties>;
    errorMessageStyle: import("vue").ComputedRef<CSSProperties>;
    getSlots: (name: string) => import("vue").Slot<any> | undefined;
    isRequired: import("vue").ComputedRef<boolean>;
    labelPositionClass: import("vue").ComputedRef<string>;
    starPositionClass: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    prop: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    rules: {
        type: PropType<FormItemRule[]>;
        default: () => never[];
    };
    required: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    showErrorLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    labelWidth: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    labelAlign: {
        type: StringConstructor;
        default: string;
    };
    errorMessageAlign: {
        type: StringConstructor;
        default: string;
    };
    bodyAlign: {
        type: StringConstructor;
        default: string;
    };
    labelPosition: {
        type: PropType<FormItemLabelPosition>;
        default: string;
    };
    starPosition: {
        type: PropType<FormItemStarPosition>;
        default: string;
    };
}>>, {
    label: string;
    required: boolean;
    rules: FormItemRule[];
    prop: string;
    labelPosition: FormItemLabelPosition;
    starPosition: FormItemStarPosition;
    showErrorMessage: boolean;
    showErrorLine: boolean;
    labelWidth: string | number;
    labelAlign: string;
    errorMessageAlign: string;
    bodyAlign: string;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutFormItem: typeof _default;
  }
}