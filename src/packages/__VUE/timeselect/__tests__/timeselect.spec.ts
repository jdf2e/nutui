import { mount } from '@vue/test-utils';
import TimeSelect from '../index.vue';

test('show correctly', async () => {
  const wrapper = mount(TimeSelect, {
    props: {
      visible: true
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
