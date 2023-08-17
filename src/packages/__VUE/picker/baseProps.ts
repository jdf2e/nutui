import { PropType } from 'vue';
import { PickerOption, PickerFieldNames } from './types';
export default {
  modelValue: {
    type: Array as PropType<(string | number)[]>,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  },
  cancelText: {
    type: String,
    default: ''
  },
  okText: {
    type: String,
    default: ''
  },
  columns: {
    type: Array as PropType<(PickerOption | PickerOption[])[]>,
    default: () => {
      return [];
    }
  },
  threeDimensional: {
    type: Boolean,
    default: true
  },
  swipeDuration: {
    type: [Number, String],
    default: 1000
  },
  showToolbar: {
    type: Boolean,
    default: true
  },
  visibleOptionNum: {
    type: [Number, String],
    default: 7
  },
  optionHeight: {
    type: [Number, String],
    default: 36
  },
  fieldNames: {
    type: Object as PropType<PickerFieldNames>,
    default: () => ({})
  }
};
