import { PropType } from 'vue';
import { DividerDirection, DividerPosition } from './types';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
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
}, {
    classes: import("vue").ComputedRef<{
        "nut-divider": boolean;
        "nut-divider-center": import("vue").Slot<any> | undefined;
        "nut-divider-left": boolean;
        "nut-divider-right": boolean;
        "nut-divider-dashed": boolean;
        "nut-divider-hairline": boolean;
        "nut-divider-vertical"?: undefined;
    } | {
        "nut-divider": boolean;
        "nut-divider-vertical": boolean;
        "nut-divider-center"?: undefined;
        "nut-divider-left"?: undefined;
        "nut-divider-right"?: undefined;
        "nut-divider-dashed"?: undefined;
        "nut-divider-hairline"?: undefined;
    }>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
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
    direction: DividerDirection;
    contentPosition: DividerPosition;
    hairline: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutDivider: typeof _default;
  }
}