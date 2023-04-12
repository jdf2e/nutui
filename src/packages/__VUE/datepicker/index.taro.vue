<template>
  <nut-picker
    v-model="selectedValue"
    :okText="okText"
    :cancelText="cancelText"
    @cancel="closeHandler"
    :columns="columns"
    @change="changeHandler"
    :title="title"
    @confirm="confirm"
    :threeDimensional="threeDimensional"
    :swipeDuration="swipeDuration"
    :showToolbar="showToolbar"
    :visibleOptionNum="visibleOptionNum"
    :optionHeight="optionHeight"
  >
    <template #top>
      <slot name="top"></slot>
    </template>
    <slot></slot>
  </nut-picker>
</template>
<script lang="ts">
import { toRefs, watch, computed, reactive, onBeforeMount } from 'vue';
import type { PropType } from 'vue';
import Picker from '../picker/index.taro.vue';
import { PickerOption } from '../picker/types';
import { createComponent } from '@/packages/utils/create';
import { Formatter, Filter } from './type';
import { padZero, isDate as isDateU } from '@/packages/utils/util';
const { componentName, create } = createComponent('date-picker');

const currentYear = new Date().getFullYear();
function isDate(val: Date): val is Date {
  return isDateU(val) && !isNaN(val.getTime());
}

const zhCNType: {
  [props: string]: string;
} = {
  day: '日',
  year: '年',
  month: '月',
  hour: '时',
  minute: '分',
  seconds: '秒'
};
export default create({
  components: {
    [Picker.name]: Picker
  },
  props: {
    modelValue: null,
    title: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: ''
    },
    cancelText: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'date'
    },
    isShowChinese: {
      type: Boolean,
      default: false
    },
    minuteStep: {
      type: Number,
      default: 1
    },
    minDate: {
      type: Date,
      default: () => new Date(currentYear - 10, 0, 1),
      validator: isDate
    },
    maxDate: {
      type: Date,
      default: () => new Date(currentYear + 10, 11, 31),
      validator: isDate
    },
    formatter: {
      type: Function as PropType<Formatter>,
      default: null
    },
    // 是否开启3D效果
    threeDimensional: {
      type: Boolean,
      default: true
    },
    // 惯性滚动 时长
    swipeDuration: {
      type: [Number, String],
      default: 1000
    },
    filter: Function as PropType<Filter>,
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
    }
  },
  emits: ['click', 'cancel', 'change', 'confirm', 'update:modelValue'],

  setup(props, { emit }) {
    const state = reactive({
      currentDate: new Date(),
      title: props.title,
      selectedValue: [] as Array<any>
    });
    const formatValue = (value: Date) => {
      if (!isDate(value)) {
        value = props.minDate;
      }
      let timestmp = Math.max(value.getTime(), props.minDate.getTime());
      timestmp = Math.min(timestmp, props.maxDate.getTime());

      return new Date(timestmp);
    };

    function getMonthEndDay(year: number, month: number): number {
      return 32 - new Date(year, month - 1, 32).getDate();
    }
    const getBoundary = (type: string, value: Date) => {
      const boundary = type == 'min' ? props.minDate : props.maxDate;
      const year = boundary.getFullYear();
      let month = 1;
      let date = 1;
      let hour = 0;
      let minute = 0;

      if (type === 'max') {
        month = 12;
        date = getMonthEndDay(value.getFullYear(), value.getMonth() + 1);
        hour = 23;
        minute = 59;
      }
      const seconds = minute;
      if (value.getFullYear() === year) {
        month = boundary.getMonth() + 1;
        if (value.getMonth() + 1 === month) {
          date = boundary.getDate();
          if (value.getDate() === date) {
            hour = boundary.getHours();
            if (value.getHours() === hour) {
              minute = boundary.getMinutes();
            }
          }
        }
      }
      return {
        [`${type}Year`]: year,
        [`${type}Month`]: month,
        [`${type}Date`]: date,
        [`${type}Hour`]: hour,
        [`${type}Minute`]: minute,
        [`${type}Seconds`]: seconds
      };
    };

    const ranges = computed(() => {
      const { maxYear, maxDate, maxMonth, maxHour, maxMinute, maxSeconds } = getBoundary('max', state.currentDate);

      const { minYear, minDate, minMonth, minHour, minMinute, minSeconds } = getBoundary('min', state.currentDate);

      let result = [
        {
          type: 'year',
          range: [minYear, maxYear]
        },
        {
          type: 'month',
          range: [minMonth, maxMonth]
        },
        {
          type: 'day',
          range: [minDate, maxDate]
        },
        {
          type: 'hour',
          range: [minHour, maxHour]
        },
        {
          type: 'minute',
          range: [minMinute, maxMinute]
        },
        {
          type: 'seconds',
          range: [minSeconds, maxSeconds]
        }
      ];
      return generateList(result);
    });

    const columns = computed(() => {
      const val = ranges.value.map((res, columnIndex) => {
        return generateValue(res.range[0], res.range[1], getDateIndex(res.type), res.type, columnIndex);
      });
      return val;
    });

    const changeHandler = ({
      columnIndex,
      selectedValue,
      selectedOptions
    }: {
      columnIndex: number;
      selectedValue: (string | number)[];
      selectedOptions: PickerOption[];
    }) => {
      if (['date', 'datetime', 'datehour', 'month-day', 'year-month'].includes(props.type)) {
        let formatDate: (number | string)[] = [];
        selectedValue.forEach((item) => {
          formatDate.push(item);
        });
        if (props.type == 'month-day' && formatDate.length < 3) {
          formatDate.unshift(new Date(state.currentDate || props.minDate || props.maxDate).getFullYear());
        }
        if (props.type == 'year-month' && formatDate.length < 3) {
          formatDate.push(new Date(state.currentDate || props.minDate || props.maxDate).getDate());
        }

        const year = Number(formatDate[0]);
        const month = Number(formatDate[1]) - 1;
        const day = Math.min(Number(formatDate[2]), getMonthEndDay(Number(formatDate[0]), Number(formatDate[1])));
        let date: Date | null = null;
        if (props.type === 'date' || props.type === 'month-day' || props.type === 'year-month') {
          date = new Date(year, month, day);
        } else if (props.type === 'datetime') {
          date = new Date(year, month, day, Number(formatDate[3]), Number(formatDate[4]));
        } else if (props.type === 'datehour') {
          date = new Date(year, month, day, Number(formatDate[3]));
        }
        state.currentDate = formatValue(date as Date);
      }
      emit('change', { columnIndex, selectedValue, selectedOptions });
    };

    const formatterOption = (type: string, value: string | number) => {
      const { formatter, isShowChinese } = props;
      let fOption = null;
      if (formatter) {
        fOption = formatter(type, { text: padZero(value, 2), value: padZero(value, 2) });
      } else {
        const padMin = padZero(value, 2);
        const fatter = isShowChinese ? zhCNType[type] : '';
        fOption = { text: padMin + fatter, value: padMin };
      }

      return fOption;
    };

    // min 最小值  max 最大值  val  当前显示的值   type 类型（year、month、day、time）
    const generateValue = (min: number, max: number, val: number | string, type: string, columnIndex: number) => {
      const arr: Array<PickerOption> = [];
      let index = 0;
      while (min <= max) {
        arr.push(formatterOption(type, min));

        if (type === 'minute') {
          min += props.minuteStep;
        } else {
          min++;
        }

        if (min <= val) {
          index++;
        }
      }
      (state.selectedValue as any)[columnIndex] = arr[index].value;
      return props.filter ? props.filter(type, arr) : arr;
    };

    const getDateIndex = (type: string) => {
      if (type === 'year') {
        return state.currentDate.getFullYear();
      } else if (type === 'month') {
        return state.currentDate.getMonth() + 1;
      } else if (type === 'day') {
        return state.currentDate.getDate();
      } else if (type === 'hour') {
        return state.currentDate.getHours();
      } else if (type === 'minute') {
        return state.currentDate.getMinutes();
      } else if (type === 'seconds') {
        return state.currentDate.getSeconds();
      }
      return 0;
    };

    const closeHandler = (val: any) => {
      emit('cancel', val);
    };

    const confirm = (val: any) => {
      emit('confirm', val);
    };

    const generateList = (list: Array<any>) => {
      switch (props.type) {
        case 'date':
          list = list.slice(0, 3);
          break;
        case 'datetime':
          list = list.slice(0, 5);
          break;
        case 'time':
          list = list.slice(3, 6);
          break;
        case 'year-month':
          list = list.slice(0, 2);
          break;
        case 'month-day':
          list = list.slice(1, 3);
          break;
        case 'datehour':
          list = list.slice(0, 4);
          break;
        case 'hour-minute':
          list = list.slice(3, 5);
          break;
      }
      return list;
    };

    const getSelectedValue = (time: Date) => {
      const res = [
        time.getFullYear(),
        time.getMonth() + 1,
        time.getDate(),
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
      ];
      return generateList(res.map((i) => String(i)));
    };

    onBeforeMount(() => {
      state.currentDate = formatValue(props.modelValue);
    });

    watch(
      () => props.modelValue,
      (value) => {
        const newValues = formatValue(value);
        const isSameValue = JSON.stringify(newValues) === JSON.stringify(state.currentDate);
        if (!isSameValue) {
          state.currentDate = newValues;
          state.selectedValue = getSelectedValue(newValues);
        }
      }
    );

    watch(
      () => state.currentDate,
      (newValues) => {
        const isSameValue = JSON.stringify(newValues) === JSON.stringify(props.modelValue);
        if (!isSameValue) {
          emit('update:modelValue', newValues);
        }
      }
    );

    watch(
      () => props.title,
      (val) => {
        state.title = val;
      }
    );

    return {
      ...toRefs(state),
      changeHandler,
      closeHandler,
      confirm,
      columns
    };
  }
});
</script>
