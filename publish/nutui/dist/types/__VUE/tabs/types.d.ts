export type RectItem = {
    bottom: number;
    dataset: {
        sid: string;
    };
    height: number;
    id: string;
    left: number;
    right: number;
    top: number;
    width: number;
};
export type TabsDirection = 'horizontal' | 'vertical';
export type TabsSize = 'large' | 'normal' | 'small';
export type TabsType = 'line' | 'smile';
export type TabsAlign = 'left' | 'center';
export declare const TABS_KEY: unique symbol;
