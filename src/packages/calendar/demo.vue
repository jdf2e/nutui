<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div>
      <nut-cell
        :showIcon="true"
        title="选择单个日期"
        :desc="date ? `${date} ${dateWeek}` : '请选择'"
        @click.native="openSwitch('isVisible')"
      >
      </nut-cell
      ><div class="test-calendar-wrapper">
        <nut-calendar
          :is-visible="isVisible"
          :default-value="date"
          @close="closeSwitch('isVisible')"
          @choose="setChooseValue"
          :start-date="`2019-10-11`"
          :end-date="`2022-11-11`"
        >
        </nut-calendar
      ></div>
    </div>

    <div>
      <nut-cell
        :showIcon="true"
        title="选择日期区间"
        :desc="date1 ? `${date1[0]}至${date1[1]}` : '请选择'"
        @click.native="openSwitch('isVisible1')"
      >
      </nut-cell
      ><div class="test-calendar-wrapper">
        <nut-calendar
          :is-visible="isVisible1"
          :default-value="date1"
          type="range"
          :start-date="`2019-12-22`"
          :end-date="`2021-01-08`"
          @close="closeSwitch('isVisible1')"
          @choose="setChooseValue1"
        >
        </nut-calendar
      ></div>
    </div>
    <h2>自定义日历</h2>
    <h2>平铺展示</h2>
    <div class="test-calendar-wrapper">
      <nut-calendar
        :poppable="false"
        :is-visible="isVisible2"
        :default-value="date2"
        @choose="setChooseValue2"
      >
      </nut-calendar>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '@/utils/create';

const { createDemo } = createComponent('calendar');
import Utils from '@/utils/date';

interface TestCalendarState {
  isVisible: boolean;
  date: string;
  dateWeek: string;

  date2: string;
  isVisible2: boolean;

  isVisible1: boolean;
  date1: string[];
}
export default createDemo({
  props: {},
  setup() {
    const state: TestCalendarState = reactive({
      isVisible: false,
      date: '',
      dateWeek: '',

      date2: '2020-07-08',
      isVisible2: true,

      isVisible1: false,
      date1: ['2019-12-23', '2019-12-26']
    });
    const openSwitch = param => {
      state[`${param}`] = true;
    };

    const closeSwitch = param => {
      state[`${param}`] = false;
    };

    const setChooseValue = param => {
      state.date = param[3];
      state.dateWeek = param[4];
    };

    const setChooseValue2 = param => {
      state.date2 = param[3];
      console.log(state.date2);
    };

    const setChooseValue1 = param => {
      state.date1 = [...[param[0][3], param[1][3]]];
    };

    setTimeout(() => {
      state.date = '2021-01-03';
    }, 3000);

    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue,
      setChooseValue2,
      setChooseValue1
    };
  }
});
</script>

<style lang="scss" scoped>
.test-calendar-wrapper {
  display: flex;
  width: 100%;
  height: 613px;
  overflow: hidden;
}
</style>
