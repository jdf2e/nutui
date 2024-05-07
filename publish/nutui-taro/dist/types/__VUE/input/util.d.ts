import type { HTMLAttributes, InputHTMLAttributes } from 'vue';
import type { InputType } from './types';
export declare function formatNumber(value: string, allowDot?: boolean, allowMinus?: boolean): string;
export declare function mapInputType(type: InputType): {
    type: InputHTMLAttributes['type'];
    inputmode?: HTMLAttributes['inputmode'];
};
