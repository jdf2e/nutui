export class FormItemRule {
  regex?: RegExp;
  required?: boolean;
  message!: string;
  validator?: (value: any) => boolean | string | Promise<boolean | string>;
}
