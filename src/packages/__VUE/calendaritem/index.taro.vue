<template>
  <view
    class="nut-calendar nut-calendar-taro"
    :class="{
      'nut-calendar-tile': !poppable,
      'nut-calendar-nofooter': isAutoBackFill
    }"
  >
    <!-- header -->
    <view class="nut-calendar-header" :class="{ 'nut-calendar-header-tile': !poppable }">
      <template v-if="poppable">
        <view class="calendar-title">{{ title }}</view>
        <view class="calendar-curr-month">{{ yearMonthTitle }}</view>
      </template>
      <view class="calendar-weeks" ref="weeksPanel">
        <view class="calendar-week-item" v-for="(item, index) of weeks" :key="index">{{ item }}</view>
      </view>
    </view>
    <!-- content-->
    <scroll-view
      :scroll-top="scrollTop"
      :scroll-y="true"
      class="nut-calendar-content"
      ref="months"
      @scroll="mothsViewScroll"
    >
      <view class="calendar-months-panel" ref="monthsPanel">
        <view class="viewArea" ref="viewArea" :style="{ transform: `translateY(${translateY}px)` }">
          <view class="calendar-month" v-for="(month, index) of compConthsDatas" :key="index" :id="month.title">
            <view class="calendar-month-title">{{ month.title }}</view>
            <view class="calendar-month-con">
              <view class="calendar-month-item" :class="type === 'range' ? 'month-item-range' : ''">
                <template v-for="(day, i) of month.monthData" :key="i">
                  <view class="calendar-month-day" :class="getClass(day, month)" @click="chooseDay(day, month)">
                    <view class="calendar-day">{{ day.type == 'curr' ? day.day : '' }}</view>
                    <view class="calendar-curr-tips" v-if="isCurrDay(month, day.day)">今天</view>
                    <view class="calendar-day-tip" v-if="isStartTip(day, month)">{{ '开始' }}</view>
                    <view class="calendar-day-tip" v-else-if="isEndTip(day, month)">{{ '结束' }}</view>
                  </view>
                </template>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    <!-- footer-->
    <view class="nut-calendar-footer" v-if="poppable && !isAutoBackFill">
      <view class="calendar-confirm-btn" @click="confirm">确定</view>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType, reactive, ref, watch, toRefs, computed, onMounted } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('calendar-item');
import Taro from '@tarojs/taro';
import Utils from '../../utils/date';
import requestAniFrame from '../../utils/raf';

type InputDate = string | string[];
interface CalendarState {
  yearMonthTitle: string;
  currDate: InputDate;
  currentIndex: number;
  unLoadPrev: boolean;
  touchParams: any;
  translateY: number;
  defaultData: InputDate;
  chooseData: any;
  monthsData: any[];
  dayPrefix: string;
  startData: InputDate;
  endData: InputDate;
  isRange: boolean;
  timer: number;
  avgHeight: number;
  monthsNum: number;
  scrollTop: number;
  defaultRange: any[];
  compConthsDatas: any[];
}
interface Day {
  day: string | number;
  type: string;
}

interface MonthInfo {
  curData: string[] | string;
  title: string;
  monthData: Day[];
  cssHeight?: Number;
  cssScrollHeight?: Number;
}

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
    poppable: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '日历选择'
    },
    defaultValue: {
      type: String as PropType<InputDate>,
      default: null
    },
    startDate: {
      type: String,
      default: Utils.getDay(0)
    },
    endDate: {
      type: String,
      default: Utils.getDay(365)
    }
  },
  emits: ['choose', 'update', 'close'],

  setup(props, { emit }) {
    const weeks = ref(['日', '一', '二', '三', '四', '五', '六']);
    // element refs
    const months = ref<null | HTMLElement>(null);
    const monthsPanel = ref<null | HTMLElement>(null);
    const weeksPanel = ref<null | HTMLElement>(null);
    const viewArea = ref<null | HTMLElement>(null);
    const scalePx = ref(2);
    // state
    const state: CalendarState = reactive({
      yearMonthTitle: '',
      defaultRange: [0, 1],
      compConthsDatas: [],
      currDate: '',
      unLoadPrev: false,
      touchParams: {
        startY: 0,
        endY: 0,
        startTime: 0,
        endTime: 0,
        lastY: 0,
        lastTime: 0
      },
      translateY: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: 'calendar-month-day',
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

    const isStart = (currDate: string) => {
      return Utils.isEqual(state.currDate[0], currDate);
    };

    const isEnd = (currDate: string) => {
      return Utils.isEqual(state.currDate[1], currDate);
    };

    // 获取当前数据
    const getCurrDate = (day: Day, month: MonthInfo, isRange?: boolean) => {
      return month.curData[0] + '-' + month.curData[1] + '-' + Utils.getNumTwoBit(+day.day);
      // return isRange
      //   ? month.curData[3] + '-' + month.curData[4] + '-' + Utils.getNumTwoBit(+day.day)
      //   : month.curData[0] + '-' + month.curData[1] + '-' + Utils.getNumTwoBit(+day.day);
    };

    // 获取样式
    const getClass = (day: Day, month: MonthInfo, isRange?: boolean) => {
      const currDate = getCurrDate(day, month, isRange);
      if (day.type == 'curr') {
        if (
          (!state.isRange && Utils.isEqual(state.currDate as string, currDate)) ||
          (state.isRange && (isStart(currDate) || isEnd(currDate)))
        ) {
          return `${state.dayPrefix}-active`;
        } else if (
          (props.startDate && Utils.compareDate(currDate, props.startDate)) ||
          (props.endDate && Utils.compareDate(props.endDate, currDate))
        ) {
          return `${state.dayPrefix}-disabled`;
        } else if (
          state.isRange &&
          Array.isArray(state.currDate) &&
          Object.values(state.currDate).length == 2 &&
          Utils.compareDate(state.currDate[0], currDate) &&
          Utils.compareDate(currDate, state.currDate[1])
        ) {
          return `${state.dayPrefix}-choose`;
        } else {
          return null;
        }
      } else {
        return `${state.dayPrefix}-disabled`;
      }
    };

    const confirm = () => {
      if ((state.isRange && state.chooseData.length == 2) || !state.isRange) {
        emit('choose', state.chooseData);
        if (props.poppable) {
          emit('update');
        }
      }
    };

    // 选中数据
    const chooseDay = (day: Day, month: MonthInfo, isFirst: boolean, isRange?: boolean) => {
      if (getClass(day, month, isRange) != `${state.dayPrefix}-disabled`) {
        let days = [...month.curData];
        // days = isRange ? days.splice(3) : days.splice(0, 3);
        days[2] = typeof day.day == 'number' ? Utils.getNumTwoBit(day.day) : day.day;
        days[3] = `${days[0]}-${days[1]}-${days[2]}`;
        days[4] = Utils.getWhatDay(+days[0], +days[1], +days[2]);
        if (!state.isRange) {
          state.currDate = days[3];
          state.chooseData = [...days];
        } else {
          if (Object.values(state.currDate).length == 2) {
            state.currDate = [days[3]];
          } else {
            if (Utils.compareDate(state.currDate[0], days[3])) {
              Array.isArray(state.currDate) && state.currDate.push(days[3]);
            } else {
              Array.isArray(state.currDate) && state.currDate.unshift(days[3]);
            }
          }
          if (state.chooseData.length == 2 || !state.chooseData.length) {
            state.chooseData = [...days];
          } else {
            if (Utils.compareDate(state.chooseData[3], days[3])) {
              state.chooseData = [[...state.chooseData], [...days]];
            } else {
              state.chooseData = [[...days], [...state.chooseData]];
            }
          }
        }

        if (props.isAutoBackFill && !isFirst) {
          confirm();
        }
      }
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
      return [year, Utils.getNumTwoBit(month), Utils.getMonthDays(String(year), String(month))];
    };

    // 获取日期状态
    const getDaysStatus = (days: number, type: string) => {
      // 修复：当某个月的1号是周日时，月份下方会空出来一行
      if (type == 'prev' && days >= 7) {
        days -= 7;
      }
      return Array.from(Array(days), (v, k) => {
        return {
          day: k + 1,
          type: type
        };
      });
    };
    // 获取月数据
    const getMonth = (curData: any[], type: string) => {
      // 一号为周几
      const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1]);
      //当月天数
      const currMonthDays = Utils.getMonthDays(curData[0], curData[1]);
      const title = {
        year: curData[0],
        month: curData[1]
      };
      const monthInfo: MonthInfo = {
        curData: curData,
        title: `${title.year}年${title.month}月`,
        monthData: [
          ...(getDaysStatus(preMonthDays, 'prev') as Day[]),
          ...(getDaysStatus(currMonthDays, 'curr') as Day[])
        ]
      };
      let titleHeight = Math.floor(46 * scalePx.value) + Math.floor(16 * scalePx.value) * 2;
      let itemHeight = Math.floor(128 * scalePx.value);
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
      console.log(state);
    };

    // 初始化数据
    const initData = () => {
      // 初始化开始结束数据
      state.startData = props.startDate ? splitDate(props.startDate) : '';
      state.endData = props.endDate ? splitDate(props.endDate) : '';

      // 根据是否存在默认时间，初始化当前日期,
      if (!props.defaultValue) {
        state.currDate = state.isRange ? [Utils.date2Str(new Date()), Utils.getDay(1)] : Utils.date2Str(new Date());
      } else {
        state.currDate = state.isRange ? [...props.defaultValue] : props.defaultValue;
      }

      const startDate = {
        year: Number(splitDate(props.startDate)[0]),
        month: Number(splitDate(props.startDate)[1])
      };
      const endDate = {
        year: Number(splitDate(props.endDate)[0]),
        month: Number(splitDate(props.endDate)[1])
      };
      let monthsNum = endDate.month - startDate.month;
      if (endDate.year - startDate.year > 0) {
        monthsNum = monthsNum + 12 * (endDate.year - startDate.year);
      }

      getMonth(splitDate(props.startDate), 'next');

      let i = 1;
      do {
        getMonth(getCurrData('next'), 'next');
      } while (i++ < monthsNum);

      // 日期转化为数组，限制初始日期。判断时间范围
      if (state.isRange && Array.isArray(state.currDate)) {
        if (props.startDate && Utils.compareDate(state.currDate[0], props.startDate)) {
          state.currDate.splice(0, 1, props.startDate);
        }
        if (props.endDate && Utils.compareDate(props.endDate, state.currDate[1])) {
          state.currDate.splice(1, 1, props.endDate);
        }
        state.defaultData = [...splitDate(state.currDate[0]), ...splitDate(state.currDate[1])];
      } else {
        if (props.startDate && Utils.compareDate(state.currDate as string, props.startDate)) {
          state.currDate = props.startDate;
        } else if (props.endDate && !Utils.compareDate(state.currDate as string, props.endDate)) {
          state.currDate = props.endDate;
        }
        state.defaultData = [...splitDate(state.currDate as string)];
      }

      let current = 0;
      const title = `${state.defaultData[0]}年${state.defaultData[1]}月`;
      let lastCurrent = 0;
      state.monthsData.forEach((item, index) => {
        if (item.title == title) {
          current = index;
        }
        if (state.isRange) {
          if (item.title == `${state.defaultData[3]}年${state.defaultData[4]}月`) {
            lastCurrent = index;
          }
        }
      });

      setDefaultRange(monthsNum, current);

      state.currentIndex = current;
      state.yearMonthTitle = state.monthsData[state.currentIndex].title;
      // 设置月份数据
      // getMonth(state.defaultData, 'next');

      // 设置当前选中日期
      if (state.isRange) {
        chooseDay({ day: state.defaultData[2], type: 'curr' }, state.monthsData[state.currentIndex], true);
        chooseDay({ day: state.defaultData[5], type: 'curr' }, state.monthsData[lastCurrent], true, true);
      } else {
        // chooseDay({ day: state.defaultData[2], type: 'curr' }, state.monthsData[0], true);
        chooseDay({ day: state.defaultData[2], type: 'curr' }, state.monthsData[state.currentIndex], true);
      }
      let lastItem = state.monthsData[state.monthsData.length - 1];
      let containerHeight = lastItem.cssHeight + lastItem.cssScrollHeight;
      console.log('containerHeight', containerHeight);
      if (months?.value && monthsPanel?.value && viewArea?.value) {
        monthsPanel.value.style.height = `${containerHeight}px`;
        state.scrollTop = state.monthsData[state.currentIndex].cssScrollHeight;
      }
      state.avgHeight = Math.floor(containerHeight / (monthsNum + 1));
      state.monthsNum = monthsNum;
    };
    const setDefaultRange = (monthsNum: number, current: number) => {
      let rangeArr: any[] = [];
      if (monthsNum >= 3) {
        if (current > 0 && current < monthsNum) {
          rangeArr = [current - 1, current + 2];
        } else if (current == 0) {
          rangeArr = [current, current + 3];
        } else if (current == monthsNum) {
          rangeArr = [current - 2, current + 1];
        }
      } else {
        rangeArr = [0, monthsNum + 1];
      }
      if (JSON.stringify(state.defaultRange) !== JSON.stringify(rangeArr)) {
        state.defaultRange[0] = rangeArr[0];
        state.defaultRange[1] = rangeArr[1];
        state.compConthsDatas = state.monthsData.slice(rangeArr[0], rangeArr[1]);
      }
      let defaultScrollTop = state.monthsData[state.defaultRange[0]].cssScrollHeight;
      state.translateY = defaultScrollTop;
      console.log('defaultScrollTop', defaultScrollTop);
    };
    // 区间选择&&当前月&&选中态
    const isActive = (day: Day, month: MonthInfo) => {
      return state.isRange && day.type == 'curr' && getClass(day, month) == 'calendar-month-day-active';
    };

    // 是否有开始提示
    const isStartTip = (day: Day, month: MonthInfo) => {
      if (isActive(day, month)) {
        return isStart(getCurrDate(day, month));
      } else {
        return false;
      }
    };

    // 是否有结束提示
    const isEndTip = (day: Day, month: MonthInfo) => {
      return isActive(day, month);
    };

    // 是否有是当前日期
    const isCurrDay = (month: any, day: string) => {
      const date = `${month.curData[0]}-${month.curData[1]}-${day}`;
      return Utils.isEqual(date, Utils.date2Str(new Date()));
    };
    const mothsViewScroll = (e: any) => {
      console.log('mothsViewScroll', e);
      // console.log(e);
      var currentScrollTop = e.target.scrollTop;

      let current = Math.floor(currentScrollTop / state.avgHeight);
      let scrollCurrent = current;
      let currentItem, nextItem;
      // console.log(currentScrollTop, scrollCurrent);

      if (current > 0) {
        currentItem = state.monthsData[current - 1];
        nextItem = state.monthsData[current];
      } else {
        currentItem = state.monthsData[current];
        nextItem = state.monthsData[current + 1];
      }
      if (
        current + 1 <= state.monthsNum &&
        nextItem.cssScrollHeight >= currentScrollTop &&
        currentScrollTop >= currentItem.cssScrollHeight
      ) {
      } else if (currentScrollTop < currentItem.cssScrollHeight) {
        current = current - 1;
        if (current <= 0) {
          current = 0;
        }
      } else if (current + 1 <= state.monthsNum && currentScrollTop > nextItem.cssScrollHeight) {
        current = current + 1;
      }

      if (state.currentIndex !== current) {
        state.currentIndex = current;
        setDefaultRange(state.monthsNum, current);
      }
      state.yearMonthTitle = state.monthsData[scrollCurrent].title;
    };

    onMounted(() => {
      // 初始化数据
      console.log('onMounted');

      Taro.getSystemInfo({
        success(res) {
          let scale = 2;
          let screenWidth = res.screenWidth;
          scale = Number((screenWidth / 750).toFixed(3));
          scalePx.value = scale;
          initData();
          console.log(props.type);
          console.log(state.isRange);
        }
      });
    });

    watch(
      () => state.defaultRange,
      (val) => {
        if (val) {
          console.log('watch=defaultRange=', state.defaultRange);
        }
      }
    );

    return {
      weeks,
      mothsViewScroll,
      getClass,
      isStartTip,
      isEndTip,
      chooseDay,
      isCurrDay,
      confirm,
      monthsPanel,
      months,
      weeksPanel,
      viewArea,
      ...toRefs(state),
      ...toRefs(props)
    };
  }
});
</script>
