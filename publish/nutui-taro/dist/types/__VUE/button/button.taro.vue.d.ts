import type { WithInstall } from '../../utils';
import { PropType } from 'vue';
import type { ButtonShape, ButtonType, ButtonSize, ButtonFormType } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    color: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    formType: {
        type: PropType<ButtonFormType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    click: (...args: any[]) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    color: {
        type: StringConstructor;
        default: string;
    };
    shape: {
        type: PropType<ButtonShape>;
        default: string;
    };
    plain: {
        type: BooleanConstructor;
        default: boolean;
    };
    loading: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    type: {
        type: PropType<ButtonType>;
        default: string;
    };
    formType: {
        type: PropType<ButtonFormType>;
        default: string;
    };
    size: {
        type: PropType<ButtonSize>;
        default: string;
    };
    block: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    color: string;
    shape: ButtonShape;
    plain: boolean;
    loading: boolean;
    disabled: boolean;
    type: ButtonType;
    formType: ButtonFormType;
    size: ButtonSize;
    block: boolean;
}, {}>, {
    icon?(_: {}): any;
    default?(_: {}): any;
}>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutButton: typeof _default;
    }
}
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
