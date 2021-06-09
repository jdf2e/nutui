import { mount } from '@vue/test-utils';
import BackTop from '../index.vue';
import Icon from '../../icon/index.vue';
test('emit click event', () => {
  const wrapper = mount(BackTop);
  wrapper.trigger('click');
  expect(wrapper.emitted('click')!.length).toEqual(1);
});
test('backtop show', () => {
  const wrapper = mount(BackTop);
  const backtop = wrapper.find('.nut-backtop');
  expect(backtop.exists()).toBe(true);
});
test('backtop style', () => {
  const wrapper = mount(BackTop, {
    props: {
      bottom: 50,
      right: 40,
      zIndex: 100
    }
  });
  const backtop: any = wrapper.find('.nut-backtop');
  expect(backtop.element.style.bottom).toBe('50px');
  expect(backtop.element.style.right).toBe('40px');
  expect(backtop.element.style.zIndex).toBe('100');
});
