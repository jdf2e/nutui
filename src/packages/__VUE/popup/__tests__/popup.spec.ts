import { mount, config } from '@vue/test-utils';
import { nextTick } from 'vue';
import PopUp from '../index.vue';
import NutOverlay from '../../overlay/index.vue';
import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutOverlay,
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

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
      teleportDisable: false
    }
  });
  await nextTick();
  const pop: any = wrapper.find('.nut-popup');
  expect(pop.element.style.zIndex).toEqual('99');
});

test('should change animation duration when using duration prop', () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false,
      duration: 12
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  expect(overlay.element.style.transitionDuration).toEqual('12s');
});

test('should lock scroll when showed', async () => {
  const wrapper = mount(PopUp, {
    visible: false,
    teleportDisable: false
  });

  await wrapper.setProps({ visible: true });
  expect(document.body.classList.contains('nut-overflow-hidden')).toBeFalsy();
});

test('should not render overlay when overlay prop is false', () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false,
      overlay: false
    }
  });
  expect(wrapper.find('.nut-overlay').exists()).toBeFalsy();
});

test('prop close-on-click-overlay test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false,
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
      teleportDisable: false,
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
      teleportDisable: false,
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
      teleportDisable: false,
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
      teleportDisable: false,
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
      teleportDisable: false,
      closeable: true
    }
  });
  await nextTick();
  const closeIcon = wrapper.find('.nut-popup__close-icon');
  expect(closeIcon.exists()).toBeTruthy();
});

test('should render correct close icon when using close-icon prop', () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false,
      closeable: true,
      closeIcon: 'success'
    }
  });

  expect(wrapper.find('.nut-popup__close-icon').html()).toMatchSnapshot();
});

test('should have "nut-popup--round" class when setting the round prop', () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false,
      round: true
    }
  });

  expect(wrapper.find('.round').exists()).toBeTruthy();
});

test('event click pop test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false,
      closeOnClickOverlay: true
    }
  });
  await nextTick();
  const popup: any = wrapper.find('.nut-popup');
  await popup.trigger('click');
  expect(wrapper.emitted('click-pop')).toBeTruthy();
});

test('event click-close-icon test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false,
      closeable: true
    }
  });
  await wrapper.find('.nut-popup__close-icon').trigger('click');
  expect(wrapper.emitted('click-close-icon')).toBeTruthy();
});

test('should emit open event when prop visible is set to true', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: false,
      teleportDisable: false
    }
  });

  await wrapper.setProps({ visible: true });
  expect(wrapper.emitted('open')).toBeTruthy();
});

test('event close test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false
    }
  });
  await wrapper.find('.nut-overlay').trigger('click');
  await sleep(2000);
  expect(wrapper.emitted('click-overlay')).toBeTruthy();
});

test('event click-overlay test', async () => {
  const wrapper = mount(PopUp, {
    props: {
      visible: true,
      teleportDisable: false
    }
  });

  const overlay: any = wrapper.find('.nut-overlay');
  await overlay.trigger('click');
  expect(wrapper.emitted('click-overlay')).toBeTruthy();
});
