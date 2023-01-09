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
        <nut-button block type="primary" style="margin-bottom: 20px">永远有效</nut-button>
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

    <nut-toast :msg="msg" v-model:visible="showToast" type="text" />
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from 'vue';
import Taro from '@tarojs/taro';
import Header from '../../../components/header.vue';
import { PickerOption } from '../../../../../../../packages/__VUE/picker/types';
export default {
  props: {},
  components: {
    Header
  },
  setup() {
    const env = Taro.getEnv();

    const selectedValue = ref(['ZheJiang']);
    const selectedTime = ref(['Wednesday', 'Afternoon']);
    const selectedCascader = ref(['FuJian', 'FuZhou', 'TaiJiang']);
    const asyncValue = ref<string[]>();
    const msg = ref();
    const showToast = ref(false);
    const popupValue = ref();

    const columns = ref([
      { text: '南京市', value: 'NanJing' },
      { text: '无锡市', value: 'WuXi' },
      { text: '海北藏族自治区', value: 'ZangZu' },
      { text: '北京市', value: 'BeiJing' },
      { text: '连云港市', value: 'LianYunGang' },
      { text: '浙江市', value: 'ZheJiang' },
      { text: '江苏市', value: 'JiangSu' }
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

    const portColumns = ref([
      {
        text: '浙江',
        value: 'ZheJiang',
        children: []
      },
      {
        text: '福建',
        value: 'FuJian',
        children: []
      }
    ]);
    const asyncColumns = ref<PickerOption[]>([]);

    const show = ref(false);
    const popupDesc = ref();

    onMounted(() => {
      setTimeout(() => {
        asyncColumns.value = [
          { text: '南京市', value: 'NanJing' },
          { text: '无锡市', value: 'WuXi' },
          { text: '海北藏族自治区', value: 'ZangZu' },
          { text: '北京市', value: 'BeiJing' },
          { text: '连云港市', value: 'LianYunGang' },
          { text: '浙江市', value: 'ZheJiang' },
          { text: '江苏市', value: 'JiangSu' }
        ];

        asyncValue.value = ['ZangZu'];
      }, 1000);
    });

    const confirm = ({ selectedValue, selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
      showToast.value = true;
      msg.value = selectedOptions.map((val: any) => val.text).join(',');
    };

    const change = ({ selectedValue }: { selectedValue: string[] }) => {
      console.log(selectedValue);
    };

    const popupConfirm = ({ selectedValue, selectedOptions }: { selectedValue: string[]; selectedOptions: any }) => {
      popupDesc.value = selectedOptions.map((val: any) => val.text).join(',');
      show.value = false;
    };

    return {
      selectedValue,
      selectedTime,
      selectedCascader,
      asyncValue,
      columns,
      show,
      multipleColumns,
      cascaderColumns,
      confirm,
      change,
      asyncColumns,
      effectColumns,
      showToast,
      portColumns,
      popupConfirm,
      popupDesc,
      msg,
      env,
      popupValue
    };
  }
};
</script>
