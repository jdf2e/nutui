export interface PickerOption {
  text?: string | number;
  value?: string | number;
  disabled?: string;
  children?: PickerOption[];
  className?: string;
  [key: PropertyKey]: any;
}

export interface PickerColumnOption {
  text: string;
  value: string;
  disabled: string;
  children: PickerOption[];
  className: string;
}

export interface PickerColumnsKey {
  text?: string;
  value?: string;
  disabled?: string;
  children?: string;
  className?: string;
}

export type TouchParams = {
  startY: number;
  endY: number;
  startTime: number;
  endTime: number;
  lastY: number;
  lastTime: number;
};
