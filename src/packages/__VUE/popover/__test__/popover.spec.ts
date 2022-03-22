import { mount, config } from '@vue/test-utils';
import Popover from '../index.vue';

import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

const baseActions = [
  {
    name: '选项一',
    icon: 'my2'
  },
  {
    name: '选项二',
    icon: 'cart2'
  },
  {
    name: '选项三',
    icon: 'location2'
  }
];

test('should emit click event when clicking the list', async () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      list: baseActions
    }
  });
  await wrapper.find('.title-item').trigger('click');
  expect(wrapper.emitted('choose')![0]).toEqual([baseActions[0], 0]);
});

test('should not emit click event when the list is disabled', () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      list: [
        {
          name: '选项一',
          disabled: true
        }
      ]
    }
  });

  wrapper.find('.title-item').trigger('click');
  expect(wrapper.emitted('choose')).toBeFalsy();
});

test('should close popover when clicking the list', async () => {
  const wrapper = mount(Popover, {
    props: {
      visible: true,
      actions: baseActions
    }
  });

  await wrapper.find('.more-background').trigger('click');
  expect(wrapper.emitted('update:visible')![0]).toEqual([false]);
});

test('should watch placement prop and update location', async () => {
  const root = document.createElement('div');
  const wrapper = mount(Popover, {
    props: {
      visible: true
    }
  });

  await wrapper.setProps({
    location: 'right'
  });

  expect(root.innerHTML).toMatchSnapshot();
});

test('should change icon class prefix when using icon prop', () => {
  const wrapper = mount(Popover, {
    props: {
      list: [{ icon: 'success', name: 'foo' }]
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
