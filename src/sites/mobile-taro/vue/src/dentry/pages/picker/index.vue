<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell
      title="请选择城市"
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
      title="城市选择"
      @change="change"
      @confirm="(options) => confirm('index', options)"
    ></nut-picker>

    <h2>默认选中项</h2>
    <nut-cell
      title="请选择城市"
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
      title="城市选择"
      @confirm="(options) => confirm('defult', options)"
    >
    </nut-picker>

    <h2>平铺展示</h2>
    <nut-cell
      title="请选择城市"
      :desc="title"
      @click="
        () => {
          showTitle = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model:visible="showTitle"
      :columns="columns"
      title="城市选择"
      :three-dimensional="false"
      @confirm="(options) => confirm('title', options)"
    >
    </nut-picker>

    <h2>多列样式</h2>
    <nut-cell
      title="请选择时间"
      :desc="multiple"
      @click="
        () => {
          showMultiple = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model:visible="showMultiple"
      :columns="multipleColumns"
      title="城市选择"
      @confirm="(options) => confirm('multiple', options)"
    >
    </nut-picker>

    <h2>多级联动</h2>
    <nut-cell
      title="请选择地址"
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
      title="城市选择"
      @confirm="(options) => confirm('cascader', options)"
    ></nut-picker>

    <h2>异步获取</h2>
    <nut-cell
      title="请选择地址"
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
      title="城市选择"
      @confirm="(options) => confirm('async', options)"
    ></nut-picker>

    <h2>自定义按钮</h2>
    <nut-cell
      title="请选择有效日期"
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
      title="日期选择"
      @confirm="(options) => confirm('effect', options)"
    >
      <nut-button block type="primary" @click="alwaysFun">永远有效</nut-button></nut-picker
    >

    <h2>异步获取</h2>
    <nut-cell
      title="异步获取"
      :desc="effect"
      @click="
        () => {
          showPort = true;
        }
      "
    ></nut-cell>
    <nut-picker
      v-model:visible="showPort"
      :columns="portColumns"
      title="异步获取"
      @confirm="(options) => confirm('effect', options)"
      @change="portChange"
    ></nut-picker>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, ref, toRefs } from 'vue';
import { PickerOption } from '../../../../../../../packages/__VUE/picker/types';
export default {
  props: {},
  setup() {
    const selectedValue = ref(['ZheJiang']);
    const asyncValue = ref<string[]>([]);
    const columsNum = ref([]);
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
    const showDefult = ref(false);
    const showMultiple = ref(false);
    const showCascader = ref(false);
    const showAsync = ref(false);
    const showEffect = ref(false);
    const showPort = ref(false);
    const showTitle = ref(false);

    const desc = reactive({
      index: '',
      defult: '',
      multiple: '',
      cascader: '',
      async: '',
      effect: '',
      title: ''
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
          { text: '南京市', value: 'NanJing' },
          { text: '无锡市', value: 'WuXi' },
          { text: '海北藏族自治区', value: 'ZangZu' },
          { text: '北京市', value: 'BeiJing' },
          { text: '连云港市', value: 'LianYunGang' },
          { text: '浙江市', value: 'ZheJiang' },
          { text: '江苏市', value: 'JiangSu' }
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

    const portChange = (chooseDate: any) => {
      const { columnIndex, selectedOptions, selectedValue } = chooseDate;
      console.log(chooseDate);
      if (columnIndex == 0) {
        //  if(portColumns.value[0].children.length == 0){

        //  }
        console.log('选择后更新');
        portColumns.value[0].children = ([] as any).concat([
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
        ]);
      }
    };

    const alwaysFun = () => {
      showEffect.value = false;
      desc.effect = '永远有效';
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
      columsNum,
      showPort,
      showTitle,
      portColumns,
      portChange
    };
  }
};
</script>
