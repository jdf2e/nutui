import { FormItemRule } from '../formitem/types';

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
