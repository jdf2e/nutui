<template>
  <div class="demo">
    <nut-cell-group :title="translate('basic')">
      <nut-cell :title="translate('showChinese')" :desc="desc1" @click="show = true"></nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('mmdd')">
      <nut-cell :title="translate('setStartEnd')" :desc="desc2" @click="show2 = true"></nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('showAll')">
      <nut-cell :title="translate('chooseDate')" :desc="desc3" @click="show3 = true"></nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('time')">
      <nut-cell :title="translate('chooseTime')" :desc="desc4" @click="show4 = true"></nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('format')">
      <nut-cell :title="translate('chooseTime')" :desc="desc5" @click="show5 = true"></nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('stepMins')">
      <nut-cell :title="translate('chooseTime')" :desc="desc6" @click="show6 = true"></nut-cell>
    </nut-cell-group>

    <nut-cell-group :title="translate('filter')">
      <nut-cell :title="translate('chooseTime')" :desc="desc7" @click="show7 = true"></nut-cell>
    </nut-cell-group>

    <!-- 选择年月日 -->
    <nut-datepicker
      v-model="currentDate"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="
        (val) => {
          confirm(0, val);
        }
      "
      v-model:visible="show"
      :is-show-chinese="true"
    ></nut-datepicker>
    <!-- 选择月日 -->
    <nut-datepicker
      v-model="currentDate2"
      type="month-day"
      :title="translate('basic')"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 7, 1)"
      @confirm="
        (val) => {
          confirm(1, val);
        }
      "
      v-model:visible="show2"
    ></nut-datepicker>
    <!-- 选择年月日时分 -->
    <nut-datepicker
      v-model="currentDate3"
      :title="translate('chooseDate')"
      type="datetime"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="
        (val) => {
          confirm(2, val);
        }
      "
      v-model:visible="show3"
    ></nut-datepicker>
    <!-- 选择时分秒 -->
    <nut-datepicker
      v-model="currentDate4"
      :title="translate('chooseTime')"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="
        (val) => {
          confirm(3, val);
        }
      "
      v-model:visible="show4"
    ></nut-datepicker>
    <!-- 格式化选项 -->
    <nut-datepicker
      v-model="currentDate5"
      :title="translate('chooseTime')"
      type="datetime"
      :min-date="new Date(2022, 0, 1)"
      :max-date="new Date(2022, 10, 1)"
      :formatter="formatter"
      @confirm="
        (val) => {
          confirm(4, val);
        }
      "
      v-model:visible="show5"
      ><nut-button block type="primary" @click="alwaysFun">{{ translate('forever') }}</nut-button></nut-datepicker
    >
    <!-- 分钟数递增步长设置 -->
    <nut-datepicker
      v-model="currentDate6"
      :title="translate('chooseTime')"
      type="time"
      :min-date="minDate"
      :max-date="maxDate"
      :minute-step="5"
      @confirm="
        (val) => {
          confirm(5, val);
        }
      "
      v-model:visible="show6"
    ></nut-datepicker>
    <!-- 过滤选项 -->
    <nut-datepicker
      v-model="currentDate7"
      :title="translate('chooseTime')"
      type="datehour"
      :min-date="minDate"
      :max-date="maxDate"
      :filter="filter"
      :formatter="formatter1"
      @confirm="
        (val) => {
          confirm(6, val);
        }
      "
      v-model:visible="show7"
    ></nut-datepicker>
  </div>
</template>

<script lang="ts">
import { toRefs, watch, ref, reactive } from 'vue';
import { createComponent } from '@/packages/utils/create';
const { createDemo, translate } = createComponent('datepicker');
import { useTranslate } from '@/sites/assets/util/useTranslate';
const initTranslate = () =>
  useTranslate({
    'zh-CN': {
      basic: '选择日期',
      showChinese: '显示中文',
      mmdd: '选择月日',
      showAll: '选择年月日时分',
      time: '选择时分秒',
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
      seconds: '秒'
    },
    'en-US': {
      basic: 'Choose Date',
      showChinese: 'Show Chinese',
      mmdd: 'Choose Month-Day',
      showAll: 'Choose DateTime',
      time: 'Choose Time',
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
      seconds: 'Second'
    }
  });
export default createDemo({
  props: {},
  setup() {
    initTranslate();
    const show = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);
    const show4 = ref(false);
    const show5 = ref(false);
    const show6 = ref(false);
    const show7 = ref(false);

    const CurrentDate = reactive({
      currentDate: new Date(2022, 4, 10, 10, 10),
      currentDate2: new Date(2022, 4, 10, 10, 10),
      currentDate3: new Date(2022, 4, 10, 10, 10),
      currentDate4: new Date(2022, 4, 10, 10, 10),
      currentDate5: new Date(2022, 4, 10, 10, 10),
      currentDate6: new Date(2022, 4, 10, 10, 10),
      currentDate7: new Date(2022, 4, 10, 0, 0)
    });

    const desc1 = ref(`2022${translate('year')} 05${translate('month')} 10${translate('day')}`);
    const desc2 = ref('05-10');
    const desc3 = ref('2022-05-10 10:10');
    const desc4 = ref('10:10:00');
    const desc5 = ref(`2022${translate('year')} 05${translate('month')} 10${translate('day')} 10:10`);
    const desc6 = ref('10:10:00');
    const desc7 = ref(`2022${translate('year')} 05${translate('month')} 10${translate('day')} 00${translate('hour')}`);
    const descList = [desc1, desc2, desc3, desc4, desc5, desc6, desc7];

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

    const confirm = (
      index: number,
      { selectedValue, selectedOptions }: { selectedValue: (string | number)[]; selectedOptions: any }
    ) => {
      let date = '';
      let time = '';
      console.log({ selectedValue, selectedOptions });
      switch (index) {
        case 0:
        case 6:
          descList[index].value = selectedOptions.map((option) => option.text).join(' ');
          break;
        case 2:
          date = selectedValue.slice(0, 3).join('-');
          time = selectedValue.slice(3).join(':');
          descList[index].value = date + ' ' + time;
          break;
        case 3:
        case 5:
          descList[index].value = selectedValue.join(':');
          break;
        case 4:
          date = selectedOptions
            .slice(1, 3)
            .map((op) => op.text)
            .join('');
          time = selectedOptions
            .slice(3)
            .map((op) => op.value)
            .join(':');
          descList[index].value = selectedOptions[0].text + translate('year') + date + ' ' + time;
          break;
        default:
          descList[index].value = selectedValue.join('-');
      }
    };

    const alwaysFun = () => {
      show5.value = false;
      desc5.value = translate('forever');
    };
    return {
      show,
      show2,
      show3,
      show4,
      show5,
      show6,
      show7,
      desc1,
      desc2,
      desc3,
      desc4,
      desc5,
      desc6,
      desc7,
      ...toRefs(CurrentDate),
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      confirm,
      formatter,
      formatter1,
      filter,
      alwaysFun,
      translate
    };
  }
});
</script>
<style lang="scss" scoped></style>
