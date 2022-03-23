import { mount } from '@vue/test-utils';
import Drag from '../index.vue';
import { triggerDrag, sleep } from '../../../utils/unit';

test('should render default slot correctly', () => {
  const wrapper = mount(Drag, {
    props: {
      attract: true,
      direction: 'y',
      boundary: { top: 10, left: 12, right: 20, bottom: 40 }
    },
    slots: {
      default: () => 'Custom Message'
    }
  });
  expect(wrapper.find('.nut-drag').html()).toMatchSnapshot();
});

test('touch move', async () => {
  const wrapper: any = mount(Drag, {
    slots: {
      default: () => 'Custom Message'
    }
  });
  triggerDrag(wrapper, 20, 100);
  await sleep(1000);
  expect(wrapper.element.style.left).toBe('20px');
});
test('should render attract when touch', async () => {
  const wrapper: any = mount(Drag, {
    props: {
      attract: true,
      direction: 'x'
    },
    slots: {
      default: () => `custom`
    }
  });
  triggerDrag(wrapper, 200, 0);
  await sleep(1000);
  expect(wrapper.element.style.left).toBe('375px');
  triggerDrag(wrapper, 100, 0);
  await sleep(1000);
  expect(wrapper.element.style.left).toBe('0px');
});
test('boundary touchMove', async () => {
  const wrapper: any = mount(Drag, {
    props: {
      boundary: { top: 360, left: 10, right: 100, bottom: 300 }
    },
    slots: {
      default: () => `custom`
    }
  });
  triggerDrag(wrapper, 200, 200);
  await sleep(1000);
  expect(wrapper.element.style.left).toBe('200px');
  expect(wrapper.element.style.top).toBe('360px');
});
