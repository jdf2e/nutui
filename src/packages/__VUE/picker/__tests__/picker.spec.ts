import { config, mount } from '@vue/test-utils';
import Picker from '../index.vue';
import NutIcon from '../../icon/index.vue';
import NutPupup from '../../popup/index.vue';
import NutOverlay from '../../overlay/index.vue';
import NutPickerColumn from '../Column.vue';
import { nextTick } from 'vue';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPupup,
    NutPickerColumn,
    NutOverlay
  };
});

afterAll(() => {
  config.global.components = {};
});

const simpleColumns = [
  { text: '南京市', value: 'NanJing' },
  { text: '无锡市', value: 'WuXi' },
  { text: '海北藏族自治区', value: 'ZangZu' },
  { text: '北京市', value: 'BeiJing' },
  { text: '连云港市', value: 'LianYunGang' }
];
const multipleColumns = [
  [
    { text: '周一', value: 'Monday' },
    { text: '周二', value: 'Tuesday' },
    { text: '周三', value: 'Wednesday' },
    { text: '周四', value: 'Thursday' },
    { text: '周五', value: 'Friday' }
  ],
  // 第二列
  [
    { text: '上午', value: 'Morning' },
    { text: '下午', value: 'Afternoon' },
    { text: '晚上', value: 'Evening' }
  ]
];
const multistageColumns = [
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
];

test('first render', async () => {
  const wrapper = mount(Picker, {
    props: {
      visible: true,
      listData: simpleColumns,
      teleportDisable: false
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-picker__left').exists()).toBeTruthy();
  expect(wrapper.find('.nut-picker__right').exists()).toBeTruthy();
});

test('simple list-data confirm & close event', async () => {
  const wrapper = mount(Picker, {
    props: {
      visible: true,
      columns: simpleColumns,
      teleportDisable: false
    }
  });
  await nextTick();
  wrapper.find('.nut-picker__left').trigger('click');
  wrapper.find('.nut-picker__right').trigger('click');
  expect(wrapper.emitted('confirm')![0]).toEqual([
    {
      selectedOptions: [{ text: '南京市', value: 'NanJing' }],
      selectedValue: ['NanJing']
    }
  ]);
});

test('simple columns default checked item', async () => {
  const wrapper = mount(Picker, {
    props: {
      modelValue: ['WuXi'],
      visible: true,
      columns: simpleColumns,
      teleportDisable: false
    }
  });
  await nextTick();
  wrapper.find('.nut-picker__right').trigger('click');
  expect(wrapper.emitted('confirm')![0]).toEqual([
    {
      selectedOptions: [{ text: '无锡市', value: 'WuXi' }],
      selectedValue: ['WuXi']
    }
  ]);
});

test('multiple columns render', async () => {
  const wrapper = mount(Picker, {
    props: {
      visible: true,
      columns: multipleColumns,
      teleportDisable: false
    }
  });
  await nextTick();
  const columnItems = wrapper.findAll('.nut-picker__columnitem');
  expect(columnItems.length).toEqual(2);
});
