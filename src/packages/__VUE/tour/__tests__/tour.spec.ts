import { mount } from '@vue/test-utils';
import Tour from '../index.vue';
import { nextTick } from 'vue';

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
    content: '70+ 高质量组件，覆盖移动端主流场景',
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
  await wrapper.setProps({ visible: true });
  expect(wrapper.find('.nut-popover').exists()).toBeTruthy();
  expect(wrapper.find('.nut-popover-content--bottom-end').exists()).toBeTruthy();
});

test('custom style', async () => {
  const root = document.createElement('div');
  root.id = 'target5';
  const wrapper = mount(Tour, {
    props: {
      visible: true,
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

  const arrow = wrapper.find('.nut-popover-arrow');
  expect(arrow.html()).toContain('border-bottom-color: #f00');

  const popover = wrapper.find('.nut-popover-content');
  expect(popover.html()).toContain('background: rgb(255, 0, 0)');
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
  wrapper.setProps({ visible: true });
  const arrow = wrapper.find('.nut-popover-arrow');
  expect(arrow.html()).toContain('right: 52px');
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
  await wrapper.setProps({ visible: true });
  const popover = wrapper.find('.nut-popover-content-group');
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
  await wrapper.setProps({ visible: true });

  const btn = wrapper.find('.nut-tour-content-bottom-operate-btn');
  expect(btn.exists()).toBeTruthy();

  btn.trigger('click');
  await nextTick();

  const btn2 = wrapper.findAll('.nut-tour-content-bottom-operate-btn');
  expect(btn2.length).toBe(2);
});
