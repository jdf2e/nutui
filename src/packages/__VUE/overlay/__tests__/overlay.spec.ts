import { mount } from '@vue/test-utils';
import OverLay from '../index.vue';

test('should change z-index when using z-index prop', () => {
  const wrapper = mount(OverLay, {
    props: {
      visible: true,
      zIndex: 99
    }
  });
  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.element.style.zIndex).toEqual('99');
});

test('should change animation duration when using duration prop', () => {
  const wrapper = mount(OverLay, {
    props: {
      visible: true,
      duration: 1
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.element.style.transitionDuration).toEqual('1s');
});

test('prop overlay-class test', () => {
  const wrapper = mount(OverLay, {
    props: {
      visible: true,
      overlayClass: 'testclass'
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.classes()).toContain('testclass');
});

test('prop close-on-click-overlay test', async () => {
  const wrapper = mount(OverLay, {
    props: {
      visible: true,
      closeOnClickOverlay: false
    }
  });
  const overlay: any = wrapper.find('.nut-overlay');
  await overlay.trigger('click');
  expect(overlay.element.style.display).toEqual('');
});

test('event click test', async () => {
  const wrapper = mount(OverLay, {
    props: {
      visible: true,
      closeOnClickOverlay: true
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  await overlay.trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
  expect((wrapper.emitted('update:visible') as any)[0][0]).toBe(false);
});

test('slots test', () => {
  const wrapper = mount(OverLay, {
    props: {
      visible: true
    },
    slots: {
      default: '这里是正文'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
