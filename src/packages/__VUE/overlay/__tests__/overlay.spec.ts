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

test('should change animation duration when using duration prop', () => {
  const wrapper = mount(OverLay, {
    props: {
      modelValue: true,
      duration: 1
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.element.style.animationDuration).toEqual('1s');
});

test('prop overlay-class test', () => {
  const wrapper = mount(OverLay, {
    props: {
      modelValue: true,
      overlayClass: 'testclass'
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.classes()).toContain('testclass');
});

test('prop close-on-click-overlay test', async () => {
  const wrapper = mount(OverLay, {
    props: {
      modelValue: true,
      closeOnClickOverlay: false
    }
  });
  await wrapper.trigger('click');
  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.element.style.display).toEqual('none');
});

test('event click test', async () => {
  const wrapper = mount(OverLay, {
    props: {
      modelValue: true,
      closeOnClickOverlay: true
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  await overlay.trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
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
