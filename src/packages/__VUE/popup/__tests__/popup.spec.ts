import { mount } from '@vue/test-utils';
import { nextTick } from 'vue';
import PopUp from '../index.vue';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

test('should change z-index when using z-index prop', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      zIndex: 99,
      isWrapTeleport: false
    }
  });
  await nextTick();
  const pop: any = wrapper.find('.nut-popup');
  expect(pop.element.style.zIndex).toEqual('100');
});

test('should change animation duration when using duration prop', () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      duration: 12
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.element.style.animationDuration).toEqual('12s');
});

test('prop overlay-class test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      overlayClass: 'testclas'
    }
  });
  const overlay: any = wrapper.find('transition-stub');
  expect(overlay.classes()).toContain('testclas');
});

test('prop overlay-style test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      overlayStyle: { color: 'red' }
    }
  });
  const overlay: any = wrapper.find('transition-stub');
  expect(overlay.element.style.color).toContain('red');
});

test('should lock scroll when showed', async () => {
  const wrapper = mount(PopUp, {
    visible: false,
    isWrapTeleport: false
  });

  await wrapper.setProps({ visible: true });
  expect(document.body.classList.contains('nut-overflow-hidden')).toBeFalsy();
});

test('should not render overlay when overlay prop is false', () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      overlay: false
    }
  });
  expect(wrapper.find('.nut-overlay').exists()).toBeFalsy();
});

test('prop close-on-click-overlay test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      closeOnClickOverlay: false
    }
  });
  await wrapper.trigger('click');
  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.element.style.display).toEqual('');
});

test('pop from top', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      position: 'top'
    }
  });
  await nextTick();
  const pop: any = wrapper.find('.popup-top');
  expect(pop.exists()).toBeTruthy();
});

test('pop from bottom', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      position: 'bottom'
    }
  });
  await nextTick();
  const pop: any = wrapper.find('.popup-bottom');
  expect(pop.exists()).toBeTruthy();
});

test('pop from left', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      position: 'left'
    }
  });
  await nextTick();
  const pop: any = wrapper.find('.popup-left');
  expect(pop.exists()).toBeTruthy();
});

test('pop from right', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      position: 'right'
    }
  });
  await nextTick();
  const pop: any = wrapper.find('.popup-right');
  expect(pop.exists()).toBeTruthy();
});

test('should render close icon when using closeable prop', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      closeable: true
    }
  });
  await nextTick();
  const closeIcon = wrapper.find('.nutui-popup__close-icon');
  expect(closeIcon.exists()).toBeTruthy();
});

test('should render correct close icon when using close-icon prop', () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      closeable: true,
      closeIcon: 'success'
    }
  });

  expect(wrapper.find('.nutui-popup__close-icon').html()).toMatchSnapshot();
});

test('should have "van-popup--round" class when setting the round prop', () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      round: true
    }
  });

  expect(wrapper.find('.round').exists()).toBeTruthy();
});

test('should allow to using teleport prop', async () => {
  const wrapper = mount(PopUp);
  await nextTick();
  expect(document.body.querySelector('.nut-popup')).toBeTruthy();
});

test('event click test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      closeOnClickOverlay: true
    }
  });
  await nextTick();
  const popup: any = wrapper.find('.nut-popup');
  await popup.trigger('click');
  expect(wrapper.emitted('click')).toBeTruthy();
});

test('event click-close-icon test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false,
      closeable: true
    }
  });
  await wrapper.find('.nutui-popup__close-icon').trigger('click');
  expect(wrapper.emitted('click-close-icon')).toBeTruthy();
});

test('should emit open event when prop visible is set to true', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: false,
      isWrapTeleport: false
    }
  });

  await wrapper.setProps({ visible: true });
  expect(wrapper.emitted('open')).toBeTruthy();
});

test('event close test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false
    }
  });
  await wrapper.find('.nut-overlay').trigger('click');
  await sleep(2000);
  expect(wrapper.emitted('close')).toBeTruthy();
});

test('event click-overlay test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      isWrapTeleport: false
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  await overlay.trigger('click');
  expect(wrapper.emitted('click-overlay')).toBeTruthy();
});
