import { mount } from '@vue/test-utils';
import Indicator from '../index.vue';

describe('Indicator', () => {
  test('should be shown when passing size and current', async () => {
    const wrapper = mount(Indicator, {
      props: {
        size: 5,
        current: 3
      }
    });

    expect(wrapper.findAll('.nut-indicator--dot').length).toBe(4);
    expect(wrapper.findAll('.nut-indicator--number').length).toBe(1);
    const number = wrapper.find(':nth-of-type(3)');
    expect(number.classes()).toContain('nut-indicator--number');
  });
  test('should be shown when passing block and align and fillZero', () => {
    const wrapper = mount(Indicator, {
      props: {
        size: 5,
        current: 3,
        block: true,
        align: 'right',
        fillZero: true
      }
    });

    const indicator = wrapper.find('.nut-indicator');
    expect(indicator.classes()).toContain('nut-indicator--block');
    expect(indicator.classes()).toContain('nut-indicator--align__right');
    const firstChild = wrapper.findAll('.nut-indicator--number')[0];
    expect(firstChild.text()).toBe('03');
  });
});
