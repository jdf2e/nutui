import { mount } from '@vue/test-utils';
import Drag from '../index.vue';

test('should render default slot correctly', () => {
  const wrapper = mount(Drag, {
    slots: {
      default: () => 'Custom Message'
    }
  });
  expect(wrapper.find('.nut-drag').html()).toMatchSnapshot();
});
