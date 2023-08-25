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

    <h2>{{ translate('3d') }}</h2>
    <nut-picker
      v-model="selectedTileValue"
      :columns="columns"
      :title="translate('chooseCity')"
      three-dimensional
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

    <h2>{{ translate('customFieldNames') }}</h2>
    <nut-picker
      :columns="customColumns"
      :field-names="{
        text: 'name',
        value: 'code',
        children: 'list'
      }"
      :title="translate('chooseCity')"
      @confirm="customCloumnConfirm"
    >
    </nut-picker>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { createComponent } from '@/packages/utils/create';
import { PickerOption } from './types';
const { translate } = createComponent('picker');
import { useTranslate } from '@/sites/assets/util/useTranslate';
import { Internation } from './doc.en';
import { showToast } from '@/packages/nutui.vue';

useTranslate(Internation);

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

const customColumns = computed(() => [
  {
    name: translate('zheJiang'),
    code: 'ZheJiang',
    list: [
      {
        name: translate('hangZhou'),
        code: 'HangZhou',
        list: [
          { name: translate('xiHu'), code: 'XiHu' },
          { name: translate('yuHang'), code: 'YuHang' }
        ]
      },
      {
        name: translate('wenZhou'),
        code: 'WenZhou',
        list: [
          { name: translate('luCheng'), code: 'LuCheng' },
          { name: translate('ouHai'), code: 'OuHai' }
        ]
      }
    ]
  }
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

const confirm = ({ selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
  showToast.text(selectedOptions.map((val: any) => val.text).join(','));
};

const customCloumnConfirm = ({ selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
  showToast.text(selectedOptions.map((val: any) => val.name).join(','));
};

const popupConfirm = ({ selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
  popupDesc.value = selectedOptions.map((val: any) => val.text).join(',');
  show.value = false;
};
</script>
