import type { InjectionKey } from 'vue';
export declare const COLLAPSE_KEY: InjectionKey<{
    updateVal: (name: string | number) => void;
    isExpanded: (name: string | number) => boolean;
}>;
export type CollapseValue = string | number | (string | number)[];
