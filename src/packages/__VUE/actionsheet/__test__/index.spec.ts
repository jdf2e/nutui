import { config, mount } from '@vue/test-utils';
import ActionSheet from '../index.vue';
import NutIcon from '../../icon/index.vue';
import NutPopup from '../../popup/index.vue';
import { nextTick } from 'vue';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPopup
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should render ActionSheet when visible is true', async () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true,
      teleportDisable: false,
      menuItems: [
        {
          name: '选项一'
        },
        {
          name: '选项二'
        },
        {
          name: '选项三'
        }
      ]
    }
  });
  const menuItem = wrapper.findAll('.nut-actionsheet-item');
  expect(menuItem.length).toBe(3);
});
test('should emit select event after clicking option', async () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true,
      teleportDisable: false,
      menuItems: [{ name: '选项一' }]
    }
  });
  const menuItem = wrapper.find('.nut-actionsheet-item');
  menuItem.trigger('click');
  await nextTick();
  expect(wrapper.emitted('choose')).toHaveLength(1);
  expect(wrapper.emitted('choose')![0]).toEqual([
    {
      name: '选项一'
    },
    0
  ]);
});

test('should render sure actionsheet when use custom props', () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true,
      teleportDisable: false,
      optionTag: 'names',
      optionSubTag: 'subname',
      menuItems: [{ names: '选项一', subname: '描述信息' }]
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
  let subdesc = wrapper.find('.subdesc');
  expect(subdesc.html()).toContain('描述信息');
});

test('should render sure choose when use choose-tag-value', async () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true,
      teleportDisable: false,
      chooseTagValue: '选项一',
      menuItems: [{ name: '选项一' }, { name: '选项二' }]
    }
  });
  let item = wrapper.findAll<HTMLElement>('.nut-actionsheet-item');
  expect(item[0].element.style.color).toContain('238, 10, 36');
});

test('should render sure color when use color', async () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true,
      teleportDisable: false,
      chooseTagValue: '选项一',
      color: 'green',
      menuItems: [{ name: '选项一' }, { name: '选项二' }]
    }
  });
  let item = wrapper.findAll<HTMLElement>('.nut-actionsheet-item');
  expect(item[0].element.style.color).toContain('green');
});

test('should not emit select event after clicking disabled option', async () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true,
      teleportDisable: false,
      menuItems: [{ name: '选项一', disabled: true }]
    }
  });

  wrapper.find('.nut-actionsheet-item').trigger('click');
  await nextTick();
  expect(wrapper.emitted('select')).toBeFalsy();
});

test('should render description when use description', async () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true,
      teleportDisable: false,
      description: '这是一段描述信息',
      title: '主标题',
      menuItems: [{ name: '选项一', disabled: true }]
    }
  });
  let desc = wrapper.find('.desc');
  let title = wrapper.find('.nut-actionsheet-title');
  expect(desc.exists()).toBeTruthy();
  expect(title.exists()).toBeTruthy();
});

test('should emit cancel event after clicking cancel ', () => {
  const wrapper = mount(ActionSheet, {
    props: {
      visible: true,
      teleportDisable: false,
      menuItems: [{ name: '选项一' }],
      cancelTxt: '取消'
    }
  });
  wrapper.find('.nut-actionsheet-cancel').trigger('click');
  expect(wrapper.emitted('cancel')).toHaveLength(1);
});
