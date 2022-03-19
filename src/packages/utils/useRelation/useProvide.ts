import { isVNode, provide, markRaw, shallowReactive, getCurrentInstance } from 'vue';
import type { VNode, InjectionKey, ConcreteComponent, VNodeNormalizedChildren, ComponentInternalInstance } from 'vue';

export function flattenVNodes(children: VNodeNormalizedChildren, childName?: string) {
  const result: VNode[] = [];

  const traverse = (children: VNodeNormalizedChildren) => {
    if (!Array.isArray(children)) return;
    children.forEach((child) => {
      if (!isVNode(child)) return;

      if (childName) {
        if (child.type && (child.type as ConcreteComponent).name === childName) {
          result.push(child);
          return;
        }
      } else {
        result.push(child);
      }

      if (child.component?.subTree) {
        traverse(child.component.subTree.children);
      }

      if (child.children) {
        traverse(child.children);
      }
    });
  };

  traverse(children);

  return result;
}

export function sortChildren(
  parent: ComponentInternalInstance,
  internalChildren: ComponentInternalInstance[],
  childName?: string
) {
  const vnodes = flattenVNodes(parent.subTree.children, childName);
  internalChildren.sort((a, b) => {
    return vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode);
  });
}

// 如果指定组件名称，则只查找此组件并且查到后结束。也就是不关心此组件下的内容，在大部分场景下节省查找消耗。
export function useProvide<ProvideValue>(key: InjectionKey<ProvideValue>, childName?: string) {
  const internalChildren: ComponentInternalInstance[] = shallowReactive([]);
  const parent = getCurrentInstance()!;

  const add = (child: ComponentInternalInstance) => {
    if (!child.proxy) return;
    internalChildren.push(markRaw(child));
    sortChildren(parent, internalChildren, childName);
  };

  const remove = (child: ComponentInternalInstance) => {
    internalChildren.splice(internalChildren.indexOf(markRaw(child)), 1);
  };

  const extend = Object.assign;
  return (value?: ProvideValue) => {
    provide(
      key,
      extend(
        {
          add,
          remove,
          internalChildren
        },
        value
      )
    );

    return {
      internalChildren
    };
  };
}
