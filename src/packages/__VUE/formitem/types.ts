class FormItemRuleWithoutValidator {
  regex?: RegExp;
  required?: boolean;
  message!: string;
}

export class FormItemRule extends FormItemRuleWithoutValidator {
  validator?: (value: any, ruleCfg: FormItemRuleWithoutValidator) => boolean | string | Promise<boolean | string>;
}
