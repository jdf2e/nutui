import { mount } from '@vue/test-utils';
import Button from '../index.vue';
import { nextTick } from 'vue';
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
test('should emit click event', () => {
  const wrapper = mount(Button);

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toHaveLength(1);
});

test('should not allow click when set disabled props', async () => {
  const wrapper = mount(Button, {
    props: {
      disabled: true
    }
  });
  wrapper.trigger('click');
  await nextTick();
  expect(wrapper.emitted('click')).toBeFalsy();
});
test('should not emit click event when loading', () => {
  const wrapper = mount(Button, {
    props: {
      loading: true
    }
  });

  wrapper.trigger('click');
  expect(wrapper.emitted('click')).toBeFalsy();
});
test('should change icon class prefix when using icon-class-prefix prop', () => {
  const wrapper = mount(Button, {
    props: {
      icon: 'star-fill',
      iconClassPrefix: 'my-icon'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
