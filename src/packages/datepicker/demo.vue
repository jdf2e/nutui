<template>
  <div class="demo-list">
    <nut-noticebar
      :closeMode="true"
      v-if="!isMobile"
    >此 Demo 在 PC 端浏览器与移动端浏览器体验差异较大，建议在 Android 或 iOS 设备上体验。</nut-noticebar>
    <h4>基本用法</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible')">
        <span slot="title">
          <label>日期选择</label>
        </span>
        <span slot="sub-title">每列不显示中文~~~</span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{date ? date : '请选择日期'}}</span>
        </div>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible1')">
        <span slot="title">
          <label>日期选择</label>
        </span>
        <span slot="sub-title">限制开始结束时间~~~</span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{date1 ? date1 : '请选择日期'}}</span>
        </div>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible2')">
        <span slot="title">
          <label>日期时间选择</label>
        </span>
        <span slot="sub-title">有默认值，限制开始结束时间~~~</span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{datetime ? datetime : '请选择'}}</span>
        </div>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible3')">
        <span slot="title">
          <label>时间选择</label>
        </span>
        <span slot="sub-title">12小时制~~~</span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{time ? `${time} ${amOrPm}` : '请选择时间'}}</span>
        </div>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible4')">
        <span slot="title">
          <label>时间选择</label>
        </span>
        <span slot="sub-title">限制开始结束小时~~~</span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{time1 ? time1 : '请选择时间'}}</span>
        </div>
      </nut-cell>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible5')">
        <span slot="title">
          <label>时间选择</label>
        </span>
        <span slot="sub-title">分钟数递增步长设置~~~</span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{time2 ? time2 : '请选择时间'}}</span>
        </div>
      </nut-cell>
    </div>
    <!-- demo-->
    <nut-datepicker
      :is-visible="isVisible"
      type="date"
      title="请选择日期"
      :is-show-chinese="false"
      @close="switchPicker('isVisible')"
      @choose="setChooseValue"
    ></nut-datepicker>
    <!-- demo1-->
    <nut-datepicker
      :is-visible="isVisible1"
      title="请选择日期"
      type="date"
      startDate="1991-11-10"
      endDate="2019-10-05"
      @close="switchPicker('isVisible1')"
      @choose="setChooseValue1"
    ></nut-datepicker>
    <!-- demo2-->
    <nut-datepicker
      :is-visible="isVisible2"
      title="请选择日期时间"
      type="datetime"
      startDate="2000-11-10 12:08"
      endDate="2030-10-05 10:04"
      defaultValue="2018-11-02 11:08"
      @close="switchPicker('isVisible2')"
      @choose="setChooseValue2"
    ></nut-datepicker>
    <!-- demo3-->
    <nut-datepicker
      :is-visible="isVisible3"
      type="time"
      title="请选择时间"
      @close="switchPicker('isVisible3')"
      @choose="setChooseValue3"
      :is-use12-hours="true"
      defaultValue="01:07"
      :is-am="false"
    ></nut-datepicker>
    <!-- demo4-->
    <nut-datepicker
      :is-visible="isVisible4"
      type="time"
      title="请选择时间"
      startHour="8"
      endHour="18"
      defaultValue="09:06"
      @close="switchPicker('isVisible4')"
      @choose="setChooseValue4"
    ></nut-datepicker>
    <!-- demo4-->
    <nut-datepicker
      :is-visible="isVisible5"
      type="time"
      title="请选择时间"
      :minute-step="5"
      defaultValue="10:30"
      @close="switchPicker('isVisible5')"
      @choose="setChooseValue5"
    ></nut-datepicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      isVisible1: false,
      isVisible2: false,
      isVisible3: false,
      isVisible4: false,
      isVisible5: false,
      date: null,
      date1: null,
      datetime: "2018-11-02 11:08",
      time: "01:07",
      time1: "09:06",
      time2: "10:30",
      amOrPm: "PM"
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue(param) {
      this.date = param[3];
    },
    setChooseValue1(param) {
      this.date1 = param[3];
    },
    setChooseValue2(param) {
      this.datetime = param[5];
    },
    setChooseValue3(param) {
      this.amOrPm = param[2] == "上午" ? "AM" : "PM";
      this.time = param[3];
    },
    setChooseValue4(param) {
      this.time1 = param[2];
    },
    setChooseValue5(param) {
      this.time2 = param[2];
    }
  }
};
</script>

<style lang="scss" scoped>
.btn,
.show-value {
  display: inline-block;
  margin-left: 20px;
}
.btn {
  padding: 5px;
  border-radius: $btn-border-radius-small;
  color: #fff;
  background-color: $primary-color;
}
</style>
