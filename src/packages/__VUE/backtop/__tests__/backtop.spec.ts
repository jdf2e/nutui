import { mount, config } from '@vue/test-utils';
import BackTop from '../index.vue';

import NutIcon from '../../icon/index.vue';

beforeAll(() => {
  config.global.components = {
    NutIcon
  };
});

afterAll(() => {
  config.global.components = {};
});

test('emit click event', () => {
  const wrapper = mount(BackTop);
  wrapper.trigger('click');
  expect(wrapper.emitted('click')!.length).toEqual(1);
});

test('backtop show', () => {
  const wrapper = mount(BackTop);
  const backtop = wrapper.find('.nut-backtop');
  expect(backtop.exists()).toBe(true);
});

test('backtop style', () => {
  const wrapper = mount(BackTop, {
    props: {
      bottom: 50
    }
  });
  const backtop: any = wrapper.find('.nut-backtop');
  expect(backtop.element.style.bottom).toBe('50px');
});

test('backtop style', () => {
  const wrapper = mount(BackTop, {
    props: {
      right: 40
    }
  });
  const backtop: any = wrapper.find('.nut-backtop');
  expect(backtop.element.style.right).toBe('40px');
});

test('backtop style', () => {
  const wrapper = mount(BackTop, {
    props: {
      zIndex: 100
    }
  });
  const backtop: any = wrapper.find('.nut-backtop');
  expect(backtop.element.style.zIndex).toBe('100');
});

test('should allow to use the elId prop', () => {
  const root = document.createElement('div');
  mount(BackTop, {
    props: {
      elId: root
    }
  });
  expect(root.innerHTML).toMatchSnapshot();
});
