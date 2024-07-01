import { h, Fragment, Comment, Text } from "vue";
import { c as createComponent } from "../component-DQf3CENX.js";
const { create, componentName } = createComponent("space");
const _sfc_main = create({
  props: {
    align: String,
    direction: {
      type: String,
      default: "horizontal"
    },
    justify: String,
    wrap: Boolean,
    gutter: [Number, String, Array],
    fill: Boolean
  },
  setup(props, { slots }) {
    const getMargin = (gutter) => {
      if (typeof gutter === "number") {
        return gutter + "px";
      }
      return gutter;
    };
    const getMarginStyle = (isLast) => {
      const style = {};
      if (!props.gutter) return style;
      const marginRight = `${getMargin(Array.isArray(props.gutter) ? props.gutter[0] : props.gutter)}`;
      const marginBottom = `${getMargin(Array.isArray(props.gutter) ? props.gutter[1] : props.gutter)}`;
      if (isLast) {
        return props.wrap ? { marginBottom } : {};
      }
      if (props.direction === "horizontal") {
        style.marginRight = marginRight;
      }
      if (props.direction === "vertical" || props.wrap) {
        style.marginBottom = marginBottom;
      }
      return style;
    };
    const filterEmpty = (children = []) => {
      const nodes = [];
      children.forEach((child) => {
        if (Array.isArray(child)) {
          nodes.push(...child);
        } else if (child.type === Fragment) {
          nodes.push(...filterEmpty(child.children));
        } else {
          nodes.push(child);
        }
      });
      return nodes.filter(
        (c) => {
          var _a;
          return !(c && (c.type === Comment || c.type === Fragment && ((_a = c.children) == null ? void 0 : _a.length) === 0 || c.type === Text && c.children.trim() === ""));
        }
      );
    };
    const { direction, wrap, fill, justify, align } = props;
    return () => {
      var _a;
      const children = filterEmpty((_a = slots.default) == null ? void 0 : _a.call(slots));
      const renderChildren = () => {
        return children.map((child, i) => {
          return h(
            "div",
            {
              class: `${componentName}-item`,
              style: getMarginStyle(i === children.length - 1)
            },
            child
          );
        });
      };
      return h(
        "div",
        {
          class: [
            componentName,
            direction && `${componentName}-${direction}`,
            align && `${componentName}-align-${align}`,
            justify && `${componentName}-justify-${justify}`,
            wrap && `${componentName}-wrap`,
            fill && `${componentName}-fill`
          ]
        },
        renderChildren()
      );
    };
  }
});
export {
  _sfc_main as default
};
