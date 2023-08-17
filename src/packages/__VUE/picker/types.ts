export interface PickerOption {
  [key: PropertyKey]: any;
  text: string | number;
  value: string | number;
  disabled?: string;
  children?: PickerOption[];
  className?: string | number;
}

export interface PickerColumnOption {
  text: string;
  value: string;
  disabled: string;
  children: PickerOption[];
  className: string;
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
}
