import { mount, config } from '@vue/test-utils';
import NavBar from '../index.vue';

import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should render left slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      left: () => 'Custom Left'
    }
  });

  expect(wrapper.find('.nut-navbar__left').html()).toMatchSnapshot();
});

test('should render left slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      right: () => 'Custom Right'
    }
  });

  expect(wrapper.find('.nut-navbar__right').html()).toMatchSnapshot();
});

test('should render title slot correctly', () => {
  const wrapper = mount(NavBar, {
    slots: {
      title: () => 'Custom Title'
    }
  });

  expect(wrapper.find('.nut-navbar__title').html()).toMatchSnapshot();
});

test('should emit click-right event when clicking right text', () => {
  const wrapper = mount(NavBar, {
    props: {
      desc: 'right'
    }
  });

  wrapper.find('.right_text').trigger('click');
  expect(wrapper.emitted('on-click-right')).toBeTruthy();
});
