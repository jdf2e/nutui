import { shallowMount } from '@vue/test-utils';
import Indicator from '../index.vue';
test('test size && current', async () => {
  const wrapper = shallowMount(Indicator, {
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
test('test block && align && fillZero', () => {
  const wrapper = shallowMount(Indicator, {
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
