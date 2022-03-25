<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell title="请选择城市" :desc="index" @click="open(0)"></nut-cell>
    <nut-picker
      v-model:visible="show"
      :columns="columns"
      title="城市选择"
      @change="change"
      @confirm="(options) => confirm('index', options)"
    >
    </nut-picker>

    <h2>默认选中项</h2>
    <nut-cell title="请选择城市" :desc="defult" @click="open(1)"></nut-cell>
    <nut-picker
      v-model="selectedValue"
      v-model:visible="showDefult"
      :columns="columns"
      title="城市选择"
      @confirm="(options) => confirm('defult', options)"
    >
    </nut-picker>

    <h2>多列样式</h2>
    <nut-cell title="请选择时间" :desc="multiple" @click="open(2)"></nut-cell>
    <nut-picker
      v-model:visible="showMultiple"
      :columns="multipleColumns"
      title="城市选择"
      @confirm="(options) => confirm('multiple', options)"
    >
    </nut-picker>

    <h2>多级联动</h2>
    <nut-cell title="请选择地址" :desc="cascader" @click="open(3)"></nut-cell>
    <nut-picker
      v-model:visible="showCascader"
      :columns="cascaderColumns"
      title="城市选择"
      @confirm="(options) => confirm('cascader', options)"
    ></nut-picker>

    <h2>异步获取</h2>
    <nut-cell title="请选择地址" :desc="async" @click="open(4)"></nut-cell>
    <nut-picker
      v-model="asyncValue"
      v-model:visible="showAsync"
      :columns="asyncColumns"
      title="城市选择"
      @confirm="(options) => confirm('async', options)"
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

    const asyncColumns = ref<PickerOption[]>([]);

    const show = ref(false);
    const showDefult = ref(false);
    const showMultiple = ref(false);
    const showCascader = ref(false);
    const showAsync = ref(false);

    const desc = reactive({
      index: '',
      defult: '',
      multiple: '',
      cascader: '',
      async: ''
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

    const confirm = (tag: string, { selectedValue }: { selectedValue: string[] }) => {
      desc[tag] = selectedValue.join(',');
    };
    const change = ({ selectedValue }: { selectedValue: string[] }) => {
      console.log(selectedValue);
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
      asyncColumns,
      confirm,
      change
    };
  }
};
</script>
