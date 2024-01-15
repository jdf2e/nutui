import { PropType, type VNode } from 'vue';
import { SpaceAlign, SpaceJustify, SpaceGutter } from './types';

declare type Install<T> = T & {
    install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    align: PropType<SpaceAlign>;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    justify: PropType<SpaceJustify>;
    wrap: BooleanConstructor;
    gutter: PropType<string | number | [SpaceGutter, SpaceGutter]>;
    fill: BooleanConstructor;
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    align: PropType<SpaceAlign>;
    direction: {
        type: PropType<"horizontal" | "vertical">;
        default: string;
    };
    justify: PropType<SpaceJustify>;
    wrap: BooleanConstructor;
    gutter: PropType<string | number | [SpaceGutter, SpaceGutter]>;
    fill: BooleanConstructor;
}>>, {
    fill: boolean;
    wrap: boolean;
    direction: "horizontal" | "vertical";
}, {}>>;
export default _default;

declare module 'vue' {
    interface GlobalComponents {
        NutSpace: typeof _default;
    }
}