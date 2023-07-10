export interface FormItemRuleWithoutValidator {
  regex?: RegExp;
  required?: boolean;
  message: string;
  [key: string]: any;
}

export interface FormItemRule extends FormItemRuleWithoutValidator {
  validator?: (value: any, ruleCfg: FormItemRuleWithoutValidator) => boolean | Promise<string | boolean>;
}
