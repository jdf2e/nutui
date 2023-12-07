export declare const useTabContentTouch: (props: any, tabMethods: any, taro?: any, useTaroRect?: any) => {
    touchMethods: {
        onTouchStart(event: TouchEvent): void;
        onTouchMove(event: TouchEvent): void;
        onTouchEnd(): void;
    };
    touchState: {
        offset: number;
        moving: boolean;
    };
    tabsContentRef: import("vue").Ref<HTMLElement | undefined>;
};
