import { PropType } from 'vue';

declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}, {
    src: import("vue").ComputedRef<any>;
    style: import("vue").ComputedRef<{
        width: string | undefined;
        height: string | undefined;
    } | {
        width?: undefined;
        height?: undefined;
    }>;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    image: {
        type: PropType<string>;
        default: string;
    };
    imageSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: string;
    };
    description: {
        type: StringConstructor;
        default: string;
    };
}>>, {
    image: string;
    description: string;
    imageSize: string | number;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutEmpty: typeof _default;
  }
}