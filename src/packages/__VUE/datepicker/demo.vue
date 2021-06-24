<template>
  <div class="demo">
    <h2>每列不显示中文</h2>
    <nut-cell title="日期选择" :desc="desc1" @click="open(0)"></nut-cell>
    <h2>限制开始结束时间</h2>
    <nut-cell title="日期选择" :desc="desc2" @click="open(1)"></nut-cell>
    <h2>限制开始结束时间（有默认值）</h2>
    <nut-cell title="日期时间选择" :desc="desc3" @click="open(2)"></nut-cell>
    <h2>限制开始结束小时</h2>
    <nut-cell title="时间选择" :desc="desc4" @click="open(3)"></nut-cell>
    <h2>分钟数递增步长设置</h2>
    <nut-cell title="时间选择" :desc="desc5" @click="open(4)"></nut-cell>

    <nut-datepicker
      v-model="currentDate"
      @confirm="
        (val) => {
          confirm(0, val);
        }
      "
      v-model:visible="show"
      :is-show-chinese="false"
    ></nut-datepicker>
    <nut-datepicker
      v-model="currentDate"
      title="日期选择"
      :min-date="minDate"
      :max-date="maxDate"
      @confirm="
        (val) => {
          confirm(1, val);
        }
      "
      v-model:visible="show2"
      :is-show-chinese="false"
    ></nut-datepicker>
    <nut-datepicker
      v-model="currentDate"
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
    <nut-datepicker
      v-model="currentDate"
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
    <nut-datepicker
      v-model="currentDate"
      title="时间选择"
      type="time"
      :min-date="minDate"
      :minute-step="5"
      :max-date="maxDate"
      @confirm="
        (val) => {
          confirm(4, val);
        }
      "
      v-model:visible="show5"
    ></nut-datepicker>
  </div>
</template>

<script lang="ts">
import { toRefs, watch, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('datepicker');
export default createDemo({
  props: {},
  setup() {
    const show = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);
    const show4 = ref(false);
    const show5 = ref(false);

    const showList = [show, show2, show3, show4, show5];
    const currentDate = new Date(2020, 0, 1);

    const today = currentDate;
    const desc1 = ref('2020-1-1');
    const desc2 = ref('2020-1-1');
    const desc3 = ref('2020年-1月-1日-0时-0分');
    const desc4 = ref('0时-0分-0秒');
    const desc5 = ref('0时-0分-0秒');
    const descList = [desc1, desc2, desc3, desc4, desc5];
    return {
      show,
      show2,
      show3,
      show4,
      show5,
      desc1,
      desc2,
      desc3,
      desc4,
      desc5,
      currentDate,
      minDate: new Date(2020, 0, 1),
      maxDate: new Date(2025, 10, 1),
      open: (index: number) => {
        showList[index].value = true;
      },
      confirm: (index: number, val: string[]) => {
        descList[index].value = val.join('-');
      }
    };
  }
});
</script>
<style lang="scss" scoped></style>
