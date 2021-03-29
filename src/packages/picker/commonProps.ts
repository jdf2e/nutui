export const commonProps = {
  listData: {
    type: Array,
    default: () => {
      return [];
    }
  },
  readonly: {
    type: Boolean,
    default: false
  },
  visibleItemCount: {
    type: [Number, String],
    default: 7
  },
  defaultIndex: {
    type: [Number, String],
    default: 0
  },
  itemHeight: {
    type: [Number, String],
    default: 35
  }
};
