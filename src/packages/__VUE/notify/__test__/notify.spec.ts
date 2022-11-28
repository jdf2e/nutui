import { mount } from '@vue/test-utils';
import Notify from '../index.vue';

const sleep = (delay = 0): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};

describe('Notify', () => {
  test('base notify', () => {
    const wrapper = mount(Notify, {
      props: {
        teleportDisable: false
      }
    });
    const rate = wrapper.find('.nut-popup').find('.nut-notify');
    expect(rate.exists()).toBe(true);
  });
  test('base notify message', async () => {
    const wrapper = mount(Notify, {
      props: {
        teleportDisable: false,
        message: '测试文案'
      }
    });
    expect(wrapper.html()).toContain('<!--teleport start-->');
  });
  test('should be displayed after setting the type', async () => {
    const wrapper = mount(Notify, {
      props: {
        teleportDisable: false,
        type: 'warning'
      }
    });
    const notify = wrapper.findAll('.nut-notify--warning');
    expect(notify.length).toBe(1);
  });

  test('should be displayed after setting the color and background', async () => {
    const wrapper = mount(Notify, {
      props: {
        teleportDisable: false,
        color: 'rgb(173, 0, 0)',
        background: 'rgb(255, 225, 225)'
      }
    });
    const notify = wrapper.find('.nut-popup').find('.nut-notify');
    expect((notify.element as HTMLElement).style.color).toBe('rgb(173, 0, 0)');
    expect((notify.element as HTMLElement).style.background).toBe('rgb(255, 225, 225)');
  });

  test('should be displayed after setting the color and class-name', () => {
    const wrapper = mount(Notify, { props: { teleportDisable: false, 'class-name': 'xxx' } });
    const rate = wrapper.findAll('.xxx');
    expect(rate.length).toBe(1);
  });

  test('base notify message', async () => {
    const wrapper = mount(Notify, {
      props: {
        teleportDisable: false,
        visible: true,
        duration: 3000
      }
    });
    await sleep(3001);
    const notify = wrapper.find('.nut-popup').find('.nut-notify');
    expect((notify.element as HTMLElement).style.display).toEqual('');
  });
});
