import type { InjectionKey } from 'vue';

export const COLLAPSE_KEY = Symbol('nut-collapse') as InjectionKey<{
  updateVal: (name: string | number) => void;
  isExpanded: (name: string | number) => boolean;
}>;

export type CollapseValue = string | number | (string | number)[];
