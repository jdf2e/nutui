export interface FormItemRuleWithoutValidator {
    [key: string]: any;
    regex?: RegExp;
    required?: boolean;
    message?: string;
}
export interface FormItemRule extends FormItemRuleWithoutValidator {
    validator?: (value: any, ruleCfg: FormItemRuleWithoutValidator) => boolean | Promise<string> | Promise<boolean> | Promise<void> | Promise<unknown>;
}
export type FormItemLabelPosition = 'left' | 'right' | 'top';
export type FormItemStarPosition = 'left' | 'right';
