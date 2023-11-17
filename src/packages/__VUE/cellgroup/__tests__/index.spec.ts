import CellGroup from '../index.vue';
import { mount } from '@vue/test-utils';
test('should render title、desc slot correctly', () => {
  const wrapper = mount(CellGroup, {
    slots: {
      title: () => 'Custom Title',
      desc: () => 'Custom Desc'
    }
  });
  expect(wrapper.html()).toMatchSnapshot();
});
