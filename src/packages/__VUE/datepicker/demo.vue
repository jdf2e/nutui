<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <!-- 选择年月日 -->
    <nut-date-picker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm"
      :is-show-chinese="true"
      :threeDimensional="false"
    ></nut-date-picker>

    <h2>{{ translate('popupDesc') }}</h2>
    <nut-cell :title="translate('basic')" :desc="popupDesc" @click="show = true"></nut-cell>
    <nut-popup position="bottom" v-model:visible="show">
      <nut-date-picker
        v-model="currentDate"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="popupConfirm"
        :is-show-chinese="true"
        :threeDimensional="false"
      >
        <nut-button block type="primary" @click="alwaysFun">{{ translate('forever') }}</nut-button>
      </nut-date-picker>
    </nut-popup>
    <h2>{{ translate('mmdd') }}</h2>
    <!-- 选择月日 -->
    <nut-date-picker
      v-model="currentDate2"
      type="month-day"
      :title="translate('basic')"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 7, 1)"
      @confirm="confirm5"
    ></nut-date-picker>
    <h2>{{ translate('showAll') }}</h2>

    <!-- 选择年月日时分 -->
    <nut-date-picker
      v-model="currentDate3"
      :title="translate('chooseDate')"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm2"
    ></nut-date-picker>
    <h2>{{ translate('time') }}</h2>

    <!-- 选择时分秒 -->
    <nut-date-picker
      v-model="currentDate4"
      :title="translate('chooseTime')"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm3"
    ></nut-date-picker>
    <h2>{{ translate('hourMinute') }}</h2>

    <!-- 选择时分 -->
    <nut-date-picker
      v-model="currentDate4"
      :title="translate('chooseTime')"
      type="hour-minute"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="confirm3"
    ></nut-date-picker>
    <h2>{{ translate('format') }}</h2>

    <!-- 格式化选项 -->
    <nut-date-picker
      v-model="currentDate5"
      :title="translate('chooseTime')"
      type="datetime"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 10, 1)"
      :formatter="formatter"
      @confirm="confirm4"
    ></nut-date-picker>
    <h2>{{ translate('stepMins') }}</h2>

    <!-- 分钟数递增步长设置 -->
    <nut-date-picker
      v-model="currentDate6"
      :title="translate('chooseTime')"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      :minute-step="5"
      @confirm="confirm3"
    ></nut-date-picker>
    <h2>{{ translate('filter') }}</h2>
    <!-- 过滤选项 -->
    <nut-date-picker
      v-model="currentDate7"
      :title="translate('chooseTime')"
      type="datehour"
      :min-date="minDate"
      :max-date="maxDate"
      :filter="filter"
      :formatter="formatter1"
      @confirm="confirm"
    ></nut-date-picker>
  </div>
</template>

<script lang="ts">
import { toRefs, ref, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('date-picker');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { showToast } from '@/packages/nutui.vue';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '选择日期',
      showChinese: '显示中文',
      mmdd: '选择月日',
      showAll: '选择年月日时分',
      time: '选择时分秒',
      hourMinute: '选择时分',
      format: '格式化选项',
      stepMins: '分钟数递增步长设置',
      filter: '过滤选项',
      setStartEnd: '限制开始结束时间',
      chooseDate: '日期时间选择',
      chooseTime: '时间选择',
      forever: '永远有效',
      year: '年',
      month: '月',
      day: '日',
      hour: '时',
      min: '分',
      seconds: '秒',
      popupDesc: '搭配 Popup 使用'
    },
    'en-US': {
      basic: 'Choose Date',
      showChinese: 'Show Chinese',
      mmdd: 'Choose Month-Day',
      showAll: 'Choose DateTime',
      time: 'Choose Time',
      hourMinute: 'Choose Hour-Minute',
      format: 'Option Formatter',
      stepMins: 'Option Steps',
      filter: 'Option Filter',
      setStartEnd: 'Limit the start and end time',
      chooseDate: 'Choose Time',
      chooseTime: 'Choose Time',
      forever: 'Forever',
      year: 'Year',
      month: 'Month',
      day: 'Day',
      hour: 'Hour',
      min: 'Minute',
      seconds: 'Second',
      popupDesc: 'With Popup'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const show = ref(false);
    const popupDesc = ref();

    const CurrentDate = reactive({
      currentDate: new Date(2022, 4, 10, 10, 10),
      currentDate2: new Date(2022, 4, 10, 10, 10),
      currentDate3: new Date(2022, 4, 10, 10, 10),
      currentDate4: new Date(2022, 4, 10, 10, 10),
      currentDate5: new Date(2022, 4, 10, 10, 10),
      currentDate6: new Date(2022, 4, 10, 10, 10),
      currentDate7: new Date(2022, 4, 10, 0, 0)
    });

    const formatter = (type: string, option) => {
      switch (type) {
        case 'year':
          option.text += '';
          break;
        case 'month':
          option.text += `${translate('month')}`;
          break;
        case 'day':
          option.text += `${translate('day')}`;
          break;
        case 'hour':
          option.text += `${translate('hour')}`;
          break;
        case 'minute':
          option.text += `${translate('min')}`;
          break;
        default:
          option.text += '';
      }
      return option;
    };

    const formatter1 = (type: string, option) => {
      switch (type) {
        case 'year':
          option.text += `${translate('year')}`;
          break;
        case 'month':
          option.text += `${translate('month')}`;
          break;
        case 'day':
          option.text += `${translate('day')}`;
          break;
        case 'hour':
          option.text += `${translate('hour')}`;
          break;
        default:
          option.text += '';
      }
      return option;
    };

    const filter = (type: string, options) => {
      if (type == 'hour') {
        return options.filter((option) => Number(option.value) % 6 === 0);
      }
      return options;
    };

    const confirm = ({
      selectedValue,
      selectedOptions
    }: {
      selectedValue: (string | number)[];
      selectedOptions: any;
    }) => {
      showToast.text(selectedOptions.map((val: any) => val.text).join(''));
    };

    const confirm2 = ({
      selectedValue,
      selectedOptions
    }: {
      selectedValue: (string | number)[];
      selectedOptions: any;
    }) => {
      const date = selectedValue.slice(0, 3).join('-');
      const time = selectedValue.slice(3).join(':');
      showToast.text(date + ' ' + time);
    };

    const confirm3 = ({
      selectedValue,
      selectedOptions
    }: {
      selectedValue: (string | number)[];
      selectedOptions: any;
    }) => {
      showToast.text(selectedValue.join(':'));
    };

    const confirm4 = ({
      selectedValue,
      selectedOptions
    }: {
      selectedValue: (string | number)[];
      selectedOptions: any;
    }) => {
      const date = selectedOptions
        .slice(1, 3)
        .map((op: any) => op.text)
        .join('');
      const time = selectedOptions
        .slice(3)
        .map((op: any) => op.value)
        .join(':');
      showToast.text(selectedOptions[0].text + translate('year') + date + ' ' + time);
    };

    const confirm5 = ({
      selectedValue,
      selectedOptions
    }: {
      selectedValue: (string | number)[];
      selectedOptions: any;
    }) => {
      showToast.text(selectedValue.join('-'));
    };

    const popupConfirm = ({ selectedValue, selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
      popupDesc.value = selectedOptions.map((val: any) => val.text).join('');
      show.value = false;
    };

    const alwaysFun = () => {
      popupDesc.value = '永远有效';
      show.value = false;
    };
    return {
      show,
      popupDesc,
      ...toRefs(CurrentDate),
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      confirm,
      formatter,
      formatter1,
      filter,
      alwaysFun,
      translate,
      popupConfirm,
      confirm2,
      confirm3,
      confirm4,
      confirm5
    };
  }
});
</script>
<style lang="scss" scoped></style>
