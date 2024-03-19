import type { FormItemRule } from '../form/types';

export interface InvoiceDataItem {
  type: 'input' | 'radio';
  label: string;
  placeholder: string;
  radioLabel: {
    label: string;
  }[];
  formItemProp: string;
  rules: FormItemRule[];
  required: boolean;
}
