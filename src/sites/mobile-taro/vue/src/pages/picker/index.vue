<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-picker mode="selector" :list-data="listData1" @confirm="confirm">
      <nut-cell title="请选择城市" :desc="desc"></nut-cell>
    </nut-picker>
    <h2>多列样式</h2>
    <nut-picker mode="multiSelector" :list-data="listData2" @confirm="confirm2">
      <nut-cell title="请选择时间" :desc="desc2"></nut-cell>
    </nut-picker>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue';
export default {
  props: {},
  setup() {
    const listData1 = [
      '南京市',
      '无锡市',
      '海北藏族自治区',
      '北京市',
      '连云港市',
      '浙江市',
      '江苏市'
    ];
    const listData2 = ref([
      {
        values: ['周一', '周二', '周三', '周四', '周五'],
        defaultIndex: 2
      },
      {
        values: ['上午', '下午', '晚上'],
        defaultIndex: 1
      }
    ]);

    const desc = ref(listData1[0]);
    const desc2 = ref(
      `${listData2.value[0].values[listData2.value[0].defaultIndex]} ${
        listData2.value[1].values[listData2.value[1].defaultIndex]
      }`
    );
    const confirm = (value: any, res: any) => {
      desc.value = res;
    };

    const confirm2 = (value: any, res: any) => {
      desc2.value = res.join(' ');
      listData2.value.forEach((item, idx) => {
        item.defaultIndex = value[idx];
      });
    };

    return {
      listData1,
      listData2,
      desc,
      desc2,
      confirm,
      confirm2
    };
  }
};
</script>
