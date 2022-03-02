import { mount, config } from '@vue/test-utils';
import SearchBar from '../index.vue';

import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('should emit update:modelValue event when input value changed', () => {
  const onUpdateModelValue = jest.fn();
  const wrapper = mount(SearchBar, {
    props: {
      'onUpdate:modelValue': onUpdateModelValue
    }
  });

  const input = wrapper.find('input');
  input.element.value = '1';
  input.trigger('input');

  expect(onUpdateModelValue).toHaveBeenCalledTimes(1);
});

test('should emit search event when enter key is pressed', () => {
  const wrapper = mount(SearchBar);

  const input = wrapper.find('input');
  input.trigger('keypress.enter');

  expect(wrapper.emitted('search')).toMatchSnapshot();
});

test('should render rightout slot correctly', () => {
  const wrapper = mount(SearchBar, {
    slots: {
      rightout: () => '搜索'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});

test('should render background prop correctly', () => {
  const wrapper = mount(SearchBar, {
    props: {
      background: 'linear-gradient(to right, #9866F0, #EB4D50)'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
