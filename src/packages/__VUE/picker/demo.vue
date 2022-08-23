<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-cell
      :title="translate('chooseCity')"
      :desc="index"
      @click="
        () => {
          show = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model:visible="show"
      :columns="columns"
      :title="translate('chooseCity')"
      @change="change"
      @confirm="(options) => confirm('index', options)"
    ></nut-picker>

    <h2>{{ translate('defaultSelected') }}</h2>
    <nut-cell
      :title="translate('chooseCity')"
      :desc="defult"
      @click="
        () => {
          showDefult = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model="selectedValue"
      v-model:visible="showDefult"
      :columns="columns"
      :title="translate('chooseCity')"
      @confirm="(options) => confirm('defult', options)"
    >
    </nut-picker>

    <h2>{{ translate('tileDesc') }}</h2>
    <nut-cell
      :title="translate('chooseCity')"
      :desc="defult"
      @click="
        () => {
          showTile = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model="selectedValue"
      v-model:visible="showTile"
      :columns="columns"
      :title="translate('chooseCity')"
      :threeDimensional="false"
      @confirm="(options) => confirm('defult', options)"
    >
    </nut-picker>

    <h2>{{ translate('multipleColumns') }}</h2>
    <nut-cell
      :title="translate('chooseTime')"
      :desc="multiple"
      @click="
        () => {
          showMultiple = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model="selectedTime"
      v-model:visible="showMultiple"
      :columns="multipleColumns"
      :title="translate('chooseTime')"
      @confirm="(options) => confirm('multiple', options)"
    >
    </nut-picker>

    <h2>{{ translate('cascade') }}</h2>
    <nut-cell
      :title="translate('chooseCity')"
      :desc="cascader"
      @click="
        () => {
          showCascader = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model:visible="showCascader"
      :columns="cascaderColumns"
      :title="translate('chooseCity')"
      @confirm="(options) => confirm('cascader', options)"
    ></nut-picker>

    <h2>{{ translate('async') }}</h2>
    <nut-cell
      :title="translate('chooseCity')"
      :desc="async"
      @click="
        () => {
          showAsync = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model="asyncValue"
      v-model:visible="showAsync"
      :columns="asyncColumns"
      :title="translate('chooseCity')"
      @confirm="(options) => confirm('async', options)"
    ></nut-picker>

    <h2>{{ translate('custom') }}</h2>
    <nut-cell
      :title="translate('validTime')"
      :desc="effect"
      @click="
        () => {
          showEffect = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model:visible="showEffect"
      :columns="effectColumns"
      :title="translate('chooseDate')"
      @confirm="(options) => confirm('effect', options)"
    >
      <nut-button block type="primary" @click="alwaysFun">{{ translate('always') }}</nut-button></nut-picker
    >
  </div>
</template>
<script lang="ts">
import { toRefs, ref, onMounted, reactive, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { PickerOption } from './types';
const { createDemo, translate } = createComponent('picker');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Internation } from './doc.en';

useTranslate(Internation);
export default createDemo({
  props: {},
  setup() {
    const selectedValue = ref(['ZheJiang']);
    const selectedTime = ref(['Wednesday', 'Afternoon']);
    const asyncValue = ref<string[]>([]);
    const columsNum = ref([]);
    const columns = computed(() => [
      { text: translate('nanJing'), value: 'NanJing' },
      { text: translate('wuXi'), value: 'WuXi' },
      { text: translate('zangZu'), value: 'ZangZu' },
      { text: translate('beiJing'), value: 'BeiJing' },
      { text: translate('lianYunGang'), value: 'LianYunGang' },
      { text: translate('zheJiang'), value: 'ZheJiang' },
      { text: translate('jiangSu'), value: 'JiangSu' }
    ]);

    const multipleColumns = computed(() => [
      [
        { text: translate('monday'), value: 'Monday' },
        { text: translate('tuesday'), value: 'Tuesday' },
        { text: translate('wednesday'), value: 'Wednesday' },
        { text: translate('thursday'), value: 'Thursday' },
        { text: translate('friday'), value: 'Friday' }
      ],
      [
        { text: translate('morning'), value: 'Morning' },
        { text: translate('afternoon'), value: 'Afternoon' },
        { text: translate('evening'), value: 'Evening' }
      ]
    ]);

    const cascaderColumns = computed(() => [
      {
        text: translate('zheJiang'),
        value: 'ZheJiang',
        children: [
          {
            text: translate('hangZhou'),
            value: 'HangZhou',
            children: [
              { text: translate('xiHu'), value: 'XiHu' },
              { text: translate('yuHang'), value: 'YuHang' }
            ]
          },
          {
            text: translate('wenZhou'),
            value: 'WenZhou',
            children: [
              { text: translate('luCheng'), value: 'LuCheng' },
              { text: translate('ouHai'), value: 'OuHai' }
            ]
          }
        ]
      },
      {
        text: translate('fuJian'),
        value: 'FuJian',
        children: [
          {
            text: translate('fuZhou'),
            value: 'FuZhou',
            children: [
              { text: translate('guLou'), value: 'GuLou' },
              { text: translate('taiJiang'), value: 'TaiJiang' }
            ]
          },
          {
            text: translate('xiaMen'),
            value: 'XiaMen',
            children: [
              { text: translate('siMing'), value: 'SiMing' },
              { text: translate('haiCang'), value: 'HaiCang' }
            ]
          }
        ]
      }
    ]);

    const bf = {
      ZheJiang: [
        {
          text: translate('hangZhou'),
          value: 'HangZhou',
          children: [
            { text: translate('xiHu'), value: 'XiHu' },
            { text: translate('yuHang'), value: 'YuHang' }
          ]
        },
        {
          text: translate('wenZhou'),
          value: 'WenZhou',
          children: [
            { text: translate('luCheng'), value: 'LuCheng' },
            { text: translate('ouHai'), value: 'OuHai' }
          ]
        }
      ],
      FuJian: [
        {
          text: translate('fuZhou'),
          value: 'FuZhou',
          children: [
            { text: translate('guLou'), value: 'GuLou' },
            { text: translate('taiJiang'), value: 'TaiJiang' }
          ]
        },
        {
          text: translate('xiaMen'),
          value: 'XiaMen',
          children: [
            { text: translate('siMing'), value: 'SiMing' },
            { text: translate('haiCang'), value: 'HaiCang' }
          ]
        }
      ]
    };

    const jkColumns = ref([
      {
        text: translate('zheJiang'),
        value: 'ZheJiang',
        children: []
      },
      {
        text: translate('fuJian'),
        value: 'FuJian',
        children: []
      }
    ]);

    const effectColumns = ref([
      { text: '2022-01', value: 'January' },
      { text: '2022-02', value: 'February' },
      { text: '2022-03', value: 'March' },
      { text: '2022-04', value: 'April' },
      { text: '2022-05', value: 'May' },
      { text: '2022-06', value: 'June' },
      { text: '2022-07', value: 'July' },
      { text: '2022-08', value: 'August' },
      { text: '2022-09', value: 'September' },
      { text: '2022-10', value: 'October' },
      { text: '2022-11', value: 'November' },
      { text: '2022-12', value: 'December' }
    ]);
    const asyncColumns = ref<PickerOption[]>([]);

    const show = ref(false);
    const showDefult = ref(false);
    const showMultiple = ref(false);
    const showCascader = ref(false);
    const showAsync = ref(false);
    const showEffect = ref(false);
    const showTile = ref(false);

    const showJK = ref(false);

    const desc = reactive({
      index: '',
      defult: '',
      multiple: '',
      cascader: '',
      async: '',
      effect: ''
    });

    const open = (index: number) => {
      switch (index) {
        case 0:
          show.value = true;
          break;
        case 1:
          showDefult.value = true;
          break;
        case 2:
          showMultiple.value = true;
          break;
        case 3:
          showCascader.value = true;
          break;
        case 4:
          showAsync.value = true;
          break;
        default:
          showCascader.value = true;
      }
    };

    onMounted(() => {
      for (let i = 1; i < 60; i++) {
        columsNum.value.push({ text: i, value: i });
      }

      setTimeout(() => {
        asyncColumns.value = [
          { text: translate('nanJing'), value: 'NanJing' },
          { text: translate('wuXi'), value: 'WuXi' },
          { text: translate('zangZu'), value: 'ZangZu' },
          { text: translate('beiJing'), value: 'BeiJing' },
          { text: translate('lianYunGang'), value: 'LianYunGang' },
          { text: translate('zheJiang'), value: 'ZheJiang' },
          { text: translate('jiangSu'), value: 'JiangSu' }
        ];

        asyncValue.value = ['ZangZu'];
      }, 500);
    });

    const confirm = (tag: string, { selectedValue }: { selectedValue: string[] }) => {
      (desc as any)[tag] = selectedValue.join(',');
    };
    const change = ({ selectedValue }: { selectedValue: string[] }) => {
      console.log(selectedValue);
    };

    // change
    const changeJK = (data) => {
      const { columnIndex, selectedOptions, selectedValue } = data;
      if (columnIndex == 0) {
        jkColumns.value.forEach((colum) => {
          if (colum.value == selectedValue[columnIndex] && colum.children.length == 0) {
            colum.children = bf[selectedValue[columnIndex]];
          }
        });
      }
    };

    const alwaysFun = () => {
      showEffect.value = false;
      desc.effect = translate('always');
    };
    return {
      selectedValue,
      asyncValue,
      columns,
      show,
      showDefult,
      showAsync,
      ...toRefs(desc),
      showMultiple,
      showCascader,
      open,
      multipleColumns,
      cascaderColumns,
      confirm,
      change,
      asyncColumns,
      effectColumns,
      showEffect,
      alwaysFun,
      translate,
      selectedTime,
      columsNum,
      showTile,
      showJK,
      jkColumns,
      changeJK
    };
  }
});
</script>
<style lang="scss" scoped></style>
