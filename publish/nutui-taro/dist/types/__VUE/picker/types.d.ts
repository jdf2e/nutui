export interface PickerOption {
    [key: PropertyKey]: any;
    text?: string | number;
    value?: string | number;
    disabled?: string;
    children?: PickerOption[];
    className?: string | number;
}
export type TouchParams = {
    startY: number;
    endY: number;
    startTime: number;
    endTime: number;
    lastY: number;
    lastTime: number;
};
export interface PickerFieldNames {
    text?: string;
    value?: string;
    children?: string;
    className?: string;
}
