import { mount } from '@vue/test-utils';
import ActionSheet from '../index.vue';
import { nextTick } from 'vue';

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
  const menuItem = wrapper.findAll('.nut-action-sheet__item');
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
  const menuItem = wrapper.find('.nut-action-sheet__item');
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
  const subdesc = wrapper.find('.nut-action-sheet__subdesc');
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
  const item = wrapper.findAll<HTMLElement>('.nut-action-sheet__item');
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
  const item = wrapper.findAll<HTMLElement>('.nut-action-sheet__item');
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

  wrapper.find('.nut-action-sheet__item').trigger('click');
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
  const desc = wrapper.find('.nut-action-sheet__desc');
  const title = wrapper.find('.nut-action-sheet__title');
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
  wrapper.find('.nut-action-sheet__cancel').trigger('click');
  expect(wrapper.emitted('cancel')).toHaveLength(1);
});
