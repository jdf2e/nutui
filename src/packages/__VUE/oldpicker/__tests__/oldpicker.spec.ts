import { config, mount } from '@vue/test-utils';
import OldPicker from '../index.vue';
import NutIcon from '../../icon/index.vue';
import NutPupup from '../../popup/index.vue';
import NutPickerColumn from '../Column.vue';
import { nextTick, toRefs, reactive, ref, onMounted } from 'vue';
import { triggerDrag } from '../../../utils/test/event';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPupup,
    NutPickerColumn
  };
});

afterAll(() => {
  config.global.components = {};
});

const simpleColumns = ['南京市', '无锡市', '海北藏族自治区', '北京市', '连云港市', '浙江市', '江苏市'];
const multipleColumns = [
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
const multistageColumns = [
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

test('first render', async () => {
  const wrapper = mount(OldPicker, {
    props: {
      visible: true,
      listData: simpleColumns,
      isWrapTeleport: false
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-oldpicker__cancel').exists()).toBeTruthy();
  expect(wrapper.find('.nut-oldpicker__confirm').exists()).toBeTruthy();
});

test('simple list-data confirm & close event', async () => {
  const wrapper = mount(OldPicker, {
    props: {
      visible: true,
      listData: simpleColumns,
      isWrapTeleport: false
    }
  });
  await nextTick();
  wrapper.find('.nut-oldpicker__cancel').trigger('click');
  wrapper.find('.nut-oldpicker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')).toEqual([['南京市']]);
  expect(wrapper.emitted('close')).toEqual([[]]);
});

test('simple columns default checked item', async () => {
  const wrapper = mount(OldPicker, {
    props: {
      visible: true,
      listData: simpleColumns,
      isWrapTeleport: false,
      defaultIndex: 2
    }
  });
  await nextTick();
  wrapper.find('.nut-oldpicker__confirm').trigger('click');
  expect(wrapper.emitted('confirm')).toEqual([['海北藏族自治区']]);
});

test('multiple columns render', async () => {
  const wrapper = mount(OldPicker, {
    props: {
      visible: true,
      listData: multipleColumns,
      isWrapTeleport: false
    }
  });
  await nextTick();
  const columnItems = wrapper.findAll('.nut-oldpicker__columnitem');
  expect(columnItems.length).toEqual(2);
});

test('Multistage Tandem', async () => {
  const wrapper = mount(OldPicker, {
    props: {
      visible: true,
      listData: multistageColumns,
      isWrapTeleport: false
    }
  });
  await nextTick();
  wrapper.find('.nut-oldpicker__confirm').trigger('click');
  expect(wrapper.emitted().confirm[0]).toEqual([['浙江', '杭州', '西湖区']]);
});
