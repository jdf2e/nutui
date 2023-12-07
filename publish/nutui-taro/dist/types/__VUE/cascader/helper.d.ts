import { CascaderOption, CascaderConfig, convertConfig } from './types';
export declare const formatTree: (tree: CascaderOption[], parent: CascaderOption | null, config: CascaderConfig) => CascaderOption[];
export declare const eachTree: (tree: CascaderOption[], cb: (node: CascaderOption) => any) => void;
export declare const convertListToOptions: (list: CascaderOption[], options: convertConfig) => CascaderOption[];
