export default {
  name: 'ScrollItem',
  functional: true,
  props: {
    item: null
  },
  render: (createElement, context) => {
    // console.log(context.props.item)
    // console.log(context.slots().default)
    const { tag, children, data } = context.props.item;
    return createElement(tag, data, children);
  }
};
