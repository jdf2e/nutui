import { InjectionKey } from 'vue';

export const COLLAPSE_KEY = Symbol('nut-collapse') as InjectionKey<{
  updateVal: Function;
  isExpanded: Function;
}>;
