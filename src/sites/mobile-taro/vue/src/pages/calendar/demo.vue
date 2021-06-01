<template>
  <div class="demo">
    <h2>基础用法</h2>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from 'vue';
import { createComponent } from './../../../../../../packages/utils/create';
import Calendar from './index.taro.vue';

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
  components: {
    'nut-calendar': Calendar
  },
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
