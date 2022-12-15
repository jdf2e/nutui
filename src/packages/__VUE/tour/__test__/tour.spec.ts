import { config, mount } from '@vue/test-utils';
import NutPopover from '../../popover/index.vue';
import NutPopup from '../../popup/index.vue';
import NutOverlay from '../../overlay/index.vue';
import NutIcon from '../../icon/index.vue';
import Tour from '../index.vue';

function sleep(delay = 0): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

beforeAll(() => {
  config.global.components = {
    NutIcon,
    NutPopup,
    NutOverlay,
    NutPopover,
    NutTour: Tour
  };
});

afterAll(() => {
  config.global.components = {};
});

const steps1 = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'target5'
  }
];

const steps2 = [
  {
    content: '支持一套代码同时开发多端小程序+H5',
    target: 'target6',
    popoverOffset: [40, 12],
    arrowOffset: -36
  }
];

const steps4 = [
  {
    target: 'target8'
  }
];

const steps = [
  {
    content: '70+ 高质量组件，覆盖移动端主流场景',
    target: 'target1'
  },
  {
    content: '支持一套代码同时开发多端小程序+H5',
    target: 'target2'
  },
  {
    content: '基于京东APP 10.0 视觉规范',
    target: 'target3',
    location: 'top-end'
  },
  {
    content: '支持定制主题，内置 700+ 个主题变量',
    target: 'target4',
    location: 'top-end'
  }
];

test('base render', async () => {
  const root = document.createElement('div');
  root.id = 'target5';
  const wrapper = mount(Tour, {
    props: {
      visible: false,
      steps: steps1,
      type: 'tile',
      location: 'bottom-end'
    }
  });
  await sleep();
  await wrapper.setProps({ visible: true });
  await sleep(1000);
  expect(wrapper.find('.nut-popover').exists()).toBeTruthy();
  expect(wrapper.find('.nut-popover-content--bottom-end').exists()).toBeTruthy();
});

test('custom style', async () => {
  const root = document.createElement('div');
  root.id = 'target5';
  const wrapper = mount(Tour, {
    props: {
      visible: false,
      steps: steps1,
      type: 'tile',
      location: 'bottom-end',
      bgColor: '#f00',
      theme: 'dark',
      maskWidth: '50',
      maskHeight: '50',
      offset: [0, 0]
    }
  });
  await sleep();
  await wrapper.setProps({ visible: true });
  await sleep(1000);
  const mask: any = wrapper.find('.nut-tour-mask');

  expect(mask.exists()).toBeTruthy();
  expect(mask.element.style.width).toEqual('50px');
  expect(mask.element.style.height).toEqual('50px');

  const arrow: any = wrapper.find('.nut-popover-arrow');
  expect(arrow.element.style.borderBottomColor).toEqual('#f00');

  const popover: any = wrapper.find('.nut-popover-content');
  expect(popover.element.style.background).toEqual('rgb(255, 0, 0)');
});

test('custom offset', async () => {
  const root = document.createElement('div');
  root.id = 'target6';
  const wrapper = mount(Tour, {
    props: {
      visible: false,
      steps: steps2,
      type: 'tile',
      location: 'bottom-end',
      bgColor: '#f00',
      theme: 'dark',
      offset: [8, 8]
    }
  });
  await sleep();
  wrapper.setProps({ visible: true });
  await sleep(1000);

  const arrow: any = wrapper.find('.nut-popover-arrow');
  expect(arrow.element.style.right).toEqual('52px');
});

test('slot render', async () => {
  const root = document.createElement('div');
  root.id = 'target6';
  const wrapper = mount(Tour, {
    props: {
      visible: false,
      steps: steps4,
      type: 'tile',
      location: 'bottom-end',
      bgColor: '#f00',
      theme: 'dark',
      offset: [8, 8]
    },
    slots: {
      default: `nutui 4.x 即将发布，敬请期待`
    }
  });
  await sleep();
  await wrapper.setProps({ visible: true });
  await sleep(1000);

  const popover: any = wrapper.find('.nut-popover-content-group');
  expect(popover.text()).toEqual('nutui 4.x 即将发布，敬请期待');
});

test('steps render', async () => {
  const root = document.createElement('div');
  root.id = 'target1';
  const root1 = document.createElement('div');
  root1.id = 'target2';
  const wrapper = mount(Tour, {
    props: {
      visible: false,
      steps: steps,
      location: 'bottom-end'
    }
  });
  await sleep();
  await wrapper.setProps({ visible: true });
  await sleep(1000);

  const btn: any = wrapper.find('.nut-tour-content-bottom-operate-btn');
  expect(btn.exists()).toBeTruthy();

  btn.trigger('click');
  await sleep(0);

  const btn2: any = wrapper.findAll('.nut-tour-content-bottom-operate-btn');
  expect(btn2.length).toBe(2);
});
