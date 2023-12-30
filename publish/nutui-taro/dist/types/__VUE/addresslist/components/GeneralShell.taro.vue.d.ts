declare const _default: import("vue").DefineComponent<{
    item: {
        type: ObjectConstructor;
        default: {};
    };
    longPress: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEdition: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    renderCompontent: () => import("vue").VNode<import("vue").RendererNode, import("vue").RendererElement, {
        [key: string]: any;
    }>;
    showMaskRef: import("vue").Ref<boolean>;
    clickItem: (event: Event) => void;
    editClick: (event: Event) => void;
    delClick: (event: Event) => void;
    delLongClick: (event: Event) => void;
    holddownstart: (event: Event) => void;
    holddownmove: () => void;
    holddownend: () => void;
    copyCLick: (event: Event) => void;
    hideMaskClick: () => void;
    setDefault: (event: Event) => void;
    maskClick: (event: Event) => void;
    swipeDelClick: (event: Event) => void;
    swipestart: () => void;
    swipemove: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("clickItem" | "delIcon" | "editIcon" | "longDown" | "longCopy" | "longSet" | "longDel" | "swipeDel")[], "clickItem" | "delIcon" | "editIcon" | "longDown" | "longCopy" | "longSet" | "longDel" | "swipeDel", import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{
    item: {
        type: ObjectConstructor;
        default: {};
    };
    longPress: {
        type: BooleanConstructor;
        default: boolean;
    };
    swipeEdition: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    onClickItem?: ((...args: any[]) => any) | undefined;
    onDelIcon?: ((...args: any[]) => any) | undefined;
    onEditIcon?: ((...args: any[]) => any) | undefined;
    onLongDown?: ((...args: any[]) => any) | undefined;
    onLongCopy?: ((...args: any[]) => any) | undefined;
    onLongSet?: ((...args: any[]) => any) | undefined;
    onLongDel?: ((...args: any[]) => any) | undefined;
    onSwipeDel?: ((...args: any[]) => any) | undefined;
}, {
    item: Record<string, any>;
    longPress: boolean;
    swipeEdition: boolean;
}, {}>;
export default _default;
