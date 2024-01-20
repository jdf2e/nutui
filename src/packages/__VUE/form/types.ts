import { FormItemRule, FormItemLabelPosition, FormItemStarPosition } from '../formitem/types';

export const FORM_KEY = Symbol('nut-form');

export type FormRules = {
  [key: string]: FormItemRule[];
};

export type FormRule = {
  prop: string;
  rules: FormItemRule[];
};

export type ErrorMessage = {
  prop: string;
  message: string;
};

export type FormLabelPosition = FormItemLabelPosition;
export type FormStarPosition = FormItemStarPosition;
