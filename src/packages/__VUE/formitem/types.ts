export class FormItemRuleWithoutValidator {
  regex?: RegExp;
  required?: boolean;
  message!: string;
  [key: string]: any;
}

export class FormItemRule extends FormItemRuleWithoutValidator {
  validator?: (value: any, ruleCfg: FormItemRuleWithoutValidator) => Promise<string>;
}
