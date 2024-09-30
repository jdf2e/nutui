type Direction = '' | 'vertical' | 'horizontal';
export declare function useTouch(): {
    move: (event: TouchEvent) => void;
    start: (event: TouchEvent) => void;
    reset: () => void;
    startX: import("vue").Ref<number, number>;
    startY: import("vue").Ref<number, number>;
    moveX: import("vue").Ref<number, number>;
    moveY: import("vue").Ref<number, number>;
    deltaX: import("vue").Ref<number, number>;
    deltaY: import("vue").Ref<number, number>;
    offsetX: import("vue").Ref<number, number>;
    offsetY: import("vue").Ref<number, number>;
    direction: import("vue").Ref<Direction, Direction>;
    isVertical: () => boolean;
    isHorizontal: () => boolean;
};
export {};
