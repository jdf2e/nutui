import { mount } from '@vue/test-utils';
import Radiogroup from '../index.vue';

test('prop modelValue', () => {
  const wrapper = mount(Radiogroup, {
    props: {
      modelValue: '1'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
