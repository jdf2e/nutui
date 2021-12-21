import { CascaderOption, CascaderConfig, CascaderValue } from './types';
import { formatTree, eachTree } from './helper';

class Tree {
  nodes: CascaderOption[];
  readonly config: CascaderConfig;

  constructor(nodes: CascaderOption[], config?: CascaderConfig) {
    this.config = {
      value: 'value',
      text: 'text',
      children: 'children',
      ...(config || {})
    };
    this.nodes = formatTree(nodes, null, this.config);
  }

  updateChildren(nodes: CascaderOption[], parent: CascaderOption | null): void {
    if (!parent) {
      this.nodes = formatTree(nodes, null, this.config);
    } else {
      parent.children = formatTree(nodes, parent, this.config);
    }
  }

  getNodeByValue(value: CascaderOption['value']): CascaderOption | void {
    let foundNode;
    eachTree(this.nodes, (node: CascaderOption) => {
      if (node.value === value) {
        foundNode = node;
        return true;
      }
    });

    return foundNode;
  }

  getPathNodesByNode(node: CascaderOption): CascaderOption[] {
    const nodes = [];

    while (node) {
      nodes.unshift(node);
      node = node._parent;
    }

    return nodes;
  }

  getPathNodesByValue(value: CascaderValue): CascaderOption[] {
    if (Array.isArray(value) && !value.length) {
      return [];
    }

    const tail = Array.isArray(value) ? value[value.length - 1] : value;

    const node = this.getNodeByValue(tail);
    if (!node) {
      return [];
    }

    return this.getPathNodesByNode(node);
  }

  isLeaf(node: CascaderOption, lazy: boolean): boolean {
    const { leaf, children } = node;
    const hasChildren = Array.isArray(children) && Boolean(children.length);

    return leaf || (!hasChildren && !lazy);
  }

  hasChildren(node: CascaderOption, lazy: boolean): boolean {
    const isLeaf = this.isLeaf(node, lazy);

    if (isLeaf) {
      return false;
    }

    const { children } = node;
    return Array.isArray(children) && Boolean(children.length);
  }
}

export default Tree;
