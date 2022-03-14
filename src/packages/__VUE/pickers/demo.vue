<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell title="请选择城市" :desc="desc" @click="open(0)"></nut-cell>
    <!-- <nut-pickers v-model:visible="show" :columns="columns" title="城市选择"> </nut-pickers> -->

    <h2>默认选中项</h2>
    <nut-cell title="请选择城市" :desc="desc" @click="open(0)"></nut-cell>
    <nut-pickers v-model:visible="show" :columns="columns" title="城市选择"> </nut-pickers>

    <h2>多列样式</h2>
    <nut-cell title="请选择时间" :desc="desc" @click="open(2)"></nut-cell>
    <nut-pickers v-model:visible="showMultiple" :columns="multipleColumns" title="城市选择"> </nut-pickers>

    <h2>多级联动</h2>
    <nut-cell title="请选择地址" :desc="desc" @click="open(3)"></nut-cell>
    <nut-pickers v-model:visible="showCascader" :columns="cascaderColumns" title="城市选择"> </nut-pickers>
  </div>
</template>
<script lang="ts">
import { toRefs, ref } from 'vue';
import { createComponent } from '../../utils/create';
const { createDemo } = createComponent('pickers');
export default createDemo({
  props: {},
  setup() {
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

    const show = ref(false);
    const showMultiple = ref(false);
    const showCascader = ref(false);
    const desc = ref('');

    const open = (index: number) => {
      switch (index) {
        case 0:
          show.value = true;
          break;
        case 2:
          showMultiple.value = true;
          break;
        default:
          showCascader.value = true;
      }
    };

    return { columns, show, desc, showMultiple, showCascader, open, multipleColumns, cascaderColumns };
  }
});
</script>
<style lang="scss" scoped>
.demo {
}
</style>
