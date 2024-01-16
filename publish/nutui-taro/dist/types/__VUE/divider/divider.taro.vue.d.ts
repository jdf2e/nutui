import type { WithInstall } from '../../utils';
import { PropType } from 'vue';
import { DividerDirection, DividerPosition } from './types';
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    contentPosition: {
        type: PropType<DividerPosition>;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    hairline: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<DividerDirection>;
        default: string;
    };
}, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    contentPosition: {
        type: PropType<DividerPosition>;
        default: string;
    };
    dashed: {
        type: BooleanConstructor;
        default: boolean;
    };
    hairline: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<DividerDirection>;
        default: string;
    };
}>>, {
    dashed: boolean;
    contentPosition: DividerPosition;
    hairline: boolean;
    direction: DividerDirection;
}, {}>, Readonly<Record<string, any>> & Record<string, any>>;
declare const _nut_default: WithInstall<typeof _default>;
export default _nut_default;

declare module 'vue' {
    interface GlobalComponents {
        NutDivider: typeof _default;
    }
}
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
