import { CascaderOption, CascaderConfig, CascaderValue } from './types';
declare class Tree {
    nodes: CascaderOption[];
    readonly config: CascaderConfig;
    constructor(nodes: CascaderOption[], config?: CascaderConfig);
    updateChildren(nodes: CascaderOption[], parent: CascaderOption | null): void;
    getNodeByValue(value: CascaderOption['value']): CascaderOption | void;
    getPathNodesByValue(value: CascaderValue): CascaderOption[];
    isLeaf(node: CascaderOption, lazy: boolean): boolean;
    hasChildren(node: CascaderOption, lazy: boolean): boolean;
}
export default Tree;
