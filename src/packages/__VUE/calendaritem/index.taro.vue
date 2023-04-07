<template>
  <view
    class="nut-calendar"
    :class="{
      'nut-calendar--nopop': !poppable,
      'nut-calendar--nofooter': isAutoBackFill
    }"
  >
    <!-- header -->
    <view class="nut-calendar__header">
      <view class="nut-calendar__header-title" v-if="showTitle">{{ title || translate('title') }}</view>
      <view class="nut-calendar__header-slot" v-if="showTopBtn">
        <slot name="btn"> </slot>
      </view>
      <view class="nut-calendar__header-subtitle" v-if="showSubTitle">{{ yearMonthTitle }}</view>
      <view class="nut-calendar__weekdays">
        <view class="nut-calendar__weekday" v-for="(item, index) of weeks" :key="index">{{ item }}</view>
      </view>
    </view>
    <!-- content-->
    <scroll-view
      :scroll-top="scrollTop"
      :scroll-y="true"
      class="nut-calendar__content"
      @scroll="mothsViewScroll"
      :scroll-with-animation="scrollWithAnimation"
      ref="months"
    >
      <view class="nut-calendar__panel" :style="{ height: containerHeight }">
        <view class="nut-calendar__body" :style="{ transform: `translateY(${translateY}px)` }">
          <view class="nut-calendar__month" v-for="(month, index) of compConthsDatas" :key="index">
            <view class="nut-calendar__month-title">{{ month.title }}</view>
            <view class="nut-calendar__days">
              <view class="nut-calendar__days-item" :class="type === 'range' ? 'nut-calendar__days-item--range' : ''">
                <template v-for="(day, i) of month.monthData" :key="i">
                  <view class="nut-calendar__day" :class="getClass(day, month)" @click="chooseDay(day, month)">
                    <!-- 日期显示slot -->
                    <view class="nut-calendar__day-value">
                      <slot name="day" :date="day.type == 'curr' ? day : ''">
                        {{ day.type == 'curr' ? day.day : '' }}
                      </slot>
                    </view>
                    <view class="nut-calendar__day-tips nut-calendar__day-tips--top" v-if="topInfo">
                      <slot name="top-info" :date="day.type == 'curr' ? day : ''"> </slot>
                    </view>
                    <view class="nut-calendar__day-tips nut-calendar__day-tips--bottom" v-if="bottomInfo">
                      <slot name="bottom-info" :date="day.type == 'curr' ? day : ''"> </slot>
                    </view>
                    <view class="nut-calendar__day-tips--curr" v-if="!bottomInfo && showToday && isCurrDay(day)">
                      {{ translate('today') }}
                    </view>
                    <view :class="{ 'nut-calendar__day-tips--top': rangeTip(), 'nut-calendar__day-tip': true }">
                      {{ isStartTip(day, month) ? startText || translate('start') : '' }}
                    </view>
                    <view class="nut-calendar__day-tip" v-if="isEndTip(day, month)">{{
                      endText || translate('end')
                    }}</view>
                  </view>
                </template>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- footer-->
    <view class="nut-calendar__footer" v-if="poppable && !isAutoBackFill">
      <view class="nut-calendar__confirm" @click="confirm">{{ confirmText || translate('confirm') }}</view>
    </view>
  </view>
</template>
<script lang="ts">
import { reactive, ref, watch, toRefs, computed, onMounted } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { create, translate } = createComponent('calendar-item');
import Taro from '@tarojs/taro';
import Utils from '@/packages/utils/date';
import { useExpose } from '@/packages/utils/useExpose/index';
import requestAniFrame from '@/packages/utils/raf';
import { MonthInfo, Day, CalendarTaroState } from './type';
import { isArray } from '@/packages/utils/util';
const TARO_ENV = Taro.getEnv();

export default create({
  props: {
    type: {
      type: String,
      default: 'one'
    },
    isAutoBackFill: {
      type: Boolean,
      default: false
    },
    toDateAnimation: {
      type: Boolean,
      default: true
    },
    poppable: {
      type: Boolean,
      default: true
    },
    showTitle: {
      type: Boolean,
      default: true
    },
    showSubTitle: {
      type: Boolean,
      default: true
    },
    showToday: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: ''
    },
    confirmText: {
      type: String,
      default: ''
    },
    startText: {
      type: String,
      default: ''
    },
    endText: {
      type: String,
      default: ''
    },
    defaultValue: {
      type: [String, Array],
      default: null,
      valid: (value: string | string[]) => value
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    },
    firstDayOfWeek: {
      type: Number,
      default: 0
    }
  },
  emits: ['choose', 'update', 'close', 'select'],

  setup(props, { emit, slots }) {
    // 新增：自定义周起始日
    const weekdays = translate('weekdays');
    const weeks = ref([...weekdays.slice(props.firstDayOfWeek, 7), ...weekdays.slice(0, props.firstDayOfWeek)]);
    // element refs
    const scalePx = ref(2);
    const viewHeight = ref(0);
    const scrollWithAnimation = ref(false);
    const months = ref<null | HTMLElement>(null);
    const showTopBtn = computed(() => {
      return slots.btn;
    });
    const topInfo = computed(() => {
      return slots['top-info'];
    });
    const bottomInfo = computed(() => {
      return slots['bottom-info'];
    });
    // state
    const state: CalendarTaroState = reactive({
      yearMonthTitle: '',
      defaultRange: [0, 1],
      compConthsDatas: [],
      containerHeight: '100%',
      currDate: '',
      propStartDate: '',
      propEndDate: '',
      unLoadPrev: false,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: 'nut-calendar__day',
      startData: '',
      endData: '',
      isRange: props.type === 'range',
      timer: 0,
      currentIndex: 0,
      avgHeight: 0,
      scrollTop: 0,
      monthsNum: 0
    });
    // 日期转化成数组
    const splitDate = (date: string) => {
      return date.split('-');
    };
    // 判断是否为开始时间
    const isStart = (currDate: string) => {
      return Utils.isEqual(state.currDate[0], currDate);
    };
    // 判断是否为结束时间
    const isEnd = (currDate: string) => {
      return Utils.isEqual(state.currDate[1], currDate);
    };
    const isMultiple = (currDate: string) => {
      if (isArray(state.currDate) && state.currDate.length > 0) {
        return state.currDate.some((item: string) => {
          return Utils.isEqual(item, currDate);
        });
      } else {
        return false;
      }
    };
    // 获取当前数据
    const getCurrDate = (day: Day, month: MonthInfo) => {
      return month.curData[0] + '-' + month.curData[1] + '-' + Utils.getNumTwoBit(+day.day);
    };

    // 获取样式
    const getClass = (day: Day, month: MonthInfo) => {
      const currDate = getCurrDate(day, month);
      const { type } = props;
      if (day.type == 'curr') {
        if (
          Utils.isEqual(state.currDate as string, currDate) ||
          ((type == 'range' || type == 'week') && (isStart(currDate) || isEnd(currDate))) ||
          (type == 'multiple' && isMultiple(currDate))
        ) {
          return `${state.dayPrefix}--active`;
        } else if (
          (state.propStartDate && Utils.compareDate(currDate, state.propStartDate)) ||
          (state.propEndDate && Utils.compareDate(state.propEndDate, currDate))
        ) {
          return `${state.dayPrefix}--disabled`;
        } else if (
          (type == 'range' || type == 'week') &&
          Array.isArray(state.currDate) &&
          Object.values(state.currDate).length == 2 &&
          Utils.compareDate(state.currDate[0], currDate) &&
          Utils.compareDate(currDate, state.currDate[1])
        ) {
          return `${state.dayPrefix}--choose`;
        } else {
          return null;
        }
      } else {
        return `${state.dayPrefix}--disabled`;
      }
    };

    const confirm = () => {
      const { type } = props;
      if ((type == 'range' && state.chooseData.length == 2) || type != 'range') {
        // let chooseData = state.chooseData.slice(0);
        // emit('choose', chooseData);
        let selectData: any = state.chooseData.slice(0);
        if (type == 'week') {
          selectData = {
            weekDate: [handleWeekDate(state.chooseData[0] as string[]), handleWeekDate(state.chooseData[1] as string[])]
          };
        }
        emit('choose', selectData);
        if (props.poppable) {
          emit('update');
        }
      }
    };

    // 选中数据
    const chooseDay = (day: Day, month: MonthInfo, isFirst = false) => {
      if (getClass(day, month) != `${state.dayPrefix}--disabled`) {
        const { type } = props;
        let [y, m] = month.curData;
        let days = [...month.curData];
        days[2] = Utils.getNumTwoBit(Number(day.day));
        days[3] = `${days[0]}-${days[1]}-${days[2]}`;
        days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
        if (type == 'multiple') {
          if (isArray(state.currDate) && state.currDate.length > 0) {
            let hasIndex = NaN;
            state.currDate.forEach((item: string, index: number) => {
              if (item == days[3]) {
                hasIndex = index;
              }
            });
            if (isFirst) {
              state.chooseData.push([...days]);
            } else {
              if (!isNaN(hasIndex)) {
                state.currDate.splice(hasIndex, 1);
                state.chooseData.splice(hasIndex, 1);
              } else {
                state.currDate.push(days[3]);
                state.chooseData.push([...days]);
              }
            }
          } else {
            state.currDate = [days[3]];
            state.chooseData = [[...days]];
          }
        } else if (type == 'range') {
          let curDataLength = Object.values(state.currDate).length;
          if (curDataLength == 2 || curDataLength == 0) {
            state.currDate = [days[3]];
          } else {
            if (Utils.compareDate(state.currDate[0], days[3])) {
              Array.isArray(state.currDate) && state.currDate.push(days[3]);
            } else {
              Array.isArray(state.currDate) && state.currDate.unshift(days[3]);
            }
          }

          if (state.chooseData.length == 2 || !state.chooseData.length) {
            state.chooseData = [[...days]];
          } else {
            if (Utils.compareDate(state.chooseData[0][3], days[3])) {
              state.chooseData = [...state.chooseData, [...days]];
            } else {
              state.chooseData = [[...days], ...state.chooseData];
            }
          }
        } else if (type == 'week') {
          let weekArr = Utils.getWeekDate(y, m, day.day, props.firstDayOfWeek);
          if (state.propStartDate && Utils.compareDate(weekArr[0], state.propStartDate)) {
            weekArr.splice(0, 1, state.propStartDate);
          }
          if (state.propEndDate && Utils.compareDate(state.propEndDate, weekArr[1])) {
            weekArr.splice(1, 1, state.propEndDate);
          }
          state.currDate = weekArr;
          state.chooseData = [Utils.formatResultDate(weekArr[0]), Utils.formatResultDate(weekArr[1])];
        } else {
          state.currDate = days[3];
          state.chooseData = [...days];
        }

        if (!isFirst) {
          let selectData: any = state.chooseData;
          if (type == 'week') {
            selectData = {
              weekDate: [
                handleWeekDate(state.chooseData[0] as string[]),
                handleWeekDate(state.chooseData[1] as string[])
              ]
            };
          }
          // 点击日期 触发
          emit('select', selectData);
          if (props.isAutoBackFill || !props.poppable) {
            confirm();
          }
        }
      }
    };
    const handleWeekDate = (weekDate: string[]) => {
      let [y, m, d] = weekDate;
      let obj = {
        date: weekDate,
        monthWeekNum: Utils.getMonthWeek(y, m, d, props.firstDayOfWeek),
        yearWeekNum: Utils.getYearWeek(y, m, d, props.firstDayOfWeek)
      };
      return obj;
    };
    // 获取当前月数据
    const getCurrData = (type: string) => {
      const monthData = type == 'prev' ? state.monthsData[0] : state.monthsData[state.monthsData.length - 1];
      let year = parseInt(monthData.curData[0]);
      let month = parseInt(monthData.curData[1].toString().replace(/^0/, ''));
      switch (type) {
        case 'prev':
          month == 1 && (year -= 1);
          month = month == 1 ? 12 : --month;
          break;
        case 'next':
          month == 12 && (year += 1);
          month = month == 12 ? 1 : ++month;
          break;
      }
      return [year + '', Utils.getNumTwoBit(month), Utils.getMonthDays(String(year), String(month)) + ''];
    };

    // 获取日期状态
    const getDaysStatus = (days: number, type: string, dateInfo: { year: string; month: string }) => {
      // 修复：当某个月的1号是周日时，月份下方会空出来一行
      let { year, month } = dateInfo;
      if (type == 'prev' && days >= 7) {
        days -= 7;
      }
      return Array.from(Array(days), (v, k) => {
        return {
          day: String(k + 1),
          type: type,
          year,
          month
        };
      });
    };
    // 获取上一个月的最后一周天数，填充当月空白
    const getPreDaysStatus = (
      days: number,
      type: string,
      dateInfo: { year: string; month: string },
      preCurrMonthDays: number
    ) => {
      // 新增：自定义周起始日}, preCurrMonthDays: number) => {
      // 新增：自定义周起始日
      days = days - props.firstDayOfWeek;
      // 修复：当某个月的1号是周日时，月份下方会空出来一行
      let { year, month } = dateInfo;
      if (type == 'prev' && days >= 7) {
        days -= 7;
      }
      let months = Array.from(Array(preCurrMonthDays), (v, k) => {
        return {
          day: String(k + 1),
          type: type,
          year,
          month
        };
      });
      return months.slice(preCurrMonthDays - days);
    };
    // 获取月数据
    const getMonth = (curData: string[], type: string) => {
      // 一号为周几
      const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1]);

      let preMonth = +curData[1] - 1;
      let preYear = +curData[0];
      if (preMonth <= 0) {
        preMonth = 12;
        preYear += 1;
      }
      //当月天数与上个月天数
      const currMonthDays = Utils.getMonthDays(curData[0], curData[1]);
      const preCurrMonthDays = Utils.getMonthDays(preYear + '', preMonth + '');

      const title = {
        year: curData[0],
        month: curData[1]
      };
      const monthInfo: MonthInfo = {
        curData: curData,
        title: translate('monthTitle', title.year, title.month),
        monthData: [
          ...(getPreDaysStatus(
            preMonthDays,
            'prev',
            { month: String(preMonth), year: String(preYear) },
            preCurrMonthDays
          ) as Day[]),
          ...(getDaysStatus(currMonthDays, 'curr', title) as Day[])
        ],
        cssHeight: 0,
        cssScrollHeight: 0
      };
      let titleHeight, itemHeight;
      if (TARO_ENV === Taro.ENV_TYPE.WEB) {
        titleHeight = 46 * scalePx.value + 16 * scalePx.value * 2;
        itemHeight = 128 * scalePx.value;
      } else {
        titleHeight = Math.floor(46 * scalePx.value) + Math.floor(16 * scalePx.value) * 2;
        itemHeight = Math.floor(128 * scalePx.value);
      }
      monthInfo.cssHeight = titleHeight + (monthInfo.monthData.length > 35 ? itemHeight * 6 : itemHeight * 5);

      let cssScrollHeight = 0;

      if (state.monthsData.length > 0) {
        cssScrollHeight =
          state.monthsData[state.monthsData.length - 1].cssScrollHeight +
          state.monthsData[state.monthsData.length - 1].cssHeight;
      }
      monthInfo.cssScrollHeight = cssScrollHeight;
      if (type == 'next') {
        // 判断当前日期 是否大于 最后一天
        if (
          !state.endData ||
          !Utils.compareDate(
            `${state.endData[0]}-${state.endData[1]}-${Utils.getMonthDays(state.endData[0], state.endData[1])}`,
            `${curData[0]}-${curData[1]}-${curData[2]}`
          )
        ) {
          state.monthsData.push(monthInfo);
        }
      } else {
        // 判断当前日期 是否小于 第一天
        if (
          !state.startData ||
          !Utils.compareDate(
            `${curData[0]}-${curData[1]}-${curData[2]}`,
            `${state.startData[0]}-${state.startData[1]}-01`
          )
        ) {
          state.monthsData.unshift(monthInfo);
        } else {
          state.unLoadPrev = true;
        }
      }
    };

    // 初始化数据
    const initData = () => {
      // 初始化开始结束数据
      let propStartDate = props.startDate ? props.startDate : Utils.getDay(0);
      let propEndDate = props.endDate ? props.endDate : Utils.getDay(365);
      state.propStartDate = propStartDate;
      state.propEndDate = propEndDate;
      state.startData = splitDate(propStartDate);
      state.endData = splitDate(propEndDate);

      // 根据是否存在默认时间，初始化当前日期,
      if (props.defaultValue || (Array.isArray(props.defaultValue) && props.defaultValue.length > 0)) {
        state.currDate =
          props.type != 'one' ? ([...props.defaultValue] as string[]) : (props.defaultValue as string | string[]);
      }
      // 判断时间范围内存在多少个月
      const startDate = {
        year: Number(state.startData[0]),
        month: Number(state.startData[1])
      };
      const endDate = {
        year: Number(state.endData[0]),
        month: Number(state.endData[1])
      };
      let monthsNum = endDate.month - startDate.month;
      if (endDate.year - startDate.year > 0) {
        monthsNum = monthsNum + 12 * (endDate.year - startDate.year);
      }
      if (monthsNum <= 0) {
        monthsNum = 1;
      }
      // 设置月份数据
      getMonth(state.startData, 'next');

      let i = 1;
      do {
        getMonth(getCurrData('next'), 'next');
      } while (i++ < monthsNum);
      state.monthsNum = monthsNum;

      // 日期转化为数组，限制初始日期。判断时间范围
      if (props.type == 'range' && Array.isArray(state.currDate)) {
        if (state.currDate.length > 0) {
          if (propStartDate && Utils.compareDate(state.currDate[0], propStartDate)) {
            state.currDate.splice(0, 1, propStartDate);
          }
          if (propEndDate && Utils.compareDate(propEndDate, state.currDate[1])) {
            state.currDate.splice(1, 1, propEndDate);
          }
          state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
        }
      } else if (props.type == 'multiple' && Array.isArray(state.currDate)) {
        if (state.currDate.length > 0) {
          let defaultArr: string[] = [];
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let obj: any = {};
          state.currDate.forEach((item: string) => {
            if (
              propStartDate &&
              !Utils.compareDate(item, propStartDate) &&
              propEndDate &&
              !Utils.compareDate(propEndDate, item)
            ) {
              if (!Object.hasOwnProperty.call(obj, item)) {
                defaultArr.push(item);
                obj[item] = item;
              }
            }
          });
          state.currDate = [...defaultArr];
          state.defaultData = [...splitDate(defaultArr[0])];
        }
      } else if (props.type == 'week' && Array.isArray(state.currDate)) {
        if (state.currDate.length > 0) {
          let [y, m, d] = splitDate(state.currDate[0]);
          let weekArr = Utils.getWeekDate(y, m, d, props.firstDayOfWeek);
          state.currDate = weekArr;
          if (propStartDate && Utils.compareDate(state.currDate[0], propStartDate)) {
            state.currDate.splice(0, 1, propStartDate);
          }
          if (propEndDate && Utils.compareDate(propEndDate, state.currDate[1])) {
            state.currDate.splice(1, 1, propEndDate);
          }
          state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
        }
      } else {
        if (state.currDate) {
          if (propStartDate && Utils.compareDate(state.currDate as string, propStartDate)) {
            state.currDate = propStartDate;
          } else if (propEndDate && !Utils.compareDate(state.currDate as string, propEndDate)) {
            state.currDate = propEndDate;
          }
          state.defaultData = [...splitDate(state.currDate as string)];
        }
      }

      // 设置默认可见区域
      let current = 0;
      let lastCurrent = 0;
      if (state.defaultData.length > 0) {
        state.monthsData.forEach((item, index) => {
          if (item.title == translate('monthTitle', state.defaultData[0], state.defaultData[1])) {
            current = index;
          }
          if (props.type == 'range' || props.type == 'week') {
            if (item.title == translate('monthTitle', state.defaultData[3], state.defaultData[4])) {
              lastCurrent = index;
            }
          }
        });
      }
      setDefaultRange(monthsNum, current);
      state.currentIndex = current;
      state.yearMonthTitle = state.monthsData[state.currentIndex].title;
      if (state.defaultData.length > 0) {
        // 设置当前选中日期
        if (state.isRange) {
          chooseDay({ day: state.defaultData[2], type: 'curr' }, state.monthsData[state.currentIndex], true);
          chooseDay({ day: state.defaultData[5], type: 'curr' }, state.monthsData[lastCurrent], true);
        } else if (props.type == 'week') {
          chooseDay({ day: state.defaultData[2], type: 'curr' }, state.monthsData[state.currentIndex], true);
        } else if (props.type == 'multiple') {
          [...state.currDate].forEach((item: string) => {
            let dateArr = splitDate(item);
            let current = state.currentIndex;
            state.monthsData.forEach((item, index) => {
              if (item.title == translate('monthTitle', dateArr[0], dateArr[1])) {
                current = index;
              }
            });
            chooseDay({ day: dateArr[2], type: 'curr' }, state.monthsData[current], true);
          });
        } else {
          chooseDay({ day: state.defaultData[2], type: 'curr' }, state.monthsData[state.currentIndex], true);
        }
      }

      let lastItem = state.monthsData[state.monthsData.length - 1];
      let containerHeight = lastItem.cssHeight + lastItem.cssScrollHeight;

      state.containerHeight = `${containerHeight}px`;
      state.scrollTop = Math.ceil(state.monthsData[state.currentIndex].cssScrollHeight);
      state.avgHeight = Math.floor(containerHeight / (monthsNum + 1));

      if (months?.value) {
        viewHeight.value = months.value.clientHeight;
      }
    };
    const scrollToDate = (date: string) => {
      if (Utils.compareDate(date, state.propStartDate)) {
        date = state.propStartDate;
      } else if (!Utils.compareDate(date, state.propEndDate)) {
        date = state.propEndDate;
      }
      let dateArr = splitDate(date);
      state.monthsData.forEach((item, index) => {
        if (item.title == translate('monthTitle', dateArr[0], dateArr[1])) {
          // scrollTop 不会实时变更。当再次赋值时，scrollTop无变化时，不会触发滚动
          state.scrollTop += 1;
          scrollWithAnimation.value = props.toDateAnimation;
          requestAniFrame(() => {
            setTimeout(() => {
              state.scrollTop = state.monthsData[index].cssScrollHeight;
              setTimeout(() => {
                scrollWithAnimation.value = false;
              }, 200);
            }, 10);
          });
        }
      });
    };
    const initPosition = () => {
      state.scrollTop = Math.ceil(state.monthsData[state.currentIndex].cssScrollHeight);
    };
    useExpose({
      scrollToDate,
      initPosition
    });
    const setDefaultRange = (monthsNum: number, current: number) => {
      let rangeArr: number[] = [];
      if (monthsNum >= 3) {
        if (current > 0 && current < monthsNum) {
          rangeArr = [current - 1, current + 3];
        } else if (current == 0) {
          rangeArr = [current, current + 4];
        } else if (current == monthsNum) {
          rangeArr = [current - 2, current + 2];
        }
      } else {
        rangeArr = [0, monthsNum + 2];
      }
      if (JSON.stringify(state.defaultRange) !== JSON.stringify(rangeArr)) {
        state.defaultRange[0] = rangeArr[0];
        state.defaultRange[1] = rangeArr[1];
        state.compConthsDatas = state.monthsData.slice(rangeArr[0], rangeArr[1]);
      }
      let defaultScrollTop = state.monthsData[state.defaultRange[0]].cssScrollHeight;
      state.translateY = defaultScrollTop;
    };
    // 区间选择&&当前月&&选中态
    const isActive = (day: Day, month: MonthInfo) => {
      return (
        (props.type == 'range' || props.type == 'week') &&
        day.type == 'curr' &&
        getClass(day, month) == 'nut-calendar__day--active'
      );
    };

    // 是否有开始提示
    const isStartTip = (day: Day, month: MonthInfo) => {
      return isActive(day, month) && isStart(getCurrDate(day, month));
    };

    // 是否有结束提示
    const isEndTip = (day: Day, month: MonthInfo) => {
      if (state.currDate.length >= 2 && isEnd(getCurrDate(day, month))) {
        return isActive(day, month);
      }
      return false;
    };
    // 开始结束时间是否相等
    const rangeTip = () => {
      if (state.currDate.length >= 2) {
        return Utils.isEqual(state.currDate[0], state.currDate[1]);
      }
    };
    // 是否有是当前日期
    const isCurrDay = (dateInfo: Day) => {
      const date = `${dateInfo.year}-${dateInfo.month}-${
        Number(dateInfo.day) < 10 ? '0' + dateInfo.day : dateInfo.day
      }`;
      return Utils.isEqual(date, Utils.date2Str(new Date()));
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const mothsViewScroll = (e: any) => {
      if (state.monthsData.length <= 1) {
        return;
      }
      const currentScrollTop = e.target.scrollTop;
      let current = Math.floor(currentScrollTop / state.avgHeight);
      if (current == 0) {
        if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
          current += 1;
        }
      } else if (current > 0 && current < state.monthsNum - 1) {
        if (currentScrollTop >= state.monthsData[current + 1].cssScrollHeight) {
          current += 1;
        }
        if (currentScrollTop < state.monthsData[current].cssScrollHeight) {
          current -= 1;
        }
      }
      if (state.currentIndex !== current) {
        state.currentIndex = current;
        setDefaultRange(state.monthsNum, current);
      }

      state.yearMonthTitle = state.monthsData[current].title;
    };
    // 重新渲染
    const resetRender = () => {
      state.chooseData.splice(0);
      state.monthsData.splice(0);
      initData();
    };
    onMounted(() => {
      // 初始化数据
      Taro.getSystemInfo({
        success(res) {
          let scale = 2;
          let toFixed = 3;
          if (TARO_ENV === Taro.ENV_TYPE.WEB) {
            toFixed = 5;
            let fontSize = document.documentElement.style.fontSize;
            scale = Number((Number.parseInt(fontSize) / 40).toFixed(toFixed));
          } else {
            let screenWidth = res.screenWidth;
            scale = Number((screenWidth / 750).toFixed(toFixed));
          }
          scalePx.value = scale;
          initData();
        }
      });
    });

    //监听 默认值更改
    watch(
      () => props.defaultValue,
      (val) => {
        if (val) {
          if (props.poppable) {
            resetRender();
          }
        }
      }
    );

    return {
      weeks,
      showTopBtn,
      topInfo,
      bottomInfo,
      rangeTip,
      mothsViewScroll,
      getClass,
      isStartTip,
      isEndTip,
      chooseDay,
      isCurrDay,
      confirm,
      months,
      ...toRefs(state),
      ...toRefs(props),
      scrollWithAnimation,
      translate
    };
  }
});
</script>
