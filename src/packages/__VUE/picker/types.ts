export interface PickerOption {
  [key: string]: any;
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

export interface FieldNames {
  text?: string;
  value?: string;
  children?: string;
}
