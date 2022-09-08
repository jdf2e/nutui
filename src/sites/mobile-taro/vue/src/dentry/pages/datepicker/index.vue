<template>
  <div class="demo">
    <h2>选择年月日</h2>
    <nut-cell title="显示中文" :desc="desc1" @click="show = true"></nut-cell>
    <h2>选择月日</h2>
    <nut-cell title="限制开始结束时间" :desc="desc2" @click="show2 = true"></nut-cell>
    <h2>选择年月日时分</h2>
    <nut-cell title="日期时间选择" :desc="desc3" @click="show3 = true"></nut-cell>
    <h2>选择时分秒</h2>
    <nut-cell title="时间选择" :desc="desc4" @click="show4 = true"></nut-cell>
    <h2>格式化选项</h2>
    <nut-cell title="时间选择" :desc="desc5" @click="show5 = true"></nut-cell>
    <h2>分钟数递增步长设置</h2>
    <nut-cell title="时间选择" :desc="desc6" @click="show6 = true"></nut-cell>
    <h2>过滤选项</h2>
    <nut-cell title="时间选择" :desc="desc7" @click="show7 = true"></nut-cell>
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
      :threeDimensional="false"
      :is-show-chinese="true"
    ></nut-datepicker>
    <!-- 选择月日 -->
    <nut-datepicker
      v-model="currentDate2"
      type="month-day"
      title="日期选择"
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
      title="日期时间选择"
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
      title="时间选择"
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
      title="日期选择"
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
      ><nut-button block type="primary" @click="alwaysFun">永远有效</nut-button></nut-datepicker
    >
    <!-- 分钟数递增步长设置 -->
    <nut-datepicker
      v-model="currentDate6"
      title="时间选择"
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
      title="时间选择"
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
export default {
  props: {},
  setup() {
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

    const desc1 = ref('2022年05月10日');
    const desc2 = ref('05-10');
    const desc3 = ref('2022-05-10 10:10');
    const desc4 = ref('10:10:00');
    const desc5 = ref('2022年05月10日 10:10');
    const desc6 = ref('10:10:00');
    const desc7 = ref('2022年05月10日 00时');
    const descList = [desc1, desc2, desc3, desc4, desc5, desc6, desc7];

    const formatter = (type: string, option) => {
      switch (type) {
        case 'year':
          option.text += '';
          break;
        case 'month':
          option.text += '月';
          break;
        case 'day':
          option.text += '月';
          break;
        case 'hour':
          option.text += '时';
          break;
        case 'minute':
          option.text += '分';
          break;
        default:
          option.text += '';
      }
      return option;
    };

    const formatter1 = (type: string, option) => {
      switch (type) {
        case 'year':
          option.text += '年';
          break;
        case 'month':
          option.text += '月';
          break;
        case 'day':
          option.text += '月';
          break;
        case 'hour':
          option.text += '时';
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
      switch (index) {
        case 0:
        case 6:
          descList[index].value = selectedOptions.map((option) => option.text).join('');
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
          descList[index].value = selectedOptions[0].text + '年' + date + ' ' + time;
          break;
        default:
          descList[index].value = selectedValue.join('-');
      }
    };
    const alwaysFun = () => {
      show5.value = false;
      desc5.value = '永久有效';
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
      alwaysFun
    };
  }
};
</script>
<style lang="scss" scoped></style>
