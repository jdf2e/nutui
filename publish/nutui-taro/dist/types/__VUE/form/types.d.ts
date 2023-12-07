import { FormItemRule, FormItemLabelPosition, FormItemStarPosition } from '../formitem/types';
export declare const FORM_KEY: unique symbol;
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
