<script lang="ts">
import { Comment, CSSProperties, Fragment, PropType, Text, h, type VNode } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { SpaceAlign, SpaceJustify, SpaceGutter } from './types';
const { create, componentName } = createComponent('space');

export default create({
  props: {
    align: String as PropType<SpaceAlign>,
    direction: {
      type: String as PropType<'vertical' | 'horizontal'>,
      default: 'horizontal'
    },
    justify: String as PropType<SpaceJustify>,
    wrap: Boolean,
    gutter: [Number, String, Array] as PropType<number | string | [SpaceGutter, SpaceGutter]>,
    fill: Boolean
  },
  setup(props, { slots }) {
    // gutter数值转换
    const getMargin = (gutter: SpaceGutter) => {
      if (typeof gutter === 'number') {
        return gutter + 'px';
      }
      return gutter;
    };

    // 计算margin样式
    const getMarginStyle = (isLast: boolean): CSSProperties => {
      const style: CSSProperties = {};

      if (!props.gutter) return style;

      const marginRight = `${getMargin(Array.isArray(props.gutter) ? props.gutter[0] : props.gutter)}`;
      const marginBottom = `${getMargin(Array.isArray(props.gutter) ? props.gutter[1] : props.gutter)}`;

      if (isLast) {
        return props.wrap ? { marginBottom } : {};
      }

      if (props.direction === 'horizontal') {
        style.marginRight = marginRight;
      }
      if (props.direction === 'vertical' || props.wrap) {
        style.marginBottom = marginBottom;
      }

      return style;
    };

    // 过滤空节点
    const filterEmpty = (children: VNode[] = []) => {
      const nodes: VNode[] = [];
      children.forEach((child) => {
        if (Array.isArray(child)) {
          nodes.push(...child);
        } else if (child.type === Fragment) {
          nodes.push(...filterEmpty(child.children as VNode[]));
        } else {
          nodes.push(child);
        }
      });
      return nodes.filter(
        (c) =>
          !(
            c &&
            (c.type === Comment ||
              (c.type === Fragment && c.children?.length === 0) ||
              (c.type === Text && (c.children as string).trim() === ''))
          )
      );
    };

    const { direction, wrap, fill, justify, align } = props;

    return () => {
      const children = filterEmpty(slots.default?.());

      // 渲染子节点
      const renderChildren = () => {
        return children.map((child, i) => {
          // 给slots节点每一个套一层div标签，如果是最后一个节点，则不需要设置margin
          return h(
            'div',
            {
              class: `${componentName}-item`,
              style: getMarginStyle(i === children.length - 1)
            },
            child
          );
        });
      };

      return h(
        'div',
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
</script>
