import type { ExtractPropTypes, SetupContext, RenderFunction } from 'vue';
export declare const GRID_KEY: unique symbol;
export type GridDirection = 'horizontal' | 'vertical';
export declare const gridProps: {
    columnNum: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    border: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: (NumberConstructor | StringConstructor)[];
        default: number;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    square: {
        type: BooleanConstructor;
        default: boolean;
    };
    reverse: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: import("vue").PropType<GridDirection>;
    };
    clickable: {
        type: BooleanConstructor;
        default: boolean;
    };
};
export type GridProps = ExtractPropTypes<typeof gridProps>;
export declare const component: {
    props: {
        columnNum: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        border: {
            type: BooleanConstructor;
            default: boolean;
        };
        gutter: {
            type: (NumberConstructor | StringConstructor)[];
            default: number;
        };
        center: {
            type: BooleanConstructor;
            default: boolean;
        };
        square: {
            type: BooleanConstructor;
            default: boolean;
        };
        reverse: {
            type: BooleanConstructor;
            default: boolean;
        };
        direction: {
            type: import("vue").PropType<GridDirection>;
        };
        clickable: {
            type: BooleanConstructor;
            default: boolean;
        };
    };
    setup(props: GridProps, { slots }: SetupContext): RenderFunction;
};
