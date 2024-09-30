import { PropType } from 'vue';
import { Fabulous, Comment, MoreX } from '@nutui/icons-vue-taro';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
}>, {
    showPopver: import("vue").Ref<boolean, boolean>;
    operate: (type: string) => void;
    mergeOp: import("vue").Ref<never[], never[]>;
    handleClick: () => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("handleClick" | "clickOperate")[], "handleClick" | "clickOperate", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    type: {
        type: StringConstructor;
        default: string;
    };
    info: {
        type: ObjectConstructor;
        default: () => {};
    };
    operation: {
        type: PropType<string[]>;
        default: string[];
    };
}>> & Readonly<{
    onHandleClick?: ((...args: any[]) => any) | undefined;
    onClickOperate?: ((...args: any[]) => any) | undefined;
}>, {
    info: Record<string, any>;
    type: string;
    operation: string[];
}, {}, {
    Fabulous: typeof Fabulous;
    Comment: typeof Comment;
    MoreX: typeof MoreX;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
