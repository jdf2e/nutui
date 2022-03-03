import { mount } from '@vue/test-utils';
import OverLay from '../index.vue';

test('should change z-index when using z-index prop', () => {
  const wrapper = mount(OverLay, {
    props: {
      modelValue: true,
      zIndex: 99
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.element.style.zIndex).toEqual('99');
});

test('slots test', () => {
  const wrapper = mount(OverLay, {
    props: {
      modelValue: true
    },
    slots: {
      default: '这里是正文'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
