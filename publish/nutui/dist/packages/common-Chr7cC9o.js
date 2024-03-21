import { shallowReactive, getCurrentInstance, provide, markRaw, isVNode, computed, h } from "vue";
import { c as createComponent } from "./component-DQf3CENX.js";
import { p as pxCheck } from "./pxCheck-DN6FYV6q.js";
function flattenVNodes(children, childName) {
  const result = [];
  const traverse = (children2) => {
    if (!Array.isArray(children2))
      return;
    children2.forEach((child) => {
      var _a;
      if (!isVNode(child))
        return;
      if (childName) {
        if (child.type && child.type.name === childName) {
          result.push(child);
          return;
        }
      } else {
        result.push(child);
      }
      if ((_a = child.component) == null ? void 0 : _a.subTree) {
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
function sortChildren(parent, internalChildren, childName) {
  const vnodes = flattenVNodes(parent.subTree.children, childName);
  internalChildren.sort((a, b) => {
    return vnodes.indexOf(a.vnode) - vnodes.indexOf(b.vnode);
  });
}
function useProvide(key, childName) {
  const internalChildren = shallowReactive([]);
  const parent = getCurrentInstance();
  const add = (child) => {
    if (!child.proxy)
      return;
    internalChildren.push(markRaw(child));
    sortChildren(parent, internalChildren, childName);
  };
  const remove = (child) => {
    internalChildren.splice(internalChildren.indexOf(markRaw(child)), 1);
  };
  const extend = Object.assign;
  return (value) => {
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
const { componentName } = createComponent("grid");
const GRID_KEY = Symbol("grid");
const gridProps = {
  // 列数
  columnNum: {
    type: [Number, String],
    default: 4
  },
  // 是否显示边框
  border: {
    type: Boolean,
    default: true
  },
  // 格子之间间隔距离
  gutter: {
    type: [Number, String],
    default: 0
  },
  // 是否内容居中
  center: {
    type: Boolean,
    default: true
  },
  // 是否固定正方形
  square: {
    type: Boolean,
    default: false
  },
  // 内容与文字翻转
  reverse: {
    type: Boolean,
    default: false
  },
  // 内容排列方向
  direction: {
    type: String
  },
  // 是否开启点击反馈
  clickable: {
    type: Boolean,
    default: false
  }
};
const component = {
  props: gridProps,
  setup(props, { slots }) {
    useProvide(GRID_KEY, `NutGridItem`)({ props });
    const rootClass = computed(() => {
      const prefixCls = componentName;
      return {
        [prefixCls]: true,
        [`${prefixCls}--border`]: props.border && !props.gutter
      };
    });
    const rootStyle = computed(() => {
      const style = {};
      if (props.gutter) {
        style.paddingLeft = pxCheck(props.gutter);
      }
      return style;
    });
    return () => {
      var _a;
      return h(
        "view",
        {
          class: rootClass.value,
          style: rootStyle.value
        },
        (_a = slots.default) == null ? void 0 : _a.call(slots)
      );
    };
  }
};
export {
  GRID_KEY as G,
  component as c
};
