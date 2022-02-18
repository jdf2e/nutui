import { mount } from '@vue/test-utils';
import { testComponents } from '@/packages/nutui.vue';

export function snapshotDemo(Demo: any, option: any = {}) {
  test('should render demo and match snapshot', async () => {
    const wrapper = mount(Demo, {
      global: {
        components: testComponents
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });
}
