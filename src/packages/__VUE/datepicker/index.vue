<template>
  <nut-picker
    v-model="selectedValue"
    :visible="show"
    :okText="okText"
    :cancelText="cancelText"
    @close="closeHandler"
    :columns="columns"
    @change="changeHandler"
    :title="title"
    @confirm="confirm"
    :isWrapTeleport="isWrapTeleport"
  ></nut-picker>
</template>
<script lang="ts">
import { toRefs, watch, computed, reactive, onMounted } from 'vue';
import picker from '../picker/index.vue';
import { popupProps } from '../popup/index.vue';
import { PickerOption } from '../picker/types';
import { createComponent } from '../../utils/create';
const { componentName, create } = createComponent('datepicker');

const currentYear = new Date().getFullYear();
function isDate(val: Date): val is Date {
  return Object.prototype.toString.call(val) === '[object Date]' && !isNaN(val.getTime());
}

const zhCNType = {
  day: '日',
  year: '年',
  month: '月',
  hour: '时',
  minute: '分',
  seconds: '秒'
};
export default create({
  components: {
    [picker.name]: picker
  },
  props: {
    ...popupProps,
    modelValue: null,
    title: {
      type: String,
      default: ''
    },
    okText: {
      type: String,
      default: '确定'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    type: {
      type: String,
      default: 'date'
    },
    isShowChinese: {
      type: Boolean,
      default: true
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
    }
  },
  emits: ['click', 'update:visible', 'confirm', 'update:moduleValue'],

  setup(props, { emit }) {
    const state = reactive({
      show: false,
      currentDate: new Date(),
      title: props.title,
      selectedValue: []
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
      const boundary = props[`${type}Date`];
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

      switch (props.type) {
        case 'date':
          result = result.slice(0, 3);
          break;
        case 'datetime':
          result = result.slice(0, 5);
          break;
        case 'time':
          result = result.slice(3, 6);
          break;
        case 'month-day':
          result = result.slice(1, 3);
          break;
        case 'datehour':
          result = result.slice(0, 4);
          break;
      }
      return result;
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
      console.log('切换', columnIndex, selectedValue, selectedOptions);

      if (['date', 'datetime'].includes(props.type)) {
        let formatDate = [];
        formatDate = selectedValue;
        let date: Date;
        if (props.type === 'date') {
          state.currentDate = formatValue(
            new Date(
              formatDate[0],
              formatDate[1] - 1,
              Math.min(formatDate[2], getMonthEndDay(formatDate[0], formatDate[1]))
            )
          );
        } else if (props.type === 'datetime') {
          console.log(formatDate);
          state.currentDate = formatValue(
            new Date(
              formatDate[0],
              formatDate[1] - 1,
              Math.min(formatDate[2], getMonthEndDay(formatDate[0], formatDate[1])),
              formatDate[3],
              formatDate[4]
            )
          );
        }
      }
    };

    // min 最小值  max 最大值  val  当前显示的值   type 类型（year、month、day、time）
    const generateValue = (min: number, max: number, val: number | string, type: string, columnIndex: number) => {
      // if (!(max > min)) return;
      const arr: Array<PickerOption> = [];
      let index = 0;
      let selectedValues = [];
      while (min <= max) {
        if (props.isShowChinese) {
          arr.push({ text: min + zhCNType[type], value: min });
        } else {
          arr.push({ text: min, value: min });
        }

        if (type === 'minute') {
          min += props.minuteStep;
        } else {
          min++;
        }

        if (min <= val) {
          index++;
        }
      }
      state.selectedValue[columnIndex] = arr[index].value;
      // return { values: arr, defaultIndex: index };
      return arr;
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

    const handleClick = (event: Event) => {
      emit('click', event);
    };

    const closeHandler = () => {
      emit('update:visible', false);
    };

    const confirm = (val: Event) => {
      emit('update:visible', false);
      emit('confirm', val);
    };

    onMounted(() => {
      state.currentDate = formatValue(props.modelValue);
    });

    watch(
      () => props.title,
      (val) => {
        state.title = val;
      }
    );

    watch(
      () => props.visible,
      (val) => {
        state.show = val;
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
