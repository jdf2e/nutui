import { mount } from '@vue/test-utils';
import ShortPassword from '../index.vue';
import { nextTick } from 'vue';

test('should render shortpassword', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: false,
      modelValue: '123'
    }
  });
  const psdLength = wrapper.findAll('.nut-short-password__item');
  expect(psdLength.length).toBe(6);
});

test('should emit complete when finish input', async () => {
  const wrapper = mount(ShortPassword, {
    props: {
      visible: true,
      modelValue: ''
    }
  });
  wrapper.setProps({ modelValue: '321123' });
  await nextTick();
  expect(wrapper.emitted().complete[0]).toEqual(['321123']);
});
