import { mount } from '@vue/test-utils';
import Checkbox from '../index.vue';

test('prop label', () => {
  const wrapper = mount(Checkbox, {
    props: {
      label: '复选框checkbox'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test('prop disabled', () => {
  const wrapper = mount(Checkbox, {
    props: {
      modelValue: true,
      disabled: true
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test('prop iconSize', () => {
  const wrapper = mount(Checkbox, {
    props: {
      modelValue: true,
      iconSize: '20'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
test('prop iconName iconActiveName', () => {
  const wrapper = mount(Checkbox, {
    props: {
      iconName: 'check-normal',
      iconActiveName: 'checked'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit "update:modelValue" event when checkbox is clicked', async () => {
  const wrapper = mount(Checkbox);

  wrapper.trigger('click');
  expect(wrapper.emitted('update:modelValue')![0]).toEqual([true]);

  await wrapper.setProps({ modelValue: true });
  wrapper.trigger('click');
  expect(wrapper.emitted('update:modelValue')![1]).toEqual([false]);
});
