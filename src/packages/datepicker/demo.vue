<template>
  <div class="demo-list">
    <nut-noticebar :closeMode="true" v-if="!isMobile"
      >此 Demo 在 PC 端浏览器与移动端浏览器体验差异较大，建议在 Android 或 iOS 设备上体验。</nut-noticebar
    >
    <h4>选择年月日</h4>
    <div>
      <nut-cell :showIcon="true" title="每列不显示中文（年/月/日）" :desc="date ? date : '请选择'" @click.native="switchPicker('isVisible')">
      </nut-cell>
    </div>
    <nut-datepicker
      :is-visible="isVisible"
      type="date"
      title="选择年月日"
      :is-show-chinese="false"
      @close="switchPicker('isVisible')"
      @choose="setChooseValue"
    ></nut-datepicker>

    <h4>选择时间</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible3')">
        <span slot="title">
          <label>选择时间</label>
        </span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{ time ? `${time}` : '请选择' }}</span>
        </div>
      </nut-cell>
    </div>
    <nut-datepicker
      :is-visible="isVisible3"
      type="time"
      title="选择时间"
      @close="switchPicker('isVisible3')"
      @choose="setChooseValue3"
      defaultValue="01:07"
    ></nut-datepicker>

    <h4>限制开始结束时间</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible2')">
        <span slot="title">
          <label>日期时间选择</label>
        </span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{ datetime ? datetime : '请选择' }}</span>
        </div>
      </nut-cell>
    </div>
    <nut-datepicker
      :is-visible="isVisible2"
      title="选择日期时间"
      type="datetime"
      startDate="2000-11-10 12:08"
      endDate="2030-10-05 10:04"
      defaultValue="2018-11-02 11:08"
      @close="switchPicker('isVisible2')"
      @choose="setChooseValue2"
    ></nut-datepicker>

    <h4>限制开始结束小时</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible4')">
        <span slot="title">
          <label>选择时间</label>
        </span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{ time1 ? time1 : '请选择' }}</span>
        </div>
      </nut-cell>
    </div>
    <nut-datepicker
      :is-visible="isVisible4"
      type="time"
      title="选择时间"
      startHour="8"
      endHour="18"
      :default-value="time1"
      @close="switchPicker('isVisible4')"
      @choose="setChooseValue4"
      :is-set-second="true"
    ></nut-datepicker>

    <h4>分钟数递增步长设置</h4>
    <div>
      <nut-cell :showIcon="true" :isLink="true" @click.native="switchPicker('isVisible5')">
        <span slot="title">
          <label>分钟数递增步长设置</label>
        </span>
        <div slot="desc" class="selected-option">
          <span class="show-value">{{ time2 ? time2 : '请选择时间' }}</span>
        </div>
      </nut-cell>
    </div>
    <nut-datepicker
      :is-visible="isVisible5"
      type="time"
      title="选择时间"
      :minute-step="5"
      :default-value="time2"
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
      date: null,
      isVisible2: false,
      time: '01:07',
      isVisible3: false,
      datetime: '2018-11-02 11:08',
      amOrPm: 'PM',
      isVisible4: false,
      time1: '09:06:02',
      isVisible5: false,
      time2: '10:30',
    };
  },
  methods: {
    switchPicker(param) {
      this[`${param}`] = !this[`${param}`];
    },
    setChooseValue(param) {
      this.date = param[3];
    },
    setChooseValue2(param) {
      this.datetime = param[5];
    },
    setChooseValue3(param) {
      this.time = param[2];
    },
    setChooseValue4(param) {
      this.time1 = param[3];
    },
    setChooseValue5(param) {
      this.time2 = param[2];
    },
  },
};
</script>
