<template>
  <view-block>
    <nut-picker
      :is-visible="show"
      @close="closeHandler"
      :list-data="columns"
      @change="changeHandler"
      :title="title"
      @confirm="confirm"
    ></nut-picker>
  </view-block>
</template>
<script lang="ts">
import { toRefs, watch, ref, computed } from 'vue';
import picker from '@/packages/picker/index.vue';
import { createComponent } from '@/utils/create';
const { componentName, create } = createComponent('datepicker');
const currentYear = new Date().getFullYear();
function isDate(val: Date): val is Date {
  return (
    Object.prototype.toString.call(val) === '[object Date]' &&
    !isNaN(val.getTime())
  );
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
  children: [picker],
  props: {
    modelValue: null,
    isVisible: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'date'
    },
    isUse12Hours: {
      type: Boolean,
      default: false
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
  components: {},
  emits: ['click', 'close', 'update:isVisible', 'confirm'],

  setup(props, { emit }) {
    const show = ref(false);
    const title = ref(props.title);
    const formatValue = value => {
      if (!isDate(value)) {
        value = props.minDate;
      }

      value = Math.max(value, (props.minDate as any).getTime());
      value = Math.min(value, (props.maxDate as any).getTime());

      return new Date(value);
    };
    const currentDate = ref(formatValue(props.modelValue));
    watch(
      () => props.title,
      val => {
        title.value = val;
      }
    );
    watch(
      () => props.isVisible,
      val => {
        show.value = val;
      }
    );
    function getMonthEndDay(year: number, month: number): number {
      return 32 - new Date(year, month - 1, 32).getDate();
    }
    const getBoundary = (type, value) => {
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
      const {
        maxYear,
        maxDate,
        maxMonth,
        maxHour,
        maxMinute,
        maxSeconds
      } = getBoundary('max', currentDate.value);

      const {
        minYear,
        minDate,
        minMonth,
        minHour,
        minMinute,
        minSeconds
      } = getBoundary('min', currentDate.value);

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
          if (props.isUse12Hours) {
            result = result.slice(3, 5);
          } else {
            result = result.slice(3, 6);
          }
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

    const changeHandler = val => {
      let formatDate = [];
      if (props.isShowChinese) {
        formatDate = val.forEach((res: string) => {
          Number(res.slice(0, res.length - 2));
        });
      } else {
        formatDate = val;
      }
      currentDate.value = formatValue(
        new Date(formatDate[0], formatDate[1] - 1, formatDate[2])
      );
    };
    const generateValue = (
      min: number,
      max: number,
      val: number,
      type: string
    ) => {
      if (!(max > min)) return;
      const arr: Array<number | string> = [];
      let index = 0;
      // let stopAdd = false;
      while (min <= max) {
        if (props.isShowChinese) {
          arr.push(min + zhCNType[type]);
        } else {
          arr.push(min);
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

      return { values: arr, defaultIndex: index };
    };
    const getDateIndex = type => {
      if (type === 'year') {
        return currentDate.value.getFullYear();
      } else if (type === 'month') {
        return currentDate.value.getMonth() + 1;
      } else if (type === 'day') {
        return currentDate.value.getDate();
      } else if (type === 'hour') {
        return currentDate.value.getHours();
      } else if (type === 'minute') {
        return currentDate.value.getMinutes();
      } else if (type === 'seconds') {
        return currentDate.value.getSeconds();
      }
      return 0;
    };
    const columns = computed(() => {
      const val = ranges.value.map(res => {
        return generateValue(
          res.range[0],
          res.range[1],
          getDateIndex(res.type),
          res.type
        );
      });
      if (props.type === 'time' && props.isUse12Hours) {
        val.push({ values: ['上午', '下午'], defaultIndex: 0 });
      }
      return val;
    });
    const handleClick = (event: Event) => {
      emit('click', event);
    };

    return {
      show,
      title,
      changeHandler,
      closeHandler: () => {
        emit('update:isVisible', false);
      },
      confirm: val => {
        emit('update:isVisible', false);
        emit('confirm', val);
      },
      columns
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
