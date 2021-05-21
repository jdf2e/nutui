import { mount } from '@vue/test-utils';
import Button from '../index.vue';

test('emit click event', () => {
  const wrapper = mount(Button);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')!.length).toEqual(1);
});

test('slot test', async () => {
  const wrapper = mount(Button, {
    slots: {
      default: '按钮测试'
    }
  });
  expect(wrapper.html()).toContain('按钮测试');
});
