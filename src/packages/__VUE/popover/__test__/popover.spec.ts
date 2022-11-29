import { config, mount } from '@vue/test-utils';
import Popover from '../index.vue';
import NutPupup from '../../popup/index.vue';
import NutIcon from '../../icon/index.vue';
import { nextTick, toRefs, reactive, ref, onMounted } from 'vue';

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPupup
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

test('Action Disabled', async () => {
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
  expect(wrapper.emitted('select')).toBeFalsy();
});

test('Set Props Position', async () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      list: iconItemList,
      teleportDisable: false,
      location: 'bottom-start'
    }
  });
  await nextTick();
  expect(wrapper.find('.nut-popover-arrow--bottom-start').exists()).toBeTruthy();
  expect(wrapper.find('.nut-popover-content--bottom-start').exists()).toBeTruthy();
});
