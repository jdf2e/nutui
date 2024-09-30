import { Del, Edit } from '@nutui/icons-vue-taro';
declare const _default: import("vue").DefineComponent<import("vue").ExtractPropTypes<{
    item: {
        type: ObjectConstructor;
        default: {};
    };
}>, {
    delClick: (event: Event) => void;
    editClick: (event: Event) => void;
    contentsClick: (event: Event) => void;
    translate: (keyPath: string, ...args: unknown[]) => any;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickItem" | "delIcon" | "editIcon")[], "clickItem" | "delIcon" | "editIcon", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: ObjectConstructor;
        default: {};
    };
}>> & Readonly<{
    onClickItem?: ((...args: any[]) => any) | undefined;
    onDelIcon?: ((...args: any[]) => any) | undefined;
    onEditIcon?: ((...args: any[]) => any) | undefined;
}>, {
    item: Record<string, any>;
}, {}, {
    Del: typeof Del;
    Edit: typeof Edit;
}, {}, string, import("vue").ComponentProvideOptions, true, {}, any>;
export default _default;
