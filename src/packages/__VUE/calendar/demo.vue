<template>
  <div class="demo">
    <h2>基础用法</h2>
    <div>
      <nut-cell
        :show-icon="true"
        title="选择单个日期"
        :desc="date ? `${date} ${dateWeek}` : '请选择'"
        @click="openSwitch('isVisible')"
      >
      </nut-cell>
      <nut-calendar
        v-model:visible="isVisible"
        :default-value="date"
        @close="closeSwitch('isVisible')"
        @choose="setChooseValue"
        :start-date="`2019-10-11`"
        :end-date="`2029-11-11`"
      >
      </nut-calendar>
    </div>

    <div>
      <nut-cell
        :show-icon="true"
        title="选择日期区间"
        :desc="date1 ? `${date1[0]}至${date1[1]}` : '请选择'"
        @click="openSwitch('isVisible1')"
      >
      </nut-cell>
      <nut-calendar
        v-model:visible="isVisible1"
        :default-value="date1"
        type="range"
        :start-date="`2019-12-22`"
        :end-date="`2021-01-08`"
        @close="closeSwitch('isVisible1')"
        @choose="setChooseValue1"
      >
      </nut-calendar>
    </div>

    <h2>自定义日历-自动回填</h2>
    <div>
      <nut-cell
        :show-icon="true"
        title="选择日期"
        :desc="date3 ? date3 : '请选择'"
        @click="openSwitch('isVisible3')"
      >
      </nut-cell>
      <nut-calendar
        v-model:visible="isVisible3"
        @close="closeSwitch('isVisible3')"
        @choose="setChooseValue3"
        :default-value="date3"
        :start-date="null"
        :end-date="null"
        :is-auto-back-fill="true"
      >
      </nut-calendar>
    </div>

    <h2>平铺展示</h2>
    <div class="test-calendar-wrapper">
      <nut-calendar
        :poppable="false"
        :default-value="date2"
        :is-auto-back-fill="true"
        @choose="setChooseValue2"
      >
      </nut-calendar>
    </div>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from '../../utils/create';

const { createDemo } = createComponent('calendar');

interface TestCalendarState {
  isVisible: boolean;
  date: string;
  dateWeek: string;
  isVisible1: boolean;
  date1: string[];
  date2: string;
  isVisible3: boolean;
  date3: string;
}
export default createDemo({
  props: {},
  setup() {
    const state: TestCalendarState = reactive({
      isVisible: false,
      date: '',
      dateWeek: '',

      isVisible1: false,
      date1: ['2019-12-23', '2019-12-26'],

      date2: '2020-07-08',

      isVisible3: false,
      date3: ''
    });
    const openSwitch = (param: string) => {
      state[`${param}`] = true;
    };

    const closeSwitch = (param: string) => {
      state[`${param}`] = false;
    };

    const setChooseValue = (param: string) => {
      state.date = param[3];
      state.dateWeek = param[4];
    };

    const setChooseValue1 = (param: string) => {
      state.date1 = [...[param[0][3], param[1][3]]];
    };

    const setChooseValue2 = (param: string) => {
      state.date2 = param[3];
      console.log(state.date2);
    };

    const setChooseValue3 = (param: string) => {
      state.date3 = param[3];
    };

    return {
      ...toRefs(state),
      openSwitch,
      closeSwitch,
      setChooseValue,
      setChooseValue1,
      setChooseValue2,
      setChooseValue3
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
