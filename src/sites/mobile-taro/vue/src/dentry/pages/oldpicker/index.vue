<template>
  <div class="demo">
    <h2>基础用法</h2>
    <nut-cell title="请选择城市" :desc="desc" @click="open(0)"></nut-cell>
    <h2>默认选中项</h2>
    <nut-cell title="请选择城市" :desc="desc1" @click="open(1)"></nut-cell>
    <h2>多列样式</h2>
    <nut-cell title="请选择时间" :desc="desc2" @click="open(2)"></nut-cell>
    <h2>多级联动</h2>
    <nut-cell title="请选择地址" :desc="desc3" @click="open(3)"></nut-cell>
    <h2>动态设置</h2>
    <nut-cell title="请选择地址" :desc="desc4" @click="open(4)"></nut-cell>

    <nut-oldpicker
      v-model:visible="show"
      :list-data="listData1"
      title="城市选择"
      @confirm="(val) => confirm(0, val)"
      @close="close"
    >
    </nut-oldpicker>
    <nut-oldpicker
      v-model:visible="show1"
      :list-data="listData1"
      title="城市选择"
      :defaultIndex="2"
      @confirm="(val) => confirm(1, val)"
      @close="close"
    >
    </nut-oldpicker>
    <nut-oldpicker v-model:visible="show2" :list-data="listData2" title="多列选择" @confirm="confirm2" @close="close">
    </nut-oldpicker>
    <nut-oldpicker v-model:visible="show3" :list-data="listData3" title="地址选择" @confirm="confirm3"></nut-oldpicker>
    <nut-oldpicker
      v-model:visible="show4"
      :list-data="listData4"
      :demoIndex="demoIndex"
      title="地址选择"
      @change="onChange"
      @confirm="(val) => confirm(4, val)"
    ></nut-oldpicker>
  </div>
</template>
<script lang="ts">
import { toRefs, ref } from 'vue';

export default {
  props: {},
  setup() {
    const listData1 = ['南京市', '无锡市', '海北藏族自治区', '北京市', '连云港市', '浙江市', '江苏市'];

    const listData2 = [
      {
        values: ['周一', '周二', '周三', '周四', '周五'],
        defaultIndex: 2
      },
      // 第二列
      {
        values: ['上午', '下午', '晚上'],
        defaultIndex: 1
      }
    ];
    const listData3 = [
      {
        text: '浙江',
        children: [
          {
            text: '杭州',
            children: [{ text: '西湖区' }, { text: '余杭区' }]
          },
          {
            text: '温州',
            children: [{ text: '鹿城区' }, { text: '瓯海区' }]
          }
        ]
      },
      {
        text: '福建',
        children: [
          {
            text: '福州',
            children: [{ text: '鼓楼区' }, { text: '台江区' }]
          },
          {
            text: '厦门',
            children: [{ text: '思明区' }, { text: '海沧区' }]
          }
        ]
      }
    ];

    const cities = {
      浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      福建: ['福州', '厦门', '莆田', '三明']
    };

    const listData4 = ref([
      {
        values: Object.keys(cities)
      },
      {
        values: cities['浙江']
      }
    ]);

    const show = ref(false);
    const show1 = ref(false);
    const show2 = ref(false);
    const show3 = ref(false);
    const show4 = ref(false);
    const showList = [show, show1, show2, show3, show4];
    const desc = ref(listData1[0]);
    const desc1 = ref(listData1[2]);
    const desc2 = ref(
      `${listData2[0].values[listData2[0].defaultIndex]} ${listData2[1].values[listData2[1].defaultIndex]}`
    );
    const desc3 = ref(
      `${listData3[0].text}
      ${listData3[0].children[0].text}
      ${listData3[0].children[0].children[0].text}`
    );
    const desc4 = ref('浙江 杭州');
    const descList = [desc, desc1, desc2, desc3, desc4];
    return {
      listData1,
      listData2,
      listData3,
      listData4,
      show,
      show1,
      show2,
      show3,
      show4,
      desc,
      desc1,
      desc2,
      desc3,
      desc4,
      open: (index: number) => {
        showList[index].value = true;
      },
      confirm: (type: number, res: any) => {
        if (type == 4) {
          descList[type].value = res[0] + ' ' + res[1];
        } else {
          descList[type].value = res;
        }
      },
      confirm2: (res: any) => {
        desc2.value = res.join(' ');
      },
      confirm3: (res: any) => {
        desc3.value = res.join(' ');
      },
      onChange: (res: any, columnIndex, dataIndex) => {
        listData4.value[1].values = cities[res[0]];
      }
    };
  }
};
</script>
