import { PropType } from 'vue';
import { RadioGroupTextPosition, RadioGroupDirection } from '../radio/types';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    direction: {
        type: PropType<RadioGroupDirection>;
        default: string;
    };
    textPosition: {
        type: PropType<RadioGroupTextPosition>;
        default: string;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("change" | "update:modelValue")[], "change" | "update:modelValue", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: string;
    };
    direction: {
        type: PropType<RadioGroupDirection>;
        default: string;
    };
    textPosition: {
        type: PropType<RadioGroupTextPosition>;
        default: string;
    };
}>> & {
    onChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
}, {
    modelValue: string | number | boolean;
    direction: RadioGroupDirection;
    textPosition: RadioGroupTextPosition;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutRadioGroup: typeof _default;
  }
}