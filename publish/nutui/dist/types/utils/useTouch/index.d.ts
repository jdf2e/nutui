type Direction = '' | 'vertical' | 'horizontal';
export declare function useTouch(): {
    move: (event: TouchEvent) => void;
    start: (event: TouchEvent) => void;
    reset: () => void;
    startX: import("vue").Ref<number>;
    startY: import("vue").Ref<number>;
    moveX: import("vue").Ref<number>;
    moveY: import("vue").Ref<number>;
    deltaX: import("vue").Ref<number>;
    deltaY: import("vue").Ref<number>;
    offsetX: import("vue").Ref<number>;
    offsetY: import("vue").Ref<number>;
    direction: import("vue").Ref<Direction>;
    isVertical: () => boolean;
    isHorizontal: () => boolean;
};
export {};
