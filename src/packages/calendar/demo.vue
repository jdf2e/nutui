<template>
  <div class="demo-list">
    <h4>基础样式</h4>
    <div>
      <nut-cell :showIcon="true" title="选择日期" :desc="date ? `${date} ${dateWeek}` : '请选择'" @click.native="openSwitch('isVisible')"> </nut-cell>
      <nut-calendar
        :is-visible="isVisible"
        :default-value="date"
        @close="closeSwitch('isVisible')"
        @choose="setChooseValue"
        :start-date="`2019-10-11`"
        :end-date="`2020-11-11`"
      >
      </nut-calendar>
    </div>

    <div>
      <nut-calendar
        :is-visible="isVisible1"
        :default-value="date1"
        type="range"
        :start-date="`2019-12-22`"
        :end-date="`2021-01-08`"
        @close="closeSwitch('isVisible1')"
        @choose="setChooseValue1"
      >
      </nut-calendar>

      <nut-cell :showIcon="true" title="选择时间段" :desc="date1 ? `${date1[0]}至${date1[1]}` : '请选择'" @click.native="openSwitch('isVisible1')">
      </nut-cell>
    </div>
    <!-- <div>
      <nut-cell 
        :showIcon="true" 
        title="快捷选择区间"
        :desc="date3 ? `${date3[0]}至${date3[1]}` : '请选择'"
        @click.native="openSwitch('isVisible3')">
      </nut-cell>
    </div>
    <div>
      <nut-calendar
        :is-visible="isVisible3"
        :default-value="date3"
        type="range"
        :start-date="null"
        :end-date="null"
        @close="closeSwitch('isVisible3')"
        @choose="setChooseValue3"
      >
      <div slot="shortcut" @click="chooseShortcutMode">近一周</div>
      </nut-calendar>
    </div> -->

    <h4>平铺样式</h4>
    <div>
      <nut-calendar :poppable="false" :is-visible="isVisible2" :default-value="date2" :is-auto-back-fill="true" @choose="setChooseValue2">
      </nut-calendar>
    </div>
  </div>
</template>

<script>
import Utils from '../../utils/date.js';
export default {
  data() {
    return {
      isVisible: false,
      date: null,
      dateWeek: null,

      date2: '2020-07-08',
      isVisible2: true,

      isVisible1: false,
      date1: ['2019-12-23', '2019-12-26'],

      isVisible3: false,
      date3: null,
    };
  },
  methods: {
    openSwitch(param) {
      this[`${param}`] = true;
    },

    closeSwitch(param) {
      this[`${param}`] = false;
    },

    setChooseValue(param) {
      this.date = param[3];
      this.dateWeek = param[4];
    },

    setChooseValue2(param) {
      this.date2 = param[3];
      console.log(this.date2);
    },

    setChooseValue1(param) {
      this.date1 = [...[param[0][3], param[1][3]]];
    },

    setChooseValue3(param) {
      this.date3 = [...[param[0][3], param[1][3]]];
    },

    chooseShortcutMode() {
      this.date3 = [...[Utils.getDay(0), Utils.getDay(6)]];
      this.closeSwitch('isVisible3');
    },
  },
};
</script>
