<template>
  <div class="demo">
    <h2>{{ translate('basic') }}</h2>
    <nut-picker :columns="columns" :title="translate('chooseCity')" @confirm="confirm"></nut-picker>

    <h2>{{ translate('popupDesc') }}</h2>
    <nut-cell :title="translate('chooseCity')" :desc="popupDesc" @click="show = true"></nut-cell>
    <nut-popup position="bottom" v-model:visible="show">
      <nut-picker
        v-model="popupValue"
        :columns="columns"
        :title="translate('chooseCity')"
        @confirm="popupConfirm"
        @cancel="show = false"
      >
        <nut-button block type="primary">{{ translate('always') }}</nut-button>
      </nut-picker>
    </nut-popup>

    <h2>{{ translate('defaultSelected') }}</h2>
    <nut-picker v-model="selectedValue" :columns="columns" :title="translate('chooseCity')" @confirm="confirm">
    </nut-picker>

    <h2>{{ translate('tileDesc') }}</h2>
    <nut-picker
      v-model="selectedTileValue"
      :columns="columns"
      :title="translate('chooseCity')"
      :threeDimensional="false"
      @confirm="confirm"
    >
    </nut-picker>

    <h2>{{ translate('multipleColumns') }}</h2>
    <nut-picker v-model="selectedTime" :columns="multipleColumns" :title="translate('chooseTime')" @confirm="confirm">
    </nut-picker>

    <h2>{{ translate('cascade') }}</h2>
    <nut-picker
      v-model="selectedCascader"
      :columns="cascaderColumns"
      :title="translate('chooseCity')"
      @confirm="confirm"
    ></nut-picker>

    <h2>{{ translate('async') }}</h2>
    <nut-picker
      v-model="asyncValue"
      :columns="asyncColumns"
      :title="translate('chooseCity')"
      @confirm="confirm"
    ></nut-picker>
  </div>
</template>
<script lang="ts">
import { ref, onMounted, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { PickerOption } from './types';
const { createDemo, translate } = createComponent('picker');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Internation } from './doc.en';
import { showToast } from '@/packages/nutui.vue';

useTranslate(Internation);
export default createDemo({
  props: {},
  setup() {
    const selectedValue = ref(['ZheJiang']);
    const selectedTileValue = ref(['ZheJiang']);
    const selectedTime = ref(['Wednesday', 'Afternoon']);
    const selectedCascader = ref(['FuJian', 'FuZhou', 'TaiJiang']);
    const asyncValue = ref<string[]>([]);
    const popupValue = ref();
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
    const popupDesc = ref();
    onMounted(() => {
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

    const confirm = ({ selectedValue, selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
      showToast.text(selectedOptions.map((val: any) => val.text).join(','));
    };

    const popupConfirm = ({ selectedValue, selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
      popupDesc.value = selectedOptions.map((val: any) => val.text).join(',');
      show.value = false;
    };

    return {
      selectedValue,
      asyncValue,
      columns,
      show,
      multipleColumns,
      cascaderColumns,
      confirm,
      asyncColumns,
      effectColumns,
      translate,
      selectedTime,
      selectedCascader,
      selectedTileValue,
      popupConfirm,
      popupDesc,
      popupValue
    };
  }
});
</script>
<style lang="scss" scoped></style>
