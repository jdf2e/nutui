<template>
  <div class="demo" :class="{ web: env === 'WEB' }">
    <Header v-if="env === 'WEB'" />
    <h2>基础用法</h2>
    <nut-picker
      :columns="columns"
      title="城市选择"
      :safeAreaInsetBottom="true"
      @change="change"
      @confirm="confirm"
    ></nut-picker>

    <h2>搭配 Popup 使用</h2>
    <nut-cell title="城市选择" :desc="popupDesc" @click="show = true"></nut-cell>
    <nut-popup position="bottom" v-model:visible="show" :safeAreaInsetBottom="true">
      <nut-picker
        v-model="popupValue"
        :columns="columns"
        title="城市选择"
        @confirm="popupConfirm"
        @cancel="show = false"
      >
        <nut-button block type="primary" style="margin-bottom: 20px">底部按钮</nut-button>
      </nut-picker>
    </nut-popup>

    <h2>默认选中项</h2>
    <nut-picker v-model="selectedValue" :columns="columns" title="城市选择" @confirm="confirm"> </nut-picker>

    <h2>多列样式</h2>
    <nut-picker v-model="selectedTime" :columns="multipleColumns" title="城市选择" @confirm="confirm"> </nut-picker>

    <h2>多级联动</h2>
    <nut-picker v-model="selectedCascader" :columns="cascaderColumns" title="城市选择" @confirm="confirm"></nut-picker>

    <h2>异步获取</h2>
    <nut-picker v-model="asyncValue" :columns="asyncColumns" title="城市选择" @confirm="confirm"></nut-picker>

    <h2>自定义字段名</h2>
    <nut-picker
      :columns="customColumns"
      :field-names="{
        text: 'name',
        value: 'code',
        children: 'list'
      }"
      title="请选择城市"
      @confirm="customCloumnConfirm"
    >
    </nut-picker>

    <nut-toast :msg="msg" v-model:visible="showToast" type="text" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
import { PickerOption } from '@/packages/__VUE/picker/types';
const env = Taro.getEnv();

const selectedValue = ref(['ZheJiang']);
const selectedTime = ref(['Wednesday', 'Afternoon']);
const selectedCascader = ref(['FuJian', 'FuZhou', 'TaiJiang']);
const asyncValue = ref<string[]>();
const msg = ref();
const showToast = ref(false);
const popupValue = ref();

const columns = ref([
  { text: '南京', value: 'NanJing' },
  { text: '无锡', value: 'WuXi' },
  { text: '海北', value: 'ZangZu' },
  { text: '北京', value: 'BeiJing' },
  { text: '连云港', value: 'LianYunGang' },
  { text: '浙江', value: 'ZheJiang' },
  { text: '江苏', value: 'JiangSu' }
]);

const multipleColumns = ref([
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' }
  ],
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' }
  ]
]);

const cascaderColumns = ref([
  {
    text: '浙江',
    value: 'ZheJiang',
    children: [
      {
        text: '杭州',
        value: 'HangZhou',
        children: [
          { text: '西湖区', value: 'XiHu' },
          { text: '余杭区', value: 'YuHang' }
        ]
      },
      {
        text: '温州',
        value: 'WenZhou',
        children: [
          { text: '鹿城区', value: 'LuCheng' },
          { text: '瓯海区', value: 'OuHai' }
        ]
      }
    ]
  },
  {
    text: '福建',
    value: 'FuJian',
    children: [
      {
        text: '福州',
        value: 'FuZhou',
        children: [
          { text: '鼓楼区', value: 'GuLou' },
          { text: '台江区', value: 'TaiJiang' }
        ]
      },
      {
        text: '厦门',
        value: 'XiaMen',
        children: [
          { text: '思明区', value: 'SiMing' },
          { text: '海沧区', value: 'HaiCang' }
        ]
      }
    ]
  }
]);

const asyncColumns = ref<PickerOption[]>([]);

const customColumns = ref([
  {
    name: '浙江',
    code: 'ZheJiang',
    list: [
      {
        name: '杭州',
        code: 'HangZhou',
        list: [
          { name: '西湖', code: 'XiHu' },
          { name: '余杭', code: 'YuHang' }
        ]
      },
      {
        name: '温州',
        code: 'WenZhou',
        list: [
          { name: '鹿城区', code: 'LuCheng' },
          { name: '瓯海区', code: 'OuHai' }
        ]
      }
    ]
  }
]);

const show = ref(false);
const popupDesc = ref();

onMounted(() => {
  setTimeout(() => {
    asyncColumns.value = [
      { text: '南京', value: 'NanJing' },
      { text: '无锡', value: 'WuXi' },
      { text: '海北', value: 'ZangZu' },
      { text: '北京', value: 'BeiJing' },
      { text: '连云港', value: 'LianYunGang' },
      { text: '浙江', value: 'ZheJiang' },
      { text: '江苏', value: 'JiangSu' }
    ];

    asyncValue.value = ['ZangZu'];
  }, 1000);
});

const confirm = ({ selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
  showToast.value = true;
  msg.value = selectedOptions.map((val: any) => val.text).join(',');
};

const change = ({ selectedValue }: { selectedValue: string[] }) => {
  console.log(selectedValue);
};

const popupConfirm = ({ selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
  popupDesc.value = selectedOptions.map((val: any) => val.text).join(',');
  show.value = false;
};

const customCloumnConfirm = ({ selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
  showToast.value = true;
  msg.value = selectedOptions.map((val: any) => val.name).join(',');
};
</script>
