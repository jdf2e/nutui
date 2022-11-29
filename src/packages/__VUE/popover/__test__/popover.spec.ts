import { config, mount } from '@vue/test-utils';
import Popover from '../index.vue';
import NutPupup from '../../popup/index.vue';
import NutOverlay from '../../overlay/index.vue';
import NutIcon from '../../icon/index.vue';
import { nextTick, reactive } from 'vue';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPupup,
    NutOverlay
  };
});

afterAll(() => {
  config.global.components = {};
});

const iconItemList = [{ name: 'option1' }, { name: 'option2' }, { name: 'option3' }];

const listDisabled = reactive([
  { name: 'option1', disabled: true },
  { name: 'option2', disabled: true },
  { name: 'option3' }
]);

test('first render', async () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      list: iconItemList,
      teleportDisable: false
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-popover-menu-item').exists()).toBeTruthy();
});

test('Props theme dark', async () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      list: iconItemList,
      teleportDisable: false,
      theme: 'dark'
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-popover--dark').exists()).toBeTruthy();
});

test('should not emit select event when the action is disabled', async () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      list: listDisabled,
      teleportDisable: false
    }
  });
  await nextTick();
  expect(wrapper.findAll('.nut-popover-menu-disabled').length).toEqual(2);

  wrapper.find('.nut-popover-menu-item').trigger('click');
  expect(wrapper.emitted('choose')).toBeFalsy();
});

test('should close popover when clicking the action', async () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      list: iconItemList,
      teleportDisable: false
    }
  });
  await nextTick();

  await wrapper.find('.nut-popover-menu-item').trigger('click');
  expect(wrapper.emitted('update:visible')![0]).toEqual([false]);

  await wrapper.setProps({ closeOnClickAction: false });
  await wrapper.find('.nut-popover-menu-item').trigger('click');
  expect(wrapper.emitted('update:visible')).toHaveLength(1);
});

test('Set Props Position', async () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      list: iconItemList,
      teleportDisable: false,
      location: 'top-start'
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-popover-arrow--top-start').exists()).toBeTruthy();
});
