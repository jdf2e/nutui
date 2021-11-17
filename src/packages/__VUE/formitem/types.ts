export class FormItemRule {
  regex?: RegExp;
  trigger?: string;
  required?: boolean;
  message!: string;
  validator?: (value: any) => boolean | string | Promise<boolean | string>;
  formatter?: (value: any, rule: FormItemRule) => string;
}
