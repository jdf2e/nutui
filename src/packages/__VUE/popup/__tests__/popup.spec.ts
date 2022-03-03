import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import PopUp from '../index.vue';

test('should change z-index when using z-index prop', async () => {
  const wrapper = mount(PopUp, {
    props: {
      modelValue: true,
      zIndex: 10
    }
  });

  await nextTick();
  expect(wrapper.html()).toMatchSnapshot();
});

test('should emit click-overlay event when overlay is clicked', async () => {
  const wrapper = mount(PopUp, {
    props: {
      modelValue: true,
      isWrapTeleport: false
    }
  });
  const overlay = wrapper.find('.nut-overlay');
  overlay.trigger('click');
  expect(wrapper.emitted('click-overlay')).toHaveLength(1);
});

test('should render overlay-content slot correctly', () => {
  const wrapper = mount(PopUp, {
    props: {
      modelValue: true
    },
    slots: {
      'overlay-content': () => 'Custom Overlay Content'
    }
  });

  expect(wrapper.html()).toMatchSnapshot();
});
