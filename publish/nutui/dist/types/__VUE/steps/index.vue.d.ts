import { PropType } from 'vue';
import { StepsDirection } from './types';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    direction: {
        type: PropType<StepsDirection>;
        default: string;
    };
    current: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    progressDot: {
        type: BooleanConstructor;
        default: boolean;
    };
}, () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "clickStep"[], "clickStep", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    direction: {
        type: PropType<StepsDirection>;
        default: string;
    };
    current: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    progressDot: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClickStep?: ((...args: any[]) => any) | undefined;
}, {
    direction: StepsDirection;
    current: string | number;
    progressDot: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutSteps: typeof _default;
  }
}