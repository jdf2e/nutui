import { mount } from '@vue/test-utils';
import Switch from '../index.vue';

test('render ok', () => {
  const wrapper = mount(Switch);

  expect(wrapper.classes()).toContain('nut-switch-base');
});

test('emit click event', () => {
  const wrapper = mount(Switch);

  wrapper.trigger('click');
  expect(wrapper.emitted('change')).toBeTruthy();
});

test('prop modelValue test', () => {
  const wrapper = mount(Switch, {
    props: {
      modelValue: true
    }
  });
  expect(wrapper.classes()).toContain('switch-open');
});

test('prop disable test', () => {
  const wrapper = mount(Switch, {
    props: {
      disable: true
    }
  });
  expect(wrapper.classes()).toContain('nut-switch-disable');
});

test('prop activeText test', () => {
  const wrapper = mount(Switch, {
    props: {
      activeText: 'test text'
    }
  });
  expect(wrapper.html()).toContain('test text');
});
