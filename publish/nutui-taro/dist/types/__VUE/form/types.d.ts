export interface FormItemRuleWithoutValidator {
    [key: string]: any;
    regex?: RegExp;
    required?: boolean;
    message?: string;
}
export interface FormItemRule extends FormItemRuleWithoutValidator {
    validator?: (value: any, ruleCfg: FormItemRuleWithoutValidator) => boolean | Promise<string> | Promise<boolean> | Promise<void> | Promise<unknown>;
}
export type FormRules = {
    [key: string]: FormItemRule[];
};
export type FormRule = {
    prop: string;
    rules: FormItemRule[];
};
export type FormErrorMessage = {
    prop: string;
    message: string;
};
export type FormLabelPosition = 'left' | 'right' | 'top';
export type FormStarPosition = 'left' | 'right';
