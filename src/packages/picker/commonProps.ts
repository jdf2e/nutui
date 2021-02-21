export const commonProps = {
  listData: {
    type: Array,
    default: []
  },
  readonly: {
    type: Boolean,
    default: false
  },
  visibleItemCount: {
    type: [Number],
    default: 7
  },
  defaultIndex: {
    type: [Number, String],
    default: 0
  },
  itemHeight: {
    type: [Number],
    default: 35
  }
};
