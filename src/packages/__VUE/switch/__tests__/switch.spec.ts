import { mount, config } from '@vue/test-utils';
import Switch from '../index.vue';

beforeAll(() => {
  config.global.components = {};
});

afterAll(() => {
  config.global.components = {};
});

test('render ok', () => {
  const wrapper = mount(Switch);

  expect(wrapper.html()).toMatchSnapshot();
});

test('prop modelValue test', () => {
  const wrapper = mount(Switch, {
    props: {
      modelValue: true
    }
  });
  expect(wrapper.classes()).toContain('nut-switch-open');
});

test('prop disable test', () => {
  const wrapper = mount(Switch, {
    props: {
      disable: true
    }
  });
  expect(wrapper.classes()).toContain('nut-switch-disable');
});

test('prop loading test', () => {
  const wrapper = mount(Switch, {
    props: {
      loading: true
    }
  });
  expect(wrapper.find('.nut-icon-loading1')).toBeTruthy();
});

test('prop activeText test', () => {
  const wrapper = mount(Switch, {
    props: {
      activeText: 'test text'
    }
  });
  expect(wrapper.html()).toContain('test text');
});

test('prop activeValue test', () => {
  const wrapper = mount(Switch, {
    props: {
      modelValue: '0',
      activeText: '开',
      activeValue: '1',
      inactiveText: '关',
      inactiveValue: '0'
    }
  });
  expect(wrapper.find('.close').isVisible()).toBeTruthy();
});

test('emit click event', () => {
  const wrapper = mount(Switch);

  wrapper.trigger('click');
  expect(wrapper.emitted('change')).toBeTruthy();
});
