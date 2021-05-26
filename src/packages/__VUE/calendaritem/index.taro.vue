<template>
  <view
    class="nut-calendar"
    :class="{
      'nut-calendar-tile': !poppable,
      'nut-calendar-nofooter': isAutoBackFill
    }"
  >
    <!-- header -->
    <view
      class="nut-calendar-header"
      :class="{ 'nut-calendar-header-tile': !poppable }"
    >
      <template v-if="poppable">
        <view class="calendar-title">{{ title }}</view>
        <view class="calendar-curr-month">{{ yearMonthTitle }}</view>
      </template>
      <view class="calendar-weeks" ref="weeksPanel">
        <view
          class="calendar-week-item"
          v-for="(item, index) of weeks"
          :key="index"
          >{{ item }}</view
        >
      </view>
    </view>
    <!-- content-->
    <view
      class="nut-calendar-content"
      ref="months"
      @touchstart.stop="touchStart"
      @touchmove.stop.prevent="touchMove"
      @touchend.stop="touchEnd"
    >
      <view class="calendar-months-panel" ref="monthsPanel">
        <view class="calendar-loading-tip">{{
          !unLoadPrev ? '加载上一个月' : '没有更早月份'
        }}</view>
        <view
          class="calendar-month"
          v-for="(month, index) of monthsData"
          :key="index"
        >
          <view class="calendar-month-title">{{ month.title }}</view>
          <view class="calendar-month-con">
            <view
              class="calendar-month-item"
              :class="type === 'range' ? 'month-item-range' : ''"
            >
              <template v-for="(day, i) of month.monthData" :key="i">
                <view
                  class="calendar-month-day"
                  :class="getClass(day, month)"
                  @click="chooseDay(day, month)"
                >
                  <view class="calendar-day">{{
                    day.type == 'curr' ? day.day : ''
                  }}</view>
                  <view
                    class="calendar-curr-tips"
                    v-if="isCurrDay(month, day.day)"
                    >今天</view
                  >
                  <view
                    class="calendar-day-tip"
                    v-if="isStartTip(day, month)"
                    >{{ '开始' }}</view
                  >
                  <view
                    class="calendar-day-tip"
                    v-else-if="isEndTip(day, month)"
                    >{{ '结束' }}</view
                  >
                </view>
              </template>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- footer-->
    <view class="nut-calendar-footer" v-if="poppable && !isAutoBackFill">
      <view class="calendar-confirm-btn" @click="confirm">确定</view>
    </view>
  </view>
</template>
<script lang="ts">
import { PropType, reactive, ref, watch, toRefs } from 'vue';
import { createComponent } from '../../utils/create';
const { create } = createComponent('calendar-item');
import Utils from '../../utils/date';
import requestAniFrame from '../../utils/raf';
type InputDate = string | string[];
interface CalendarState {
  yearMonthTitle: string;
  currDate: InputDate;
  unLoadPrev: boolean;
  touchParams: any;
  transformY: number;
  translateY: number;
  scrollDistance: number;
  defaultData: InputDate;
  chooseData: any;
  monthsData: any[];
  dayPrefix: string;
  startData: InputDate;
  endData: InputDate;
  isRange: boolean;
  timer: number;
}
interface Day {
  day: string | number;
  type: string;
}

interface MonthInfo {
  curData: string[] | string;
  title: string;
  monthData: Day[];
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

    // state
    const state: CalendarState = reactive({
      yearMonthTitle: '',
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
      transformY: 0,
      translateY: 0,
      scrollDistance: 0,
      defaultData: [],
      chooseData: [],
      monthsData: [],
      dayPrefix: 'calendar-month-day',
      startData: '',
      endData: '',
      isRange: props.type === 'range',
      timer: 0
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
      return isRange
        ? month.curData[3] +
            '-' +
            month.curData[4] +
            '-' +
            Utils.getNumTwoBit(+day.day)
        : month.curData[0] +
            '-' +
            month.curData[1] +
            '-' +
            Utils.getNumTwoBit(+day.day);
    };

    // 获取样式
    const getClass = (day: Day, month: MonthInfo, isRange?: boolean) => {
      const currDate = getCurrDate(day, month, isRange);
      if (day.type == 'curr') {
        if (
          (!state.isRange &&
            Utils.isEqual(state.currDate as string, currDate)) ||
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
    const chooseDay = (
      day: Day,
      month: MonthInfo,
      isFirst: boolean,
      isRange?: boolean
    ) => {
      if (getClass(day, month, isRange) != `${state.dayPrefix}-disabled`) {
        let days = [...month.curData];
        days = isRange ? days.splice(3) : days.splice(0, 3);
        days[2] =
          typeof day.day == 'number' ? Utils.getNumTwoBit(day.day) : day.day;
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
      const monthData =
        type == 'prev'
          ? state.monthsData[0]
          : state.monthsData[state.monthsData.length - 1];
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
      return [year, Utils.getNumTwoBit(month), monthData.curData[2]];
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
    const getMonth = (curData: string[], type: string) => {
      const preMonthDays = Utils.getMonthPreDay(+curData[0], +curData[1]);
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
      if (type == 'next') {
        if (
          !state.endData ||
          !Utils.compareDate(
            `${state.endData[0]}-${state.endData[1]}-${Utils.getMonthDays(
              state.endData[0],
              state.endData[1]
            )}`,
            `${curData[0]}-${curData[1]}-${curData[2]}`
          )
        ) {
          state.monthsData.push(monthInfo);
        }
      } else {
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
      state.startData = props.startDate ? splitDate(props.startDate) : '';
      state.endData = props.endDate ? splitDate(props.endDate) : '';

      // 初始化当前日期
      if (!props.defaultValue) {
        state.currDate = state.isRange
          ? [Utils.date2Str(new Date()), Utils.getDay(1)]
          : Utils.date2Str(new Date());
      } else {
        state.currDate = state.isRange
          ? [...props.defaultValue]
          : props.defaultValue;
      }

      // 日期转化为数组
      if (state.isRange && Array.isArray(state.currDate)) {
        if (
          props.startDate &&
          Utils.compareDate(state.currDate[0], props.startDate)
        ) {
          state.currDate.splice(0, 1, props.startDate);
        }
        if (
          props.endDate &&
          Utils.compareDate(props.endDate, state.currDate[1])
        ) {
          state.currDate.splice(1, 1, props.endDate);
        }
        state.defaultData = [
          ...splitDate(state.currDate[0]),
          ...splitDate(state.currDate[1])
        ];
      } else {
        if (
          props.startDate &&
          Utils.compareDate(state.currDate as string, props.startDate)
        ) {
          state.currDate = props.startDate;
        } else if (
          props.endDate &&
          !Utils.compareDate(state.currDate as string, props.endDate)
        ) {
          state.currDate = props.endDate;
        }

        state.defaultData = [...splitDate(state.currDate as string)];
      }

      getMonth(state.defaultData, 'next');
      state.yearMonthTitle = state.monthsData[0].title;

      let i = 1;
      do {
        getMonth(getCurrData('next'), 'next');
      } while (i++ < 4);

      if (state.isRange) {
        chooseDay(
          { day: state.defaultData[2], type: 'curr' },
          state.monthsData[0],
          true
        );
        chooseDay(
          { day: state.defaultData[5], type: 'curr' },
          state.monthsData[0],
          true,
          true
        );
      } else {
        chooseDay(
          { day: state.defaultData[2], type: 'curr' },
          state.monthsData[0],
          true
        );
      }
    };

    // 区间选择&&当前月&&选中态
    const isActive = (day: Day, month: MonthInfo) => {
      return (
        state.isRange &&
        day.type == 'curr' &&
        getClass(day, month) == 'calendar-month-day-active'
      );
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

    // 监听月份滚动，改变月份标题
    const loadScroll = () => {
      if (!props.poppable) {
        return false;
      }
      requestAniFrame(() => {
        if (weeksPanel?.value && monthsPanel?.value) {
          const top = weeksPanel?.value.getBoundingClientRect().bottom;
          const monthsDoms = monthsPanel.value.querySelectorAll(
            '.calendar-month'
          );
          for (let i = 0; i < monthsDoms.length; i++) {
            if (
              monthsDoms[i].getBoundingClientRect().top <= top &&
              monthsDoms[i].getBoundingClientRect().bottom >= top
            ) {
              state.yearMonthTitle = state.monthsData[i].title;
            } else if (state.scrollDistance === 0) {
              state.yearMonthTitle = state.monthsData[0].title;
            }
          }
        }
      });
    };

    // 设置月份滚动距离和速度
    const setTransform = (translateY = 0, type?: string, time = 1000) => {
      if (monthsPanel?.value) {
        if (type === 'end') {
          monthsPanel.value.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`;
          clearTimeout(state.timer);
          state.timer = setTimeout(() => {
            loadScroll();
          }, time);
        } else {
          monthsPanel.value.style.webkitTransition = '';
          loadScroll();
        }
        monthsPanel.value.style.webkitTransform = `translateY(${translateY}px)`;
        state.scrollDistance = translateY;
      }
    };

    // 计算滚动方向和距离
    const setMove = (move: number, type?: string, time?: number) => {
      let updateMove = move + state.transformY;
      const h = months.value?.offsetHeight || 0;
      const offsetHeight = monthsPanel.value?.offsetHeight || 0;
      if (type === 'end') {
        // 限定滚动距离
        if (updateMove > 0) {
          updateMove = 0;
        }
        if (updateMove < 0 && updateMove < -offsetHeight + h) {
          updateMove = -offsetHeight + h;
        }
        if (offsetHeight <= h && state.monthsData.length == 1) {
          updateMove = 0;
        }
        setTransform(updateMove, type, time);
      } else {
        if (updateMove > 0 && updateMove > 100) {
          updateMove = 100;
        }
        if (
          updateMove < -offsetHeight + h - 100 &&
          state.monthsData.length > 1
        ) {
          updateMove = -offsetHeight + h - 100;
        }
        if (
          updateMove < 0 &&
          updateMove < -100 &&
          state.monthsData.length == 1
        ) {
          updateMove = -100;
        }
        setTransform(updateMove);
      }
    };

    // 监听touch开始
    const touchStart = (event: TouchEvent) => {
      const changedTouches = event.changedTouches[0];
      state.touchParams.startY = changedTouches.pageY;
      state.touchParams.startTime = event.timeStamp || Date.now();
      state.transformY = state.scrollDistance;
    };

    // 监听touchmove
    const touchMove = (event: TouchEvent) => {
      //event.preventDefault();
      const changedTouches = event.changedTouches[0];
      state.touchParams.lastY = changedTouches.pageY;
      state.touchParams.lastTime = event.timeStamp || Date.now();
      const move = state.touchParams.lastY - state.touchParams.startY;
      if (Math.abs(move) < 5) {
        return false;
      }
      setMove(move);
    };

    // 监听touchend
    const touchEnd = (event: TouchEvent) => {
      const changedTouches = event.changedTouches[0];
      state.touchParams.lastY = changedTouches.pageY;
      state.touchParams.lastTime = event.timeStamp || Date.now();
      let move = state.touchParams.lastY - state.touchParams.startY;
      if (Math.abs(move) < 5) {
        return false;
      }
      const updateMove = move + state.transformY;
      const h = months.value?.offsetHeight || 0;
      const offsetHeight = monthsPanel.value?.offsetHeight || 0;

      if (updateMove > 0) {
        getMonth(getCurrData('prev'), 'prev');
      } else if (updateMove < -offsetHeight + h * 2) {
        getMonth(getCurrData('next'), 'next');
        if (Math.abs(move) >= 300) {
          getMonth(getCurrData('next'), 'next');
        }
      }

      let moveTime = state.touchParams.lastTime - state.touchParams.startTime;
      if (moveTime <= 300) {
        move = move * 2;
        moveTime = moveTime + 1000;
        setMove(move, 'end', moveTime);
      } else {
        setMove(move, 'end');
      }
    };

    // 重新渲染
    const resetRender = () => {
      state.chooseData.splice(0);
      state.monthsData.splice(0);
      state.scrollDistance = 0;
      state.translateY = 0;
      setTransform(state.scrollDistance);
      initData();
    };

    // 初始化数据
    initData();

    //监听 默认值更改
    watch(
      () => props.defaultValue,
      val => {
        if (val) {
          resetRender();
        }
      }
    );

    return {
      weeks,
      touchStart,
      touchMove,
      touchEnd,
      getClass,
      isStartTip,
      isEndTip,
      chooseDay,
      isCurrDay,
      confirm,
      monthsPanel,
      months,
      weeksPanel,
      ...toRefs(state),
      ...toRefs(props)
    };
  }
});
</script>

<style lang="scss">
@import 'index.scss';
</style>
