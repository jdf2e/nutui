
declare type Install<T> = T & {
  install(app: import('vue').App): void;
};
declare const _default: Install< import("vue").DefineComponent<{
    name: {
        type: StringConstructor;
        default: string;
    };
    gapY: {
        type: NumberConstructor;
        default: number;
    };
    gapX: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    image: {
        type: StringConstructor;
        default: string;
    };
    imageWidth: {
        type: NumberConstructor;
        default: number;
    };
    imageHeight: {
        type: NumberConstructor;
        default: number;
    };
    content: {
        type: (StringConstructor | {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: string;
    };
    fontColor: {
        type: StringConstructor;
        default: string;
    };
    fontStyle: {
        type: StringConstructor;
        default: string;
    };
    fontFamily: {
        type: StringConstructor;
        default: string;
    };
    fontWeight: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fullPage: {
        type: BooleanConstructor;
        default: string;
    };
}, {
    classes: import("vue").ComputedRef<{
        [x: string]: boolean;
    }>;
    base64Url: import("vue").Ref<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    name: {
        type: StringConstructor;
        default: string;
    };
    gapY: {
        type: NumberConstructor;
        default: number;
    };
    gapX: {
        type: NumberConstructor;
        default: number;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    rotate: {
        type: NumberConstructor;
        default: number;
    };
    image: {
        type: StringConstructor;
        default: string;
    };
    imageWidth: {
        type: NumberConstructor;
        default: number;
    };
    imageHeight: {
        type: NumberConstructor;
        default: number;
    };
    content: {
        type: (StringConstructor | {
            (arrayLength: number): string[];
            (...items: string[]): string[];
            new (arrayLength: number): string[];
            new (...items: string[]): string[];
            isArray(arg: any): arg is any[];
            readonly prototype: any[];
            from<T>(arrayLike: ArrayLike<T>): T[];
            from<T_1, U>(arrayLike: ArrayLike<T_1>, mapfn: (v: T_1, k: number) => U, thisArg?: any): U[];
            from<T_2>(iterable: Iterable<T_2> | ArrayLike<T_2>): T_2[];
            from<T_3, U_1>(iterable: Iterable<T_3> | ArrayLike<T_3>, mapfn: (v: T_3, k: number) => U_1, thisArg?: any): U_1[];
            of<T_4>(...items: T_4[]): T_4[];
            readonly [Symbol.species]: ArrayConstructor;
        })[];
        default: string;
    };
    fontColor: {
        type: StringConstructor;
        default: string;
    };
    fontStyle: {
        type: StringConstructor;
        default: string;
    };
    fontFamily: {
        type: StringConstructor;
        default: string;
    };
    fontWeight: {
        type: StringConstructor;
        default: string;
    };
    fontSize: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    fullPage: {
        type: BooleanConstructor;
        default: string;
    };
}>> & {
    onClick?: ((...args: any[]) => any) | undefined;
}, {
    name: string;
    image: string;
    zIndex: number;
    content: string | string[];
    width: number;
    height: number;
    rotate: number;
    fontSize: string | number;
    gapY: number;
    gapX: number;
    imageWidth: number;
    imageHeight: number;
    fontColor: string;
    fontStyle: string;
    fontFamily: string;
    fontWeight: string;
    fullPage: boolean;
}, {}>>;
export default _default;

declare module 'vue' {
  interface GlobalComponents {
      NutWatermark: typeof _default;
  }
}